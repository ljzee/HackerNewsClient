import React, {Component} from 'react';
import Link from "./Link";
import axios from 'axios';

class Body extends Component{

  constructor(props){
    super(props);
    this.state = {
                  ids: [],
                  number: 30,
                  content: []}
  }

  componentDidMount(){
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(response => {
        let newState = Object.assign({}, this.state);
        newState.ids = response.data;
        this.setState(newState);

        for(var i = 0; i < this.state.number; i++){
          axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.state.ids[i]}.json?print=pretty`)
            .then(response => {
              let newState = Object.assign({}, this.state);
              newState.content.push(response.data);
              this.setState(newState);
            })

          }

      })
      .catch(function(error){
        console.log(error);
      })
  }

  render(){
    return(
      <ol className="Body">
        {this.state.content.map((content, i) => (
          <Link key={i} content={content}/>
        ))}

      </ol>
    );
  }
}

export default Body;
