import { Stream } from "xstream";
import { DOMSource } from "@cycle/dom";
import { VNode } from "snabbdom/vnode";
export interface AwesomeButton2 {
    (sources: Sources): Sinks;
}
export interface Sources {
    DOM: DOMSource;
}
export interface Sinks {
    DOM: Stream<VNode>;
}
