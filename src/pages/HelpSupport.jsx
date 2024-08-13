import React from "react";
import PageHeader from "../shared/PageHeader";
import { Link } from "react-router-dom";

const HelpSupport = () => {
  return (
    <>
      <PageHeader title="Help & Support" />
      <section className="help-support">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <p className="section-subtitle text-shadow-drop-center">
                24/7 - SUPPORT
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="help-card text-center">
                <div className="help-card-body">
                  <i
                    className="fa fa-envelope-o fa-2x mb-3"
                    aria-hidden="true"
                  ></i>
                  <h5 className="help-card-title">Email Support</h5>
                  <p className="help-card-text">
                    Get in touch with us via email.
                  </p>
                  <Link to="mailto:support@example.com" className="help-button">
                    Send an Email
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="help-card text-center">
                <div className="help-card-body">
                  <i className="fa fa-phone fa-2x mb-3" aria-hidden="true"></i>
                  <h5 className="help-card-title">Phone Support</h5>
                  <p className="help-card-text">
                    Call us for immediate support.
                  </p>
                  <Link to="tel:+1234567890" className="help-button">
                    Call Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="help-card text-center">
                <div className="help-card-body">
                  <i
                    className="fa fa-comments-o fa-2x mb-3"
                    aria-hidden="true"
                  ></i>
                  <h5 className="help-card-title">Live Chat</h5>
                  <p className="help-card-text">
                    Chat with our support team live.
                  </p>
                  <Link to="#!" className="help-button">
                    Start Chat
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpSupport;
