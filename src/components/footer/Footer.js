import React, {Component} from 'react';
import SearchField from 'react-search-field';

class Footer extends Component{
  render(){
    return(
      <footer className="Footer">
        <div className="Footer-list">
          <a>Guidelines</a>
          <a>FAQ</a>
          <a>Support</a>
          <a>Api</a>
          <a>Security</a>
          <a>List</a>
          <a>Bookmarklet</a>
          <a>Legal</a>
          <a>Apply to YC</a>
          <a>Contact</a>
        </div>
        <SearchField
            placeholder="Search..."
            searchText=""
        />
      </footer>
    );
  }
}

export default Footer;
