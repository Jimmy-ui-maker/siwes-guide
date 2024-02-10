import Link from "next/link";

export default function page() {
  return (
    <section id="siwesList" class="cardList section-bg shadow-lg">
      <div class="container" data-aos="fade-up">
        <div class="section-title ">
          <h2 className=" text-center fw-bold  text-uppercase">
            Abia North LGA, Abia State
          </h2>
          <p className=" text-center  ">Select your course of study.</p>
        </div>

        <div class="row g-4  align-items-center text-center">
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody  border-0">
              <Link
                className=" text-decoration-none"
                href={"/statesLgas/abaNorth/computerscience"}
              >
                <div className="card-body ">
                  <p>Computer Science</p>
                </div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0 ">
              <Link
                className=" text-decoration-none"
                href={"/statesLgas/abaNorth/biologicalscience"}
              >
                <div className="card-body  ">Biological Science</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link
                className=" text-decoration-none"
                href={"/statesLgas/abaNorth/statistics"}
              >
                <div className="card-body ">Statistics</div>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-12 " data-aos="zoom-in" data-aos-delay="100">
            <div className="card stateBody border-0">
              <Link
                className=" text-decoration-none"
                href={"/statesLgas/abaNorth/physics"}
              >
                <div className="card-body ">Physics</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
