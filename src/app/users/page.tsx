import React from "react";

const Users = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  return (
    <div>
      Users
      {data.map((user: { id: number; name: string }) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default Users;
