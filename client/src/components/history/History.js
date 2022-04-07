import Nav from '../navbar/Nav';
import {Comment,CommentGroup, Card} from 'semantic-ui-react';
import './history.css';
import  rockies from "../../assets/cologo.png";

const History = () => {
    return (
        <div>
            <Nav />
            <Card style={{padding: '10px', margin: '10px',}}>
            <CommentGroup>
            <Comment>
                <Comment.Avatar/>
                <Comment.Content>
                    <Comment.Author>
                        kirtley<Comment.Metadata>2  days ago</Comment.Metadata>
                    </Comment.Author>  
                        <Comment.Text> I like</Comment.Text>
                        <Comment.Action>Reply</Comment.Action>
                </Comment.Content>
            </Comment>
            </CommentGroup>
            </Card>
        </div>
    )
};

export default History;