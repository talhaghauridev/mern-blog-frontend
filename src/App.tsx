import { Suspense } from "react";
import Routes from "./Routes";
import ErrorBoundary from "@lib/ErrorBoundary";
const App = () => {
  const dat = new Date()
  const options = { month: "long", day: "numeric", year: "numeric" };

  console.log(dat.toLocaleDateString("en-US", {
    month:"long",
    day:"2-digit",
    year:"2-digit",
  }));
  

  return (
    <>
      <div id="App">
        {dat.getDate()}
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
