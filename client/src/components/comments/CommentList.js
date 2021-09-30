import Comment from './Comment';

const CommentList = ({ comments, deleteComment, updateComment }) => {
  return (
    <>
      <ul>
        {
          comments.map( w => 
            <Comments 
              {...c} 
              deleteComment={deleteComment} 
              updateComment={updateComment}
            />
          )
        }
      </ul>
    </>
  )
}

export default CommentList;