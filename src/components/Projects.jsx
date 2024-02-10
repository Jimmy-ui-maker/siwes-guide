import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects shadow-lg d-flex flex-column justify-content-center align-items-center"
    >
      <div className=" container">
        <div
          className=" title text-center"
          data-aos="fade-in"
          data-aos-delay="100"
        >
          <h2 className=" text-uppercase">Some SIWES Mini projects.</h2>
          <hr />
          <p>click on your prefer technologies bellow to see.</p>
        </div>
        <div className="  row d-flex justify-content-center align-items-center text-center">
          <div className="row ">
            <div className="col-12 col-lg-3 text-lg-start text-center ">
              <div className="card p-3 icon-box" data-aos="fade-up">
                <h3 className=" p-2">NEXT.JS</h3>
                <h4 className=" px-2">
                  Is simply a React framework for building fullstack web app.
                </h4>
              </div>
            </div>

            <div className="col-12 col-lg-3 text-lg-start text-center ">
              <div
                className="card p-3 icon-box"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className=" p-2">JAVA</h3>
                <h4 className=" px-2">Object Oriented Prgramming (OOP)</h4>
              </div>
            </div>

            <div className="col-12 col-lg-3 text-lg-start text-center ">
              <div
                className="card p-3 icon-box"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className=" p-2">HTML & CSS</h3>
                <h4 className=" px-2">
                  Together with Javascript to build fullstack web app
                </h4>
              </div>
            </div>

            <div className="col-12 col-lg-3 text-lg-start text-center ">
              <div
                className="card p-3 icon-box"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3 className=" p-2">Andriod Studio</h3>
                <h4 className=" px-2">
                  Xamarin, React Native, kotlin and Flutter for Mobile App
                </h4>
              </div>
            </div>

            <div className="col-12 col-lg-12 text-lg-start text-center ">
              <Link className=" text-decoration-none" href={"/projects"}>
                <div
                  className="card p-5 icon-box rounded-5"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h3 className=" p-2 text-center">See More</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
