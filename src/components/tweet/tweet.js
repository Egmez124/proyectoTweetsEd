import React from 'react';
import './styles.css';
import {DotsVerticalOutline} from '@graywolfai/react-heroicons';
import ContextMenu from "../context-menu";
class Tweet extends React.Component{
    render(){
        return (
            <div className="tweet-container">
                 <div className="contextual-container">
                    <div className="contextual-menu" onClick={()=>this.props.toggleContextMenuFn(this.props.index)}>
                        <DotsVerticalOutline/>
                    </div>
                    {
                        this.props.showContextualM ? (<ContextMenu removeTweet={()=>this.props.removeTweet(this.props.index)}/>) : null
                    }
                </div>
                <div className="row">
                    <div className="c1">
                        <img src={this.props.profileImg} alt="profileImg"></img>
                    </div>
                    <div className="c2">
                        <h6>{this.props.profile}</h6>
                        <h6>{this.props.username}</h6>
                        
                    </div>
                    
                </div>
               
                <div className="row">
                    <p className="content">                
                        {this.props.content}
                    </p>
                </div>
                <div className="row">
                    <div className="c3">
                        <p className="action">
                            {this.props.iconChat}
                        </p>
                        <p>
                            {this.props.comments}
                        </p>
                    </div>
                    <div className="c3">
                        <p className="action" onClick={this.props.addReTweet?()=>this.props.removeReTweet(this.props.index)
                            : ()=>this.props.adReTweet(this.props.index) }>
                            {this.props.addReTweet?this.props.iconRetweetOn:this.props.iconRetweetOf}
                        </p>
                        <p>
                            {this.props.retweets}
                        </p>
                    </div>
                    <div className="c3">
                        <p className="action" onClick={this.props.addLike?()=>this.props.removeLike(this.props.index)
                        : ()=>this.props.adLike(this.props.index)}>
                            {this.props.addLike?this.props.iconLikeOn:this.props.iconLikeOf}
                        </p>
                        <p>
                            {this.props.likes}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Tweet;