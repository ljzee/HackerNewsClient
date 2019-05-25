import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Post extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <tbody className="link">
        <tr>
          {this.props.postPage ? <td></td> : <td>{`${this.props.index}.`}</td>}
          <td>
            <a href={this.props.content.url}>{this.props.content.title}</a>
            <a>(bloomberg.com)</a>
          </td>
        </tr>

        <tr>
          <td></td>
          <td>
            <p className="link_metadata">{`${this.props.content.score} points by ${this.props.content.by}`}</p>
            <Link to={`/post/${this.props.content.id}`} className="comments">{`${this.props.content.descendants} comments`}</Link>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default Post;
