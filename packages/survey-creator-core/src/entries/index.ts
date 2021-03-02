export let Version: string;
Version = `${process.env.VERSION}`;

export * from "../components/tabs/json-editor-ace";
export * from "../components/tabs/json-editor-textarea";
export * from "../components/tabs/json-editor-plugin";
export * from "../components/tabs/designer";
export * from "../components/tabs/test";
export * from "../components/page-navigator/page-navigator";
export * from "../components/page";
export * from "../components/simulator";
export * from "../components/results";
export * from "../creator-base";
export * from "../editorLocalization";
export * from "../property-grid";
export * from "../property-grid/condition";
export * from "../property-grid/matrices";
//export * from "../property-grid/modal-action";
export * from "../property-grid/restfull";
export * from "../property-grid/values";
export * from "../questionconverter";
export * from "../svgbundle";
export * from "../tabs/embed";
export * from "../tabs/logic";
export * from "../tabs/logic-ui";
export * from "../tabs/translation";
export * from "../textWorker";
export * from "../toolbox";
export * from "../utils/utils";
export { creatorCss } from "../survey-theme/creator-css";

import "../components/tabbed-menu/tabbed-menu.scss";
import "../components/tabbed-menu/tabbed-menu-item.scss";
import "../components/property-panel/property-panel.scss";
import "../components/property-panel/property-panel-item.scss";
import "../components/toolbox/toolbox.scss";
import "../components/toolbox/toolbox-item.scss";
import "../components/button.scss";
import "../components/question.scss";
import "../survey-theme/survey.scss";
import "../utils/design.scss";
import "../utils/layout.scss";
