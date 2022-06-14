import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Header from "./components/Header";
import CreateStream from "./components/streams/CreateStream";
import DeleteStream from "./components/streams/DeleteStream";
import EditStream from "./components/streams/EditStream";
import ShowStream from "./components/streams/ShowStream";
import StreamList from "./components/streams/StreamList";

export const history = createBrowserHistory();

const App = () => {
  return (
    <>
      <Router history={history}>
        <Header />
        <div className="ui container">
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={CreateStream} />
            <Route path="/streams/edit/:id" exact component={EditStream} />
            <Route path="/streams/delete/:id" exact component={DeleteStream} />
            <Route path="/streams/:id" exact component={ShowStream} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
