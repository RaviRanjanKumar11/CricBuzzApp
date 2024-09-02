import React,{useState, useEffect} from 'react';
import { fetchCommentary } from '../API/api';


const CommentaryList = () => {

     const [commentary,setCommentary] = useState(null);
     const [error,setError] = useState(null);
     const [loading,setLoading] = useState(true);

     useEffect(() => {
          const getCommentary = async () => {
            try {
              console.log('Fetching commentary...');
              const data = await fetchCommentary();
              console.log('Data received:', data);
              setCommentary(data.commentaryList);
              setLoading(false);
            } catch (error) {
              console.error('Error:', error);
              setError('Failed to fetch commentary');
              setLoading(false);
            }
          };
        
          getCommentary();
        }, []);
        
        

if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
     <h2>Match Summary</h2>
     <ul>
     {commentary && commentary.map((comment, index) => (
          <li key={index}>
            <p>{comment.commText}</p>
            <small>Timestamp: {new Date(comment.timestamp).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CommentaryList
