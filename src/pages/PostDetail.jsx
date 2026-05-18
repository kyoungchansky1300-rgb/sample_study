// pages/PostDetail.jsx
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { data: post, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/posts')} style={{ marginBottom: '20px' }}>
        ← 목록으로
      </button>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetail;