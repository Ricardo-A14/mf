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
        <Layout>
          <Home />
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;
