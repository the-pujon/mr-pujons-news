import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import BG from "../../../assets/assets/bg.png";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const RightNav = () => {
  const { LogInWithGoogle, LogInWithGithub } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    const loginSuccessWithGoogle = LogInWithGoogle()
      .then((result) => {})
      .catch((error) => console.error(error));
    toast.promise(loginSuccessWithGoogle, {
      pending: "Please wait",
      success: "Login successful",
      error: "Login error",
    });
  };

  const handleGithubLogin = () => {
    const loginSuccessWithGithub = LogInWithGithub()
      .then((result) => {})
      .catch((error) => console.error(error));

    toast.promise(loginSuccessWithGithub, {
      pending: "Please wait",
      success: "Login successful",
      error: "Login error",
    });
  };

  return (
    <div>
      <div>
        <h4>Login with</h4>
        <div className="d-grid gap-2">
          <Button variant="outline-primary" onClick={handleGoogleLogin}>
            <FaGoogle /> Login with google
          </Button>
          <Button variant="outline-secondary" onClick={handleGithubLogin}>
            <FaGithub /> Login with github
          </Button>
        </div>
      </div>

      <div className="my-4">
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> FaceBook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone />
      <div className="position-relative text-white text-center">
        <img src={BG} alt="" />

        <div className="position-absolute top-0 mt-5 p-4">
          <h1>Create an Amazing Newspaper</h1>
          <p className="my-4">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
