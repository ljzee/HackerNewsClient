import React, {Component} from 'react';

class Header extends Component{
  render(){
    return(
      <header>
        <a className="logo">Hacker News</a>
        <nav>
          <a>New</a>
          <a>Past</a>
          <a>Comments</a>
          <a>Ask</a>
          <a>Show</a>
          <a>Jobs</a>
          <a>Submit</a>
        </nav>
        <a className="login">Login</a>
      </header>
    );
  }
}

export default Header;
