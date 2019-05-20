import React, {Component} from 'react';

class Link extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <tbody className="link">
        <tr>
          <td>{`${this.props.index}.`}</td>
          <td>
            <a>{this.props.content.title}</a>
            <a>(bloomberg.com)</a>
          </td>
        </tr>

        <tr>
          <td></td>
          <td>
            <p className="link_metadata">{`${this.props.content.score} points by ${this.props.content.by}`}</p>
            <a className="comments">{`${this.props.content.descendants} comments`}</a>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default Link;
