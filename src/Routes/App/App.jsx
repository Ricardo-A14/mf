import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../../Containers/Layout";
import Home from "../../Pages/Home";

import "../../Styles/global.css";
import "./App.css";

import AppContext from "../../Context/index";
import useInitialState from "../../Hooks/useInitialState";

function App() {
  const initialState = useInitialState();

  return (
    <div className="App">
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/mf" element={<Home />} />
              <Route exact path="/maquillaje" element={<Home />} />
              <Route exact path="/labiales" element={<Home />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
