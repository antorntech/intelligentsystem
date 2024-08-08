import React from "react";
import PageHeader from "../shared/PageHeader";

const Contact = () => {
  return (
    <>
      <PageHeader title="Contact" />
      {/* <!-- ========== Start Contact ========== --> */}

      <section class="contact">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h3 class="main-title">Get In Touch</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="contact-boxes">
                <div class="row">
                  <div class="col-lg-4 col-md-6">
                    <div class="contact-box d-flex align-items-center">
                      <div class="icon-box">
                        <i class="fa fa-envelope-o"></i>
                      </div>
                      <div class="content-box">
                        <h5>Mail</h5>
                        <p>support@example.com</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="contact-box d-flex align-items-center orange">
                      <div class="icon-box">
                        <i class="fa fa-headphones"></i>
                      </div>
                      <div class="content-box">
                        <h5>Support</h5>
                        <p>Join Discord</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="contact-box d-flex align-items-center purble">
                      <div class="icon-box">
                        <i class="fa fa-map-marker"></i>
                      </div>
                      <div class="content-box">
                        <h5>Office</h5>
                        <p>New York, 7412, USA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
              <form
                class="contact-form"
                action="https://metanft.hasnaanajmi.co/mail.php"
                method="post"
              >
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Enter subject"
                    required
                    value=""
                  />
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    required
                    data-value=""
                  ></textarea>
                </div>
                {/* <!-- Button Send Message  --> */}
                <button class="contact-btn main-btn" type="submit" name="send">
                  <i class="fa fa-send"></i> <span>Send Message</span>
                </button>
                {/* <!-- Form Message  --> */}
                <div class="form-message text-center">
                  <span></span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========== End Contact ========== --> */}
    </>
  );
};

export default Contact;
