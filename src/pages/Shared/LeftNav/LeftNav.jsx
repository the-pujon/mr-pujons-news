import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://mr-pujons-news-server-the-pujon.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h4>All Categories</h4>

      <div className="d-grid gap-0">
        {categories.map((category) => (
          <div className="btn btn-light text-start" key={category.id}>
            {/*{console.log(typeof category.id)}*/}
            <Link
              className="text-decoration-none text-secondary"
              to={`/categories/${category.id}`}
              state={{ name: `${category.name}` }}
            >
              <p className="h-100">{category.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
