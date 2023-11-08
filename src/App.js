import Terminal from "./components/Terminal/Terminal";
import {Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <div className="app-wrapper">

        <div>
            <h1 style={{textAlign: 'center'}}>Terminal App press Shift + ~ </h1>

        </div>
      <Routes>
          <Route path={'/terminal-shell'} element={<Terminal hidden={false} />}/>
      </Routes>

        <Terminal hidden={true} />


    </div>
  );
}

export default App;
