import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/HEADER/Header';
import Navbar from './Components/NAVBAR/Navbar';
import Footer from './Components/FOOTER/Footer';
import Show from './Components/SHOWCONTENT/Show';
import Office from './Components/OFFICE/Office';
import Papers from './Components/PAPERS/Papers';
import Tech from './Components/TECH/Tech';
import Clean from './Components/CLEAN/Clean';
import Safety from './Components/SAFETY/Safety';
import User from './Components/USER/User';
import Contact from './Components/CONTACT/Contact';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Navbar />
          <Show />
          <Footer />
          <Route path="/Office" component={Office} />
          <Route path="/Papers" component={Papers} />
          <Route path="/Tech" component={Tech} />
          <Route path="/Clean" component={Clean} />
          <Route path="/Safety" component={Safety} />
          <Route path="/User" component={User} />
          <Route path="/Contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
