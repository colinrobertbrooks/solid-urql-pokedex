/* @refresh reload */
import { render } from "solid-js/web";
import "twind/shim";
import Root from "./components/Root";
import "./index.css";

render(() => <Root />, document.getElementById("root") as HTMLElement);
