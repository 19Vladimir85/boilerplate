import React from "react";
import "./index.css";

const User = ({ avatar, email, name, about }) => {
    return <div className="user">
    <img src={avatar} className="user__avatar"/>
    <div className="user__email">{email}</div>
    <div className="user__name">{name}</div>
    <div className="user__about">{about}</div>
    </div>;
};

export default User;