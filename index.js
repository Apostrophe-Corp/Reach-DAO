import * as AppViews from "./src/components/App";
import * as Attacher from "./src/components/Attacher";
import * as Deployer from "./src/components/Deployer";
import * as ProposalViews from "./src/components/Proposals";
import * as Bounties from "./src/components/Bounties";
import * as InfoCenter from "./src/components/InfoCenter";
import RenderViews, { renderDOM } from "./src/layouts/renderViews";
import ReachContextProvider from "./src/context/ReachContext";
// import styles from "./styles/Global.module.css";
import { fmtClasses } from "./src/hooks";

const Views = {
    ...AppViews,
    ...Attacher,
    ...Deployer,
    ...ProposalViews,
    ...Bounties,
    ...InfoCenter,
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
