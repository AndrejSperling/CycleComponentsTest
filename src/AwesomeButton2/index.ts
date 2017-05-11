import xs, {Stream} from "xstream";
import {button, div, DOMSource, p} from "@cycle/dom";
import {VNode} from "snabbdom/vnode";

export interface AwesomeButton2 {
    (sources: Sources): Sinks
}

export interface Sources {
    DOM: DOMSource
}

export interface Sinks {
    DOM: Stream<VNode>
}


function AwesomeButton2(sources: Sources): Sinks {

    const action$ = xs.merge(
        sources.DOM.select('.dec').events('click').mapTo(-10),
        sources.DOM.select('.inc').events('click').mapTo(+10)
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