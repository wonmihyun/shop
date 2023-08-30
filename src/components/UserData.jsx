import React from "react";
import styled  from "styled-components";

export default function UserData({user : {displayName, photoURL}}){
    return (
        <UserItem>
            <span className="hidden">{displayName}</span>
            <img src={photoURL} alt={displayName}/>
        </UserItem>
    )
}

const UserItem = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    img{
        width: 36px;
        border-radius: 50%;
    }
    span{
        display: block;
        @media screen and (max-width:768px){
            display: none;
        }
    }

`