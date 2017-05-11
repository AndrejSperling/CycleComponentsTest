"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xstream_1 = require("xstream");
var dom_1 = require("@cycle/dom");
function AwesomeButton2(sources) {
    var action$ = xstream_1.default.merge(sources.DOM.select('.dec').events('click').mapTo(-10), sources.DOM.select('.inc').events('click').mapTo(+10));
    var count$ = action$.fold(function (x, y) { return x + y; }, 0);
    var vdom$ = count$.map(function (count) {
        return dom_1.div([
            dom_1.button('.dec', 'Decrement'),
            dom_1.button('.inc', 'Increment'),
            dom_1.p('Counter: ' + count)
        ]);
    });
    return { DOM: vdom$ };
}
