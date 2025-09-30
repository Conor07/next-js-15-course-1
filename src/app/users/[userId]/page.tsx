import { notFound } from "next/navigation";
import React from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface UserProps {
  params: Promise<{ userId: string }>;
}

const fetchUser = async (userId: string): Promise<User | null> => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      { next: { revalidate: 10 } }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch user");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const User = async ({ params }: UserProps) => {
  const { userId } = await params;

  const user = await fetchUser(userId);

  if (!user) {
    notFound();
  }

  return (
    <div>
      <div className="Details">
        <h1>{user?.name}</h1>

        <p>Username: {user?.username}</p>
        <p>Email: {user?.email}</p>
      </div>
    </div>
  );
};

export default User;
