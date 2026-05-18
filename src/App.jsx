	import { useState, useEffect } from 'react';
	import UserCard from './components/UserCard';
	
	function UserProfile() {
	  const [user, setUser] = useState(null);
	  const [loading, setLoading] = useState(true);
	  const [error, setError] = useState(null);
	  
	  useEffect(() => {
	    setLoading(true);
	    
	    fetch('https://jsonplaceholder.typicode.com/users/1')
	      .then(res => {
	        if (!res.ok) throw new Error('Failed to fetch');
	        return res.json();
	      })
	      .then(data => {
	        setUser(data);
	        setLoading(false);
	      })
	      .catch(err => {
	        setError(err.message);
	        setLoading(false);
	      });
	  }, []);
	  
	  if (loading) return <div>Loading...</div>;
	  if (error) return <div>Error: {error}</div>;
	  
	  return (
	    <div>
	      <h1>사용자 프로필</h1>
	      <p>이름: {user.name}</p>
	      <p>이메일: {user.email}</p>
	      <p>회사: {user.company.name}</p>
	    </div>
	  );
	}
	
	export default UserProfile; 