import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const NavigationBar = () => {
  const { logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful");
      })
      .catch((error) => {
        console.error("error");
      });
  };

  const { loggedUser } = useContext(AuthContext);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className="text-decoration-none   pe-2 text-secondary">
              Home
            </Link>
            <Link className="text-decoration-none pe-2 text-secondary">
              About
            </Link>
            <Link className="text-decoration-none pe-2 text-secondary">
              Career
            </Link>
          </Nav>{" "}
        </Navbar.Collapse>
        <Nav className="d-flex  ">
          {loggedUser ? (
            <Button variant="dark" className="px-4 ms-2" onClick={handleLogOut}>
              Log out
            </Button>
          ) : (
            <div>
              <Link to="/login">
                <Button variant="dark" className="px-4 mx-2">
                  Login
                </Button>
              </Link>
              or
              <Link to="register">
                <Button variant="dark" className="px-4 ms-2">
                  Sign up
                </Button>
              </Link>
            </div>
          )}
          {loggedUser && (
            <FaUserCircle
              style={{
                fontSize: "1.75rem",
                marginTop: ".3rem",
                marginLeft: "1rem",
              }}
            />
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
