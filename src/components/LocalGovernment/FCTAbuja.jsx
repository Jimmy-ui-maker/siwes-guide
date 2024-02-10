import Link from "next/link";
import React from "react";

export default function Abuja() {
  return (
    <section id="cardList" class="cardList section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title ">
          <h2 className=" text-center  text-uppercase">Abuja State.</h2>
          <p className=" text-center ">
            from each State in the Local Government, Nigeria.
          </p>
        </div>

        <div class="row g-4  align-items-center text-center">
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody  border-0">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body ">Abaji</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body ">Abuja Municipal</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Bwari</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Gwagwalada</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Kuje</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Kwali</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
