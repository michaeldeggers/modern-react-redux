import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author={faker.name.findName()}
                avatar={faker.image.avatar()}
                date={faker.date.recent().toDateString()}
                comment={faker.lorem.paragraph(3)}
            />
            <CommentDetail
                author={faker.name.findName()}
                avatar={faker.image.avatar()}
                date={faker.date.recent().toDateString()}
                comment={faker.lorem.paragraph(3)}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
