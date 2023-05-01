import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import first from "../../../assets/assets/1.png";
import second from "../../../assets/assets/2.png";
import third from "../../../assets/assets/3.png";
import { BsCalendar4 } from "react-icons/bs";

const EditorInsight = () => {
  return (
    <div className="mt-2">
      <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
              <Card.Title>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Title>
            </Card.Body>
            <Card.Footer className="d-flex align-items-center text-muted gap-2">
              <BsCalendar4 /> Jan 4, 2022
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={second} />
            <Card.Body>
              <Card.Title>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Title>
            </Card.Body>
            <Card.Footer className="d-flex align-items-center text-muted gap-2">
              <BsCalendar4 /> Jan 4, 2022
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
              <Card.Title>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Title>
            </Card.Body>
            <Card.Footer className="d-flex align-items-center text-muted gap-2">
              <BsCalendar4 /> Jan 4, 2022
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EditorInsight;
