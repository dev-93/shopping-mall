import React, {Component} from 'react';
import './common/css/common.css';
import './common/css/library.css';
import MainContainer from "./pages/Main/maincontainer";
import LoginContainer from "./pages/Login/logincontainer";
import JoinContainer from "./pages/Join/joincontainer";
import CartContainer from "./pages/Cart/cartcontainer";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from "./pages/Nav/nav";
import ItemContents from './pages/Item/template/ltemcontents';


class App extends Component {
  render() {
      return (
          <>
            <Router>
              <Nav />
              <Route exact path="/" component={MainContainer}/>
              <Route path="/item/:id" component={ItemContents} />
              <Route path="/login" component={LoginContainer}/>
              <Route path="/join" component={JoinContainer}/>
              <Route path="/cart" component={CartContainer}/>
            </Router>
          </>
      );
  }
}

export default App;
