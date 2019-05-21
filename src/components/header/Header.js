import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
  constructor(props){
      super(props);
      this.state = {
        active: ""
      }

      this.setLinkActive = this.setLinkActive.bind(this);
  }

  setLinkActive(name){
    this.setState({active: name});
    console.log(this.state.active);
  }

  render(){
    return(
      <header>
        <Link to="/" onClick={() => this.setLinkActive("")} className="logo">Hacker News</Link>
        <nav>
          <Link to="/new" onClick={() => this.setLinkActive("new")} className={this.state.active === "new" ? "active" : ""}>New</Link>
          <Link to="/past" onClick={() => this.setLinkActive("past")} className={this.state.active === "past" ? "active" : ""}>Past</Link>
          <Link to="/comments" onClick={() => this.setLinkActive("comments")} className={this.state.active === "comments" ? "active" : ""}>Comments</Link>
          <Link to="/ask" onClick={() => this.setLinkActive("ask")} className={this.state.active === "ask" ? "active" : ""}>Ask</Link>
          <Link to="/show" onClick={() => this.setLinkActive("show")} className={this.state.active === "show" ? "active" : ""}>Show</Link>
          <Link to="/jobs" onClick={() => this.setLinkActive("jobs")} className={this.state.active === "jobs" ? "active" : ""}>Jobs</Link>
          <Link to="/submit" onClick={() => this.setLinkActive("submit")} className={this.state.active === "submit" ? "active" : ""}>Submit</Link>
        </nav>
        <a className="login">Login</a>
      </header>
    );
  }
}

export default Header;
