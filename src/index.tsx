import * as React from "react";
import * as ReactDOM from "react-dom";

const App: React.FC = () => {
    return <h1>My React App!</h1>;
};

ReactDOM.render(<App />, document.querySelector("#root"));