import React, {Component} from 'react';

class Link extends Component{
  render(){
    return(
      <li className="link">
        <a>Facebook's Email-Harvesting Practice Is Under Investigation in N.Y.</a>
        <a>(bloomberg.com)</a>
        <br/>
        <p className="link_metadata">156 points by kerng 4 hours ago</p>
        <a className="comments">40 comments</a>
      </li>
    );
  }
}

export default Link;
