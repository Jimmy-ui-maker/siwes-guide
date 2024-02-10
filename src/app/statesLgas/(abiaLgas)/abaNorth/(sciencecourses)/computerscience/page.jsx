import { AdamawaTable } from "@/models/Nigeria";
import Link from "next/link";

export default async function page() {
  const demsa = await AdamawaTable.find({
    state: "Adamawa",
    lgas: "Demsa",
    courses: "Computer",
  });
  return (
    <section id="siwesList" class="siwesList section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title ">
          <h2 className=" text-center fw-bold  text-uppercase">
            Computer Science Siwes Organazation List
          </h2>
          <p className=" text-center ">Demsa LGA, Adamawa State, Nigeria.</p>
        </div>
        <hr />
        <div className=" d-flex justify-content-center my-4">
          <Link
            className=" btn w-25 border-white fw-bold"
            href={"/abiaPage"}
          >
            <i className="bi bi-patch-plus text-white "></i>
          </Link>
        </div>

        <div class="row">
          {demsa.map((dem) => (
            <div
              key={dem.id}
              class="col-lg-6 "
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="organization d-flex align-items-start ">
                <div class="pic">
                  <img src="/siwes/suzi.jpg" class="img-fluid" alt="" />
                </div>
                <div class="member-info">
                  <h4>{dem.orgName}</h4>
                  <span>{dem.state}</span>
                  <p>{dem.courses} Science.</p>
                  <div class="social">
                    <Link href="">
                      <i class="bi bi-eye"></i>
                    </Link>
                    <Link href="">
                      <i class="bi bi-update"></i>
                    </Link>
                    <Link href="">
                      <i class="bi bi-instagra"></i>
                    </Link>
                    <Link href="">
                      {" "}
                      <i class="bi bi-trash"></i>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
