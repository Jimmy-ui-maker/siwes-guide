import Link from "next/link";
import React from "react";

export default function Plateau() {
  return (
    <section id="cardList" class="cardList section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title ">
          <h2 className=" text-center  text-uppercase">Plateau State.</h2>
          <p className=" text-center ">
            from each State in the Local Government, Nigeria.
          </p>
        </div>

        <div class="row g-4  align-items-center text-center">
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody  border-0">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body "> Barkin-Ladi</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body ">Bassa</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Bokkos</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Jos North</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Jos East</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Jos South</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Kanam</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Kanke</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Quaan Pan</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Langtang North</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Langtan South</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Mangu</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Mikang</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Pankshi</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Shendam</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Wase</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
