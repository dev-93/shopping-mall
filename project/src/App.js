import React, {Component} from 'react';
import './common/css/common.css';
import './common/css/library.css';
import MainContainer from "./pages/Main/maincontainer";
import LoginContainer from "./pages/Login/logincontainer";
import JoinContainer from "./pages/Join/joincontainer";
import CartContainer from "./pages/Cart/cartcontainer";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from "./pages/Nav/nav";


class App extends Component {
  render() {
      return (
          <>
            <Router>
              <Nav />
              <Route exact path="/" component={MainContainer}/>
              <Route path="/Login" component={LoginContainer}/>
              <Route path="/Join" component={JoinContainer}/>
              <Route path="/Cart" component={CartContainer}/>
            </Router>
          </>
      );
  }
}

export default App;
