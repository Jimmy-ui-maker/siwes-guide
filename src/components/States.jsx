import Link from "next/link";
import React from "react";

export default function States() {
  return (
    <section id="siwesList" class="cardList section-bg shadow-lg">
      <div class="container" data-aos="fade-up">
        <div class="section-title ">
          <h2 className=" text-center fw-bold  text-uppercase">
            Fiew Organzations List
          </h2>
          <p className=" text-center  ">of each State in the Counry Nigeria.</p>
        </div>

        <div class="row g-4  align-items-center text-center">
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody  border-0">
              <Link className=" text-decoration-none" href={"/abia"}>
                <div className="card-body ">
                  <p>Abia</p>
                </div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link className=" text-decoration-none" href={"/adamawa"}>
                <div className="card-body ">Adamawa</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={"akwaIbom"}>
                <div className="card-body  ">Akwa Ibom</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link className=" text-decoration-none" href={"/anambara"}>
                <div className="card-body ">Anambara</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link className=" text-decoration-none" href={"/state"}>
                <div className="card-body ">All States</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
