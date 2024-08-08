import React from "react";

const PageHeader = ({ title }) => {
  return (
    <>
      <section class="breadcrumb-area">
        <div class="container">
          <h3 class="breadcrumb-title">{title}</h3>
        </div>
      </section>
    </>
  );
};

export default PageHeader;
