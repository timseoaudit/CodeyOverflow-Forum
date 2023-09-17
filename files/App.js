import React from 'react';
import {comments} from './commentData';
import Card from './Card';

function App(comments) {
    comments.map(comment => <Card commentObject={comment} /> )
}

export default App;