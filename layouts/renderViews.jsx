import React from "react";
import ReactDOM from "react-dom";
import { useReach } from "../hooks";

export function renderDOM (app) {
    ReactDOM.render(
        <React.StrictMode>{ app }</React.StrictMode>,
        document.getElementById("root")
    );
}

const RenderViews = (Views) => {
    const { views } = useReach();
    const View = Views[views.view];
    const Wrapper = views.wrapper ? Views[views.wrapper] : Views["AppWrapper"];

    const content = <View />;
    return <Wrapper>{ content }</Wrapper>;
};

export default RenderViews;