import React from "react";

export default function Loading() {
  return (
    <section className="loading vw-100 vh-100 pb-4 d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <div className="row text-center justify-content-center align-items-center">
          <h1>Loading...</h1>
          <p>Please wait a second</p>
        </div>
      </div>
    </section>
  );
}
