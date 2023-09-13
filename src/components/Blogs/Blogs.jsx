import { useEffect, useState } from "react";
import "./Blogs.css";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);

  return (
    <div className="md:w-2/3 mt-5">
      <h1 className="text-2xl font-bold ">Blogs Count: {blogs.length}</h1>
      <div className="blog-container">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
