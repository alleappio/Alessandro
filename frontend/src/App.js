import Home from "./components/home";
import AboutMe from "./components/aboutMe";
import Portfolio from "./components/portfolio";
import Contacts from "./components/contacts";
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state={"ts":"Home"};
  toShow=<Home />

  changeState = ns => {
    this.setState({"ts":ns});
  }
  handleSubmit = e =>{
    e.preventDefault();
  }

  render(){
    let home="";
    let aboutMe="";
    let portfolio="";
    let contacts="";
    if(this.state.ts === "Home"){
        this.toShow=<Home />
        home="red";
        aboutMe="";
        portfolio="";
        contacts="";   
    }
    if(this.state.ts === "AboutMe"){
      this.toShow=<AboutMe />
      home="";
      aboutMe="red";
      portfolio="";
      contacts="";
    }
    if(this.state.ts === "Portfolio"){
      this.toShow=<Portfolio />
      home="";
      aboutMe="";
      portfolio="red";
      contacts="";
    }
    if(this.state.ts === "Contacts"){
      this.toShow=<Contacts />
      home="";
      aboutMe="";
      portfolio="";
      contacts="red";
    }
    home+=" nav-buttons";
    aboutMe+=" nav-buttons";
    portfolio+=" nav-buttons";
    contacts+=" nav-buttons";
    return(
      <>
        <nav className="navbar">
          <div className="container-fluid">
            <span className="navbar-brand"></span>
            <div className="buttons-mv">
              <button onClick={() => this.changeState("Home")} className={home}> Home </button>
              <button onClick={() => this.changeState("AboutMe")} className={aboutMe}> About me </button>
              <button onClick={() => this.changeState("Portfolio")} className={portfolio}> Portfolio </button>
              <button onClick={() => this.changeState("Contacts")} className={contacts}> Contacts </button>
            </div>
          </div>
        </nav>
        <div className='App-header'>
          {this.toShow}
        </div>
      </>
    );
  }
}
export default App;
