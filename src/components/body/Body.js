import React, {Component} from 'react';
import Post from "./Post";
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
    //console.log(this.props.filterBy);
    axios.get(`https://hacker-news.firebaseio.com/v0/${this.props.filterBy}.json?print=pretty`)
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

  componentDidUpdate(prevProps){
    if (this.props.filterBy !== prevProps.filterBy) {
      axios.get(`https://hacker-news.firebaseio.com/v0/${this.props.filterBy}.json?print=pretty`)
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
  }

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
            <Post key={i} content={content} index={this.state.startIndex + i + 1} postPage={false}/>
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
