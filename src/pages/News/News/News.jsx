import React from "react";
import { Button, Card } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import EditorInsight from "../EditorInsight/EditorInsight";

const News = () => {
  const news = useLoaderData();

  const location = useLocation();

  const name = location.state.name;

  const {
    title,
    details,

    image_url,

    category_id,
  } = news;

  return (
    <div>
      <h2 className="text-center">{name}</h2>
      <Card className="p-2">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/categories/${category_id}`} state={{ name }}>
            <Button variant="danger">
              <BsArrowLeft /> All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <div className="mt-4">
        <h2>Editors Insight</h2>
        <EditorInsight />
      </div>
    </div>
  );
};

export default News;
