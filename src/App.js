import React, {Component} from 'react';
import './common/css/common.css';
import './common/css/library.css';

import Nav from "./pages/Nav/nav";
import MainContainer from "./pages/Main/maincontainer";
import LoginContainer from "./pages/Login/logincontainer";
import JoinContainer from "./pages/Join/joincontainer";
import CartContainer from "./pages/Cart/cartcontainer";
import ItemContents from './pages/Item/template/ltemcontents';
import PrivateRoute from "./route/Auth";
import ProtectedPage from "./route/Auth";


import { BrowserRouter as Router, Route } from 'react-router-dom';


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

              {/* <PrivateRoute path="/protected">
                <ProtectedPage />
              </PrivateRoute> */}


              {/* <PrivateRoute exact path="/loggined">
                <Route path="/loggined" component={MainContainer}/>
                <Route path="/loggined/item/:id" component={ItemContents} />
                <Route path="/loggined/login" component={LoginContainer}/>
                <Route path="/loggined/join" component={JoinContainer}/>
                <Route path="/loggined/cart" component={CartContainer}/>
              </PrivateRoute> */}
            </Router>
          </>
      );
  }
}

export default App;
