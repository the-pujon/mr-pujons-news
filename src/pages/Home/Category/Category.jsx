import React from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Category = () => {
  const { id } = useParams();

  const categoryNews = useLoaderData();

  const location = useLocation();

  const name = id ? location.state.name : "All News";

  return (
    <div>
      <h2 className="text-center mb-3">{name}</h2>
      {/*<ToastContainer />*/}
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {categoryNews.length > 0 ? (
        categoryNews.map((news) => (
          <NewsCard key={news._id} news={news} name={name} />
        ))
      ) : (
        <p>{name} news is not published yet</p>
      )}
    </div>
  );
};

export default Category;
