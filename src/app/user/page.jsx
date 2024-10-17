'use client'
import React, { useState, useEffect } from 'react';

function Page() {
  const [users, setUsers] = useState([]); // State to store the fetched users
  const [loading, setLoading] = useState(true); // State to handle loading

  console.log(users);
  // Function to fetch users
  const fetchUsers = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query {
              users {
                name
                email
              }
            }
          `,
        }),
      }); // Fetching users from the API
      const data = await response.json(); // Convert response to JSON
      console.log(data.users);
    //   setUsers(data.data.users); // Store the fetched data in state
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error('Error fetching users:', error); // Handle any errors
    }
  };

  useEffect(() => {
    fetchUsers(); // Call fetchUsers when the component mounts
  }, []); // Empty dependency array ensures this only runs once

  return (
    <div>
      <h1>Users</h1>
      {loading ? ( // Show loading text while data is being fetched
        <p>Loading...</p>
      ) : (
        <ul>
          {users?.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.username} <br />
                {user.website}
                {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Page;
