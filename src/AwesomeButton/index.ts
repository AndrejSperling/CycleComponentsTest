import xs, {Stream} from "xstream";
import {button, div, DOMSource, p} from "@cycle/dom";
import {VNode} from "snabbdom/vnode";

export interface AwesomeButton {
    (sources: Sources): Sinks
}

export interface Sources {
    DOM: DOMSource
}

export interface Sinks {
    DOM: Stream<VNode>
}


function AwesomeButton(sources: Sources): Sinks {

    const action$ = xs.merge(
        sources.DOM.select('.dec').events('click').mapTo(-1),
        sources.DOM.select('.inc').events('click').mapTo(+1)
    );

    const count$ = action$.fold((x, y) => x + y, 0);

    const vdom$ = count$.map(count =>
        div([
            button('.dec', 'Decrement'),
            button('.inc', 'Increment'),
            p('Counter: ' + count)
        ])
    );

    return {DOM: vdom$}
}