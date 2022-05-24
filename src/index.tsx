/* @refresh reload */
import { render } from "solid-js/web";
import "twind/shim";
import Root from "./components/Root";

render(() => <Root />, document.getElementById("root") as HTMLElement);
