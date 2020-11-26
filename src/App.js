import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./containers/Header/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h2>hey checkout</h2>
          </Route>
          <Router path="/login">
            <h2>hey login</h2>
          </Router>
          <Route path="/">
            <Header />
            <h2>hey home</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
