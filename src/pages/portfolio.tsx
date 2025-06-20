// src/pages/portfolio.js

import React from "react";
import Layout from "@theme/Layout";

function Portfolio() {
  return (
    <Layout title="Portfolio">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p>Welcome to my portfolio! I will be adding my projects here soon.</p>
      </div>
    </Layout>
  );
}

export default Portfolio;
