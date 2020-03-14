import React from "react";
import TopNav from "./TopNav.jsx";
import useGlobalState from "../store/useGlobalState";
import Context from "../store/context";
import _SideBar from "../views/_SideBar.jsx";
import Schedule from "./Schedule.jsx";
import Vocabulary from "./vocabulary.jsx";
import Home from "./Home.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { browserHistory } from "react-router";
const App = () => {
  console.log("app rerendered");
  const store = useGlobalState();

  return (
    <div>
      <Context.Provider value={store}>
        <TopNav />
        <Router history={browserHistory}>
          <_SideBar />
          <Container>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Schedule" exact component={Schedule} />
              <Route path="/Vocabulary" exact component={Vocabulary} />
            </Switch>
          </Container>
        </Router>
      </Context.Provider>
    </div>
  );
};

export default App;
