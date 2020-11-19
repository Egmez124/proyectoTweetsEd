import React from 'react';
import Trends from '../trends/trends';
import {trends} from '../../trends'
import {profiles} from '../../profiles';
import './styles.css'
import {
    UserAddSolid
} from "@graywolfai/react-heroicons";
import Search from '../search';
class SidebarCol extends React.Component {
    constructor() {
        super();
        this.state = {
            trends: trends,
            iconsProfile:[
                <UserAddSolid/>
            ],
            searchUser:"",
            profiles:profiles
        }
    }
    handleSearch = (evento) => {
        const user = evento.target.value;
        this.setState({searchUser: user });
    }
    render() {
        return(
            <div className="t-sidebar-col">
                <div className="sidebar-search">
                    <input className="search-input" type="text"  name="search" onChange={this.handleSearch} value={this.state.searchUser}></input>
                    <button className="btn" type="submit"><i class="fa fa-search">Search</i></button>
                    {this.state.searchUser?(<Search listUsers={this.state.profiles}
                    searchUser={this.state.searchUser}/>):null}
                </div>
                {
                    this.state.trends.map(trend=>{
                        return (
                            <Trends
                            iconProfile={trend.profileName}
                            profile={trend.profile}
                            username={trend.username}
                            category={trend.category}
                            title={trend.title}
                            noTweets={trend.noTweets}/>
                        )
                    })
                }
            </div>
        );
    }
}


export default SidebarCol;