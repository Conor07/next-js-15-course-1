"use client";

import React from "react";

const MakePostRequest = async (name: string) => {
  // Server side request
  //   const res = await fetch(`${process.env.NEXT_URL}/api/hello`, {

  // Client side request
  const res = await fetch("/api/hello", {
    method: "POST",
    body: JSON.stringify({ name }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return { data };
};

// Server side version:
// const Friends = async () => {

// Client side version:
const Friends = () => {
  const [message, setMessage] = React.useState<string>("");

  // Server side version:
  //   const { data } = await MakePostRequest("John Doe");

  // Client side version:
  const buttonOnClick = async () => {
    const { data } = await MakePostRequest("Jane Doe");
    setMessage(data.message);
  };

  return (
    <div>
      <h1>Friends</h1>

      <button onClick={buttonOnClick}>Make Post Request</button>

      <p>{message ?? null}</p>
    </div>
  );
};

export default Friends;
