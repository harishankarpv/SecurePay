import React from 'react';
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/HomePage/Home'
// import SignUp from './Pages/Signup/Signup'
import Footer from './components/Footer/Footer';
import Authentication from './components/Authentication/app'
import Wallet from './components/Wallet/Wallet'

import ScrollToTop from './components/ScrollToTop';
import { Products } from './components';
import About from './Pages/About/About';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar/>

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/products' exact component={Products} />
        <Route path='/wallet' exact component={Wallet} />
        <Route path='/log-in' exact component={Authentication} />
        <Route path='/log-out' exact component={Authentication} />
      </Switch>

      <Footer />

    </Router>
  );
}

export default App;


