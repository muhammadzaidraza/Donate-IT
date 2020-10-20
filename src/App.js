import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/index";
import Incident from "./components/Incident/index";
import Navbar from "./components/navbar/index";
import Donation from "./components/donation/index";
import Contact from "./components/contact/index";
import AboutUs from "./components/home/About Us/index";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/incident" component={Incident} />
            <Route path="/donation" component={Donation} />
            <Route path="/contact" component={Contact} />
            <Route path="/home/aboutUs" component={AboutUs} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
