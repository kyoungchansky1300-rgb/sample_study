// UserCard.jsx - 분리 후
import Avatar from './Avatar';
import UserInfo from './UserInfo';
import UserStats from './UserStats';

function UserCard({ name,email,avatar,posts,followers }) {
  return (
    <div style={{
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <Avatar url={user.avatar} name={user.name} />
      <UserInfo name={user.name} email={user.email} />
      <UserStats posts={user.posts} followers={user.followers} />
    </div>
  );
}

export default UserCard;