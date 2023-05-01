import React from "react";
import logo from "../../../assets/assets/logo.png";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaPhoneAlt,
  FaSatellite,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/*<h1 className="text-center">This is Footer</h1>*/}

      <div className="mt-4 ">
        <footer
          className="text-center text-lg-start text-black"
          style={{ backgroundColor: "rgb(245, 245, 245)" }}
        >
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                {/* footer logo */}

                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto my-auto">
                  <img src={logo} alt="page-logo" className="img-fluid w-100" />
                  <p className="text-secondary ms-4">
                    <small>Journalism Without Fear or Favour</small>
                  </p>
                </div>

                {/*<hr className="w-100 clearfix d-md-none" />*/}

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Products
                  </h6>
                  <p>
                    <Link className="text-decoration-none text-black">
                      Home
                    </Link>
                  </p>
                  <p>
                    <Link className="text-decoration-none text-black">
                      About
                    </Link>
                  </p>
                  <p>
                    <Link className="text-decoration-none text-black">
                      Career
                    </Link>
                  </p>
                </div>

                {/*<hr className="w-100 clearfix d-md-none" />

                <hr className="w-100 clearfix d-md-none" />*/}

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>
                    <FaHome /> Mirpur-10, Dhaka, Bangladesh
                  </p>
                  <p>
                    <FaEnvelope /> auvipujondas@gmail.com
                  </p>
                  <p>
                    <FaPhoneAlt /> +880 1789 173903
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Follow us
                  </h6>

                  <button
                    className="btn btn-primary m-1 border-0 rounded"
                    style={{ backgroundColor: "#3b5998" }}
                  >
                    <FaFacebook />
                  </button>

                  <a
                    className="btn btn-primary btn-floating m-1  border-0 rounded"
                    style={{ backgroundColor: "#55acee" }}
                  >
                    <i className="fab fa-twitter"></i>
                    <FaTwitter />
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1  border-0 rounded"
                    style={{ backgroundColor: "#dd4b39" }}
                  >
                    <FaGoogle />
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1  border-0 rounded"
                    style={{ backgroundColor: "#ac2bac" }}
                  >
                    <FaInstagram />
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1  border-0 rounded"
                    style={{ backgroundColor: "#0082ca" }}
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1  border-0 rounded"
                    style={{ backgroundColor: "#333333" }}
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Copyright:
            <Link
              className="text-black-50 text-decoration-none ms-2"
              to="https://portfolio-pujon.netlify.app/"
            >
              Pujon Das Auvi
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
