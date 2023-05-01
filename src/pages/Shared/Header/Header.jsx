import React, { useContext } from "react";
import logo from "../../../assets/assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import NavigationBar from "../NavigationBar/NavigationBar";

const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img src={logo} alt="page-logo" className="img-fluid w-50" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex bg-light py-3 ps-3 ">
        <Button variant="danger">Latest</Button>
        <Marquee
          speed={100}
          gradient
          gradientColor={[248, 249, 250]}
          gradientWidth={30}
        >
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
          Aid Package. &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; Biden Pledges
          Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
