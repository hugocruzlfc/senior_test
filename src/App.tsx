import "./App.css";
import { Navbar } from "./components";
import { Home } from "./pages";
import store from "./redux/store";
import { LayaoutContainer } from "./styled-components";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <LayaoutContainer>
        <Home />
      </LayaoutContainer>
    </Provider>
  );
}

export default App;
