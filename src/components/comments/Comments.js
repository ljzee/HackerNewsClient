import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Post from '../body/Post'

class Comments extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


    this.state = {
      content: {},
      value: ''
    }
  }

  componentDidMount(){
    //console.log(this.props.match.params.id);
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.props.match.params.id}.json?print=pretty`)
    .then(response => {
      let newState = Object.assign({}, this.state);
      newState.content = response.data;
      this.setState(newState);
    }).catch(function(err){
      console.log(err);
    })
  }

  handleChange(event){
    let newState = Object.assign({}, this.state);
    newState.value = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event){
    event.preventDefault();
  }

  render(){
    return(
      <div className="Body">
        <table>
          <Post content={this.state.content} postPage={true}/>
        </table>
        <form onSubmit={this.handleSubmit}>
          <textarea rows="6" cols="90" onChange={this.handleChange}></textarea>
          <br/>
          <input type="submit" value="Add comment"/>
        </form>
      </div>
    );
  }
}

export default Comments;
