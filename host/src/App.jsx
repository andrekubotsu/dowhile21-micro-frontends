import React, { useState, Suspense } from "react";
import ReactDOM from "react-dom";
import { System } from "../src/utils/loadComponents";
// import Button from "dsl/Button";
import Main from "./pages/Main";

import "./index.scss";
import ErrorBoundary from "./pages/Error";

// lazy loading to suspend
const RemoteButton = React.lazy(() => import("dsl/Button"));

const App = () => {
  //const [system, setSystem] = useState(undefined);

  return (
    <div className="w-screen h-screen">
      {/* BASIC IMPORT FROM MODULE FEDERATION */}

      {/* <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <Button /> */}

      {/* DYNAMIC IMPORT *RUNTIME* FROM MODULE FEDERATION */}
      {/* <button
        onClick={() => {
          setSystem({
            url: "http://localhost:8081/remoteEntry.js",
            scope: "dsl",
            module: "./Button",
          });
        }}
      >
        Carregar modulo
      </button>

      <System system={system} /> */}

      <Main>
        <Suspense fallback="Loading...">
          <ErrorBoundary>
            <RemoteButton />
          </ErrorBoundary>
        </Suspense>
      </Main>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
