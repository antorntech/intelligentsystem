import React, { useState } from "react";

const HomeFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      id: "collapseOne",
      heading: "headingOne",
      question: "What are the Marceline?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
    {
      id: "collapseTwo",
      heading: "headingTwo",
      question: "How do I get Marceline?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
    {
      id: "collapseThree",
      heading: "headingThree",
      question: "How can we buy and invest in Marceline?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
    {
      id: "collapseFour",
      heading: "headingFour",
      question: "Where can we buy and sell Marceline?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
    {
      id: "collapseFive",
      heading: "headingFive",
      question: "Who are the team behind the project?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
  ];

  return (
    <section className="faq">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="main-title">
              FAQs{" "}
              <div class="underline-wrapper">
                <div class="underline-circle"></div>
                <div class="underline-line"></div>
              </div>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div id="accordion">
              {faqs.map((faq, index) => (
                <div class="card active">
                  <div class="card-header" id={faq.heading}>
                    <h5>
                      <button
                        class="btn btn-link"
                        data-toggle="collapse"
                        data-target={"#" + faq.id}
                        aria-expanded={activeIndex === index}
                        aria-controls={faq.id}
                      >
                        {faq.question}
                      </button>
                    </h5>
                  </div>
                  <div
                    id={faq.id}
                    class={`collapse ${activeIndex === index ? "show" : ""}`}
                    aria-labelledby={faq.heading}
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFaqs;
