import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Outlet, useLocation } from "react-router-dom";
import RightNav from "../pages/Shared/RightNav/RightNav";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";

const NewsLayout = () => {
  return (
    <div>
      <Container className="mt-4">
        <Header />
        <Container>
          <Row>
            <Col lg={9}>
              <Outlet />
            </Col>
            <Col lg={3}>
              <RightNav />
            </Col>
          </Row>
        </Container>
      </Container>{" "}
      <Footer />
    </div>
  );
};

export default NewsLayout;
