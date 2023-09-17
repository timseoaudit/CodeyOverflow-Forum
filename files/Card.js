import React from 'react';
import Header from './Header';
import Body from './Body';

function Card(props) {
    return (
        <div>
            <Header profileImg={props.commentObject.profileImg} username={props.commentObject.username} />
            <Body commnent={props.commentObject.commnent} />
        </div>    
    );
};

export default Card;