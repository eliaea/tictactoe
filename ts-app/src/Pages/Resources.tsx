import React, { useEffect, useState } from "react";
import axios from "axios";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Resources = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, []);

  return (
    <>
      <div>My Posts List</div>
      <ul>
        {posts.map((post: Post) => (
          <div key={post.id}>
            <p>Post # {post.id}</p>
            <li>Title: {post.title}</li>
            <li>Body: {post.body}</li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Resources;
