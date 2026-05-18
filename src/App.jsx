// App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      {/* 네비게이션 */}
      <nav style={{
        padding: '20px',
        background: '#f8f9fa',
        marginBottom: '20px',
        display: 'flex',
        gap: '20px'
      }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>홈</Link>
        <Link to="/posts" style={{ textDecoration: 'none', color: '#007bff' }}>게시글</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;