import React from 'react';
import { format } from 'timeago.js';

import './itemDescription.css'

const ItemDescription = ({ shopName, avatar, username, date, text }) => {
    return (
        <div className="item-description">
            <div className="item-info">
                <img src={avatar} alt="profile" className="avatar" />
                <div className="user-info">
                    <span className="username">{username}</span>
                    <div>
                        <span className="shop-name">{shopName}</span>
                        <span className="time-ago"> · {format(date)}</span>
                    </div>
                </div>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default ItemDescription;