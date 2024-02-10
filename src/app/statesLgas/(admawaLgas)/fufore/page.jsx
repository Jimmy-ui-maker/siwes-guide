import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section id="siwesList" class="cardList section-bg shadow-lg">
      <div class="container" data-aos="fade-up">
        <div class="section-title ">
          <h2 className=" text-center fw-bold  text-uppercase">
            Fufore LGA, Adamawa State
          </h2>
          <p className=" text-center  ">Select your course of study.</p>
        </div>

        <div class="row g-4  align-items-center text-center">
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody  border-0">
              <Link
                className=" text-decoration-none"
                href={"/statesLgas/fufore/computerscience"}
              >
                <div className="card-body ">
                  <p>Computer Science</p>
                </div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link
                className=" text-decoration-none"
                href={"/statesLgas/fufore/biologicalscience"}
              >
                <div className="card-body ">Biological Science</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link
                className=" text-decoration-none"
                href={"/statesLgas/fufore/statistics"}
              >
                <div className="card-body  ">Statistics</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link
                className=" text-decoration-none"
                href={"/statesLgas/fufore/physics"}
              >
                <div className="card-body ">Physics</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link
                className=" text-decoration-none"
                href={"/statesLgas/fufore/chemistry"}
              >
                <div className="card-body ">Chemistry</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
