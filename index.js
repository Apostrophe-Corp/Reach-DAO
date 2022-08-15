import * as AppViews from "./components/App";
import * as Attacher from "./components/Attacher";
import * as Deployer from "./components/Deployer";
import * as ProposalViews from "./components/Proposals";
import RenderViews, { renderDOM } from "./layouts/renderViews";
import ReachContextProvider from "./context/ReachContext";
// import styles from "./styles/Global.module.css";
import { fmtClasses } from "./hooks";

const Views = {
    ...AppViews,
    ...Attacher,
    ...Deployer,
    ...ProposalViews,
};

function App () {
    return (
        <div className={ fmtClasses() }>
            <RenderViews { ...Views } />
        </div>
    );
}

renderDOM(
    <ReachContextProvider>
        <App />
    </ReachContextProvider>
);

export default App;
