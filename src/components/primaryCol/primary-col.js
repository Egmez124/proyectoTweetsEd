import React from 'react';
import PostTweet from '../postTweet/post-tweet';
import Feed from '../feed';
import {feed} from "../../source"
import './styles.css'

class PrimaryCol extends React.Component {
    constructor() {
        super();
        this.state={
            tweets: feed,
            newContent: ""
        }
    }
    addReTweet = (index)=> {
        let copy = JSON.parse(JSON.stringify(this.state.tweets));
        copy[index].interaction.retweets+=1;
        copy[index].addReTweet = true;
        this.setState({tweets: copy})
    }
    removeReTweet = (index)=>{
        let copy = JSON.parse(JSON.stringify(this.state.tweets));
        copy[index].interaction.retweets-=1;
        copy[index].addReTweet = false;
        this.setState({tweets: copy})
    }
    addLike = (index)=> {
        let copy = JSON.parse(JSON.stringify(this.state.tweets));
        copy[index].interaction.likes+=1;
        copy[index].addLike= true;
        this.setState({tweets: copy})
    }
    removeLike = (index)=> {
        let copy = JSON.parse(JSON.stringify(this.state.tweets));
        copy[index].interaction.likes-=1;
        copy[index].addLike= false;
        this.setState({tweets: copy})
    }
    toggleContextMenu = (index)=>{
        let copy = JSON.parse(JSON.stringify(this.state.tweets));
        copy[index].showContextualM = !copy[index].showContextualM;
        this.setState({tweets: copy})
    }
    removeTweet =(index)=> {
        let copy = JSON.parse(JSON.stringify(this.state.tweets));
        copy.splice(index, 1);
        this.setState({tweets: copy})
    }
    handleInput = (evento) => {
        const content = evento.target.value;
        this.setState({newContent: content });
    }
    addTweet = ()=>{
        let copy = JSON.parse(JSON.stringify(this.state.tweets));
        let newTweetObj={
            profile: "Edgar",
            profileName: "https://randomuser.me/api/portraits/men/43.jpg",
            username: "@Edgar",
            content: this.state.newContent,
            interaction: {
                comments: 6,
                retweets: 30,
                likes: 723
            }
        }
        copy.push(newTweetObj)
        this.setState({tweets: copy, newContent: ""});
    }
    render () {
        return (
            <div className="t-col-container">
                <h3>Inicio</h3>
                <PostTweet 
                profileUrl={this.props.profileUrl} 
                handleInput={this.handleInput}
                addTweet={this.addTweet}
                newContent={this.state.newContent}/>
                
                <Feed  
                feed={this.state.tweets}
                addReTweet={this.addReTweet}
                removeReTweet={this.removeReTweet}
                addLike={this.addLike}
                removeLike={this.removeLike}
                toggleContextMenu={this.toggleContextMenu}
                removeTweet={this.removeTweet}/>
            </div>
        )
    }
}

export default PrimaryCol;