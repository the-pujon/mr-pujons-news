import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  BsBookmark,
  BsEyeFill,
  BsShare,
  BsStar,
  BsStarFill,
} from "react-icons/bs";
import Rating from "react-rating";
import { Link, useLocation } from "react-router-dom";

const NewsCard = ({ news, name }) => {
  const { _id, title, details, author, image_url, rating, total_view } = news;

  return (
    <div>
      <Card className="mb-2">
        <Card.Header className="d-flex align-items-center text-muted">
          <Image style={{ height: "40px" }} src={author.img} roundedCircle />
          <div className="flex-grow-1 ms-3">
            <div className="fw-bold text-black">{author?.name}</div>
            <div>{moment(author?.published_date).format("yyyy-MM-DD")}</div>
          </div>
          <div>
            <BsBookmark className="me-3" />

            <BsShare />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 200 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 200)}...
                <Link
                  to={`/news/${_id}`}
                  className="fw-semibold text-decoration-none"
                  style={{ color: "orange" }}
                  state={{ name }}
                >
                  read more
                </Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
          <div className=" d-flex gap-2 align-items-center">
            <Rating
              className="pt-0 mt-0 "
              style={{ color: "orange" }}
              placeholderRating={rating?.number}
              emptySymbol={<BsStar />}
              placeholderSymbol={<BsStarFill />}
              fullSymbol={<BsStarFill />}
            />
            <span className="pt-1">{rating?.number}</span>
          </div>
          <div className=" d-flex gap-2 align-items-center">
            <BsEyeFill /> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
