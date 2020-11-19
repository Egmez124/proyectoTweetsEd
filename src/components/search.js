import React from 'react';
export default function Search(props) {
    const newList = props.listUsers.filter((user)=>user.username.toLowerCase().includes(props.searchUser.toLowerCase()))
    return newList.map((profile)=>{
        return (
            <div>
                <img src={profile.profileImg} alt="imagen perfil"></img>
                <h5>{profile.profile}</h5>
                <h6>{profile.username}</h6>
            </div>
        )
    })
    
}