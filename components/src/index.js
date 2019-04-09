import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.findName()}
                    avatar={faker.image.avatar()}
                    date={faker.date.recent().toDateString()}
                    comment={faker.lorem.paragraph(3)}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.findName()}
                    avatar={faker.image.avatar()}
                    date={faker.date.recent().toDateString()}
                    comment={faker.lorem.paragraph(3)}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
