import React, {Component} from 'react';
import Link from "./Link";
import axios from 'axios';

class Body extends Component{

  constructor(props){
    super(props);
    this.state = {
                  ids: [],
                  number: 30,
                  content: [],
                  startIndex: 0}

    this.swapContent = this.swapContent.bind(this);
  }

  componentDidMount(){
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(response => {
        let newState = Object.assign({}, this.state);
        newState.ids = response.data;
        let promises = [];

        for(var i = newState.startIndex; i < newState.number; i++){
          promises.push(axios.get(`https://hacker-news.firebaseio.com/v0/item/${newState.ids[i]}.json?print=pretty`));
        }
        axios.all(promises).then(result => {

          let newContent = result.map(x => x.data);
          newState.content = newContent;
          this.setState(newState);

        });

      })
      .catch(function(error){
        console.log(error);
      })
  }

  /*componentDidUpdate(){
    let newState = Object.assign({}, this.state)
    for(var i = this.state.startIndex; i < this.state.number; i++){
      axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.state.ids[i]}.json?print=pretty`)
        .then(response => {
          newState = Object.assign({}, this.state);
          newState.content.push(response.data);
          this.setState(newState);
        })

      }
  }*/

  swapContent(){
      let newState = Object.assign({}, this.state);
      newState.startIndex = newState.startIndex + newState.number;
      console.log(newState.startIndex);

      let promises = [];
      for(var i = newState.startIndex; (i < newState.startIndex + newState.number) && (i < newState.ids.length); i++){
        promises.push(axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.state.ids[i]}.json?print=pretty`));
      }
      axios.all(promises).then(result => {

        let newContent = result.map(x => x.data);
        newState.content = newContent;
        this.setState(newState);

      });

  }

  render(){
    return(
      <div className="Body">
        <table>
          {this.state.content.map((content, i) => (
            <Link key={i} content={content} index={this.state.startIndex + i + 1}/>
          ))}

          {(this.state.startIndex + this.state.number) < this.state.ids.length &&
            <tbody>
              <tr>
                <td></td>
                <td>
                 <a href="#" onClick={this.swapContent}>More</a>
                </td>
              </tr>
            </tbody>
          }
        </table>
      </div>
    );
  }
}

export default Body;
