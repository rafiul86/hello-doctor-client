import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import BlogDetails from "./BlogDetails/BlogDetails";

const Blog = () => {
  const blogData = [
    {
      title: "Brush Your Teeth",
      writer: "Dr.Pirates",
      blog: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam architecto aliquid sapiente soluta maxime. Commodi laborum dicta pariatur, atque, nostrum iure exercitationem nam rerum qui eius quis saepe maxime nisi.,",
      id: "1",
      date: "Apr 2021",
    },
    {
      title: "Brush Your Teeth",
      writer: "Dr.Caribbean",
      blog: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam architecto aliquid sapiente soluta maxime. Commodi laborum dicta pariatur, atque, nostrum iure exercitationem nam rerum qui eius quis saepe maxime nisi.,",
      id: "2",
      date: "May 2021",
    },
    {
      title: "Brush Your Teeth",
      writer: "Dr.Jack Sparrow",
      blog: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam architecto aliquid sapiente soluta maxime. Commodi laborum dicta pariatur, atque, nostrum iure exercitationem nam rerum qui eius quis saepe maxime nisi.,",
      id: "3",
      date: "Mar 2021",
    },
  ];
  return (
    <section className="offset-md-2 align-items-center justify-content-center mt-5">
      <div className=" offset-md-2 ms-5  mt-5">
        <h3 style={{ color: "blue" }}>From Our Specialist's Blog</h3>
      </div>
      <Grid className=" offset-md-2 ms-5 mt-5" container spacing={8}>
        {blogData.map((blog) => (
          <Grid item>
            <BlogDetails blog={blog}></BlogDetails>
          </Grid>
        ))}
      </Grid>
      <Link to="/">Back to Homepage</Link>
    </section>
  );
};

export default Blog;
