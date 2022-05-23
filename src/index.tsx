/* @refresh reload */
import { render } from "solid-js/web";
import "twind/shim";
import App from "./components/App";

render(() => <App />, document.getElementById("root") as HTMLElement);
