import Nav from '../nav/Nav';
import './history.css';
import  rockies from "../../assets/cologo.png";
import { useState, useRef } from 'react';

const INITIAL_HEIGHT = 46;
const History = () => {

    const[isExpanded, setIsExpanded] = useState(false);
    const [commentValue, setCommentValue] = useState("");

    const outerHeight = useRef(INITIAL_HEIGHT);
    const textRef = useRef(null);
    const containerRef = useRef(null);
      
          const onExpand = () => {
              if (!isExpanded) {
            outerHeight.current = containerRef.current.scrollHeight;
            setIsExpanded(true);
          }
          }
      
          const onChange = (e) => {
              setCommentValue(e.target.value);
          }

          const onClose = () => {
              setCommentValue("");
              setIsExpanded(false);
          };

          const onSubmit = (e) => {
              e.preventDefault();
              console.log('send the form data somewhere')
          }
    return (
         <>
        <Nav />
        <form
        onSumbit ={onSubmit}
        ref={containerRef}
        className={("commentBox", {
            expanded: isExpanded,
            collapsed: !isExpanded,
            modified: commentValue.length > 0,
        })}
        style={{
            minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT
        }}
        >
        
            <div className='header'>
                <div className='user'>
                    <img
                    src='avatar/patch'
                    alt='User Avatar'
                    />
                    <span>User Name</span>
                </div>
            </div>
            <label htmlFor="comment">What are your thoughts?</label>
            <textarea
                ref={textRef}
                onClick={onExpand}
                onFocus ={onExpand}
                onChange={onChange}
                className="commentField"
                placeholder="What are your thoughts?"
                value={commentValue}
                name="comment"
                id="comment"
                />
            <div className='actions'>
                <button type="button" className='cancel' onClick={onClose}>
                    Cancel
                </button>
                <button type="submit" disabled={commentValue.length <1}>
                    Respond
                </button>
            </div>
        </form>    

       
            
            {/* <Card style={{padding: '10px', margin: '10px',}}>
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
            </Card> */}
    //    </>
    )
};

export default History;