// components/UserStats.jsx
function UserStats({ posts, followers }) {
  return (
    <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
      <span>📝 게시글: {posts}</span>
      <span>👥 팔로워: {followers}</span>
    </div>
  );
}

export default UserStats;