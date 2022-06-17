import { useEffect, useState } from "react";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const responseJson = await res.json();

      setPosts(responseJson);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading && <p>Please wait data is being fetched</p>}
      {!isLoading && (
        <ul>
          {posts.map((post) => (
            <div key={post.id}>
              <p>Post # {post.id}</p>
              <li>Title: {post.title}</li>
              <li>Body: {post.body}</li>
            </div>
          ))}
        </ul>
      )}
    </>
  );
};

export default Posts;
