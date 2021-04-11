import React from 'react';
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/HomePage/Home'
import SignUp from './Pages/Signup/Signup'
import Footer from './components/Footer/Footer';
import Wallet from './components/Wallet/Wallet'
import { Products } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar/>

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' exact component={Products} />
        <Route path='/wallet' exact component={Wallet} />
        <Route path='/sign-up' exact component={SignUp} />
      </Switch>

      <Footer />

    </Router>
  );
}

export default App;


