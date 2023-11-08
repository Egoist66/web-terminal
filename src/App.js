import Terminal from "./components/Terminal/Terminal";
import {Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <div className="app-wrapper">
      
      <h1>Terminal App</h1>
      <Routes>
          <Route path={'/terminal-shell'} element={<Terminal hidden={false} />}/>
      </Routes>

        <Terminal hidden={true} />


    </div>
  );
}

export default App;
