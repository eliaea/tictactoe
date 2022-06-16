import axios from "axios";
import React, { useEffect, useState } from "react";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
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
    <ul>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <p>Post # {post.id}</p>
          <li>Title: {post.title}</li>
          <li>Body: {post.body}</li>
        </div>
      ))}
    </ul>
  );
};

export default Posts;
