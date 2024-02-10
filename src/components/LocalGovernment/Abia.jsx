import Link from "next/link";
import React from "react";

export default function AbiaLGA() {
  return (
    <section id="cardList" className="cardList section-bg pb-4">
      <div className="container" data-aos="fade-up">
        <div className="section-title ">
          <h2 className=" text-center  text-uppercase">
            Abia State.
          </h2>
          <p className=" text-center ">
            from each State in the Local Government, Nigeria.
          </p>
        </div>

        <div className="row g-4  align-items-center text-center">
          <div className="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody  border-0">
              <Link className=" text-decoration-none" href={"/statesLgas/abaNorth"}>
                <div className="card-body ">Aba North</div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link className=" text-decoration-none" href={"/statesLgas/abaSouth"}>
                <div className="card-body ">Aba South</div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link className=" text-decoration-none" href={"/statesLgas/isialaNgwaNorth"}>
                <div className="card-body  ">Isiala Ngwa North</div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link className=" text-decoration-none" href={"/statesLgas/isialaNgwaSouth"}>
                <div className="card-body ">Isiala Ngwa South</div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link className=" text-decoration-none" href={"/statesLgas/ukwaWest"}>
                <div className="card-body ">Ukwa West</div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link className=" text-decoration-none" href={"/statesLgas/ukwaEast"}>
                <div className="card-body ">Ukwa East</div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link className=" text-decoration-none" href={"/statesLgas/obingwa"}>
                <div className="card-body ">Obingwa</div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link className=" text-decoration-none" href={"/statesLgas/ikwuano"}>
                <div className="card-body ">Ikwuano</div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link className=" text-decoration-none" href={"/statesLgas/bende"}>
                <div className="card-body ">Bende</div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link className=" text-decoration-none" href={"/statesLgas/arochukwu"}>
                <div className="card-body ">Arochukwu</div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link className=" text-decoration-none" href={"/statesLgas/ohafia"}>
                <div className="card-body ">Ohafia</div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link className=" text-decoration-none" href={"/statesLgas/isuikwuato"}>
                <div className="card-body ">Isuikwuato</div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link className=" text-decoration-none" href={"/statesLgas/umuahiaNorth"}>
                <div className="card-body ">Umuahia North</div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link className=" text-decoration-none" href={"/statesLgas/umuahiaSouth"}>
                <div className="card-body ">Umuahia South</div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link className=" text-decoration-none" href={"/statesLgas/ugwunagbo"}>
                <div className="card-body ">Ugwunagbo</div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link className=" text-decoration-none" href={"/statesLgas/osisioma"}>
                <div className="card-body ">Osisioma</div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link className=" text-decoration-none" href={"/statesLgas/nnochi"}>
                <div className="card-body ">Nnochi</div>
              </Link>
            </div>
          </div>
          







        </div>
      </div>
    </section>
  );
}
