// components/UserInfo.jsx
function UserInfo({ name, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <p style={{ color: '#666' }}>{email}</p>
    </div>
  );
}

export default UserInfo;