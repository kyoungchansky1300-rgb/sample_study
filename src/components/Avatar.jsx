// components/Avatar.jsx
function Avatar({ url, name }) {
  return (
    <img 
      src={url} 
      alt={name}
      style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover'
      }}
    />
  );
}

export default Avatar;