import React from "react";
import Tweet from "./tweet/tweet";
import {HeartSolid,ChatAlt2Solid,RefreshOutline,UserAddSolid,HeartOutline,RefreshSolid} from "@graywolfai/react-heroicons";

class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            iconsFeed: [
                <HeartSolid/>,
                <HeartOutline/>,
                <ChatAlt2Solid/>,
                <RefreshOutline/>,
                <RefreshSolid/>,
                <UserAddSolid/>
            ],
            
        }
    }
    render() {
        return (
            
            <div>
                {
                    this.props.feed.map( (tweet, index) => {
                        return (
                            <Tweet
                                profile={tweet.profile}
                                profileImg={tweet.profileName}
                                username={tweet.username}
                                content={tweet.content}
                                comments={tweet.interaction.comments}
                                retweets={tweet.interaction.retweets}
                                likes={tweet.interaction.likes}
                                iconChat={<ChatAlt2Solid/>}
                                iconRetweetOn={<RefreshSolid/>}
                                iconRetweetOf={<RefreshOutline/>}
                                iconLikeOn={<HeartSolid/>}
                                iconLikeOf={<HeartOutline/>}
                                index={index}
                                addReTweet={tweet.addReTweet}
                                adReTweet={this.props.addReTweet}
                                removeReTweet={this.props.removeReTweet}
                                addLike={tweet.addLike}
                                adLike={this.props.addLike}
                                removeLike={this.props.removeLike}
                                showContextualM={tweet.showContextualM}
                                toggleContextMenuFn={this.props.toggleContextMenu}
                                removeTweet={this.props.removeTweet}/>
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Feed;