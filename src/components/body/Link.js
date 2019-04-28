import React, {Component} from 'react';

class Link extends Component{
  constructor(props){
    super(props);
    console.log(this.props.content);
  }

  render(){
    return(
      <li className="link">
        <a>{this.props.content.title}</a>
        <a>(bloomberg.com)</a>
        <br/>
        <p className="link_metadata">{`${this.props.content.score} points by ${this.props.content.by}`}</p>
        <a className="comments">{`${this.props.content.descendants} comments`}</a>
      </li>
    );
  }
}

export default Link;
