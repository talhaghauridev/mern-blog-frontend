import { Suspense } from "react";
import Routes from "./Routes";
import ErrorBoundary from "@lib/ErrorBoundary";
const App = () => {

  return (
    <>
      <div id="App">
        <Suspense fallback={<h1>Loading...</h1>}>
          <ErrorBoundary fallback={<>Error</>}>
            <Routes />
          </ErrorBoundary>
        </Suspense>
      </div>
    </>
  );
};



export default App;
