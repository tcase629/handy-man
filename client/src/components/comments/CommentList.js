import Comments from './Comment';

const CommentList = ({ comments, deleteComment, updateComment }) => {
  return (
    <>
      <ul>
        {
          comments.map( c => 
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