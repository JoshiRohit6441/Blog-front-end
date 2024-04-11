import React, { useEffect, useState } from "react";
import HomeCard from "./HomeCard";
import axios from "axios";
function Home() {
  const [blogData, setBlogData] = useState();
  const fetchData = () => {
    axios
      .get("http://127.0.0.1:8000/api/blogs-published/")
      .then((response) => {
        setBlogData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(blogData.results);
  return (
    <>
      <div className="py-3 px-5 d-grid custum-grid-card">
        <HomeCard data={blogData} />
      </div>
    </>
  );
}

export default Home;
