import Link from "next/link";
import React from "react";

export default function Ebonyi() {
  return (
    <section id="cardList" class="cardList section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title ">
          <h2 className=" text-center  text-uppercase">Ebonyi State.</h2>
          <p className=" text-center ">
            from each State in the Local Government, Nigeria.
          </p>
        </div>

        <div class="row g-4  align-items-center text-center">
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody  border-0">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body ">Abakaliki</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body ">Afikpo South</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Afikpo North</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Ebonyi</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Ezza</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Ezza South</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Ikwo</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Ishielu</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Ivo</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Ohaozara</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Ohaukwu</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Onicha</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={""}>
                <div className="card-body  ">Izzi</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
