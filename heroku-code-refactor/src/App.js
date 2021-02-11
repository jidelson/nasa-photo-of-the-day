import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import NotFoundPage from './components/pages/NotFoundPage';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/resume" component={Resume} />
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
    </div>
  );
}

export default App;
