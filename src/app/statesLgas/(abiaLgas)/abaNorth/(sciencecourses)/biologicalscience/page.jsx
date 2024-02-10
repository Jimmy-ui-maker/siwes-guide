import Link from "next/link";

export default function page() {
  return (
    <section id="siwesList" class="siwesList section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title ">
          <h2 className=" text-center fw-bold  text-uppercase">
            Biological Science Siwes Organazation List
          </h2>
          <p className=" text-center ">Demsa LGA, Adamawa State, Nigeria.</p>
        </div>
        <hr />
        <div className=" d-flex justify-content-center my-4">
          <Link className=" btn w-25 border-white fw-bold" href={"/adamawaPage"}>
            <i className="bi bi-patch-plus text-white "></i>
          </Link>
        </div>

        <div class="row">
          <div class="col-lg-6 " data-aos="zoom-in" data-aos-delay="100">
            <div class="organization d-flex align-items-start ">
              <div class="pic">
                <img src="/siwes/suzi.jpg" class="img-fluid" alt="" />
              </div>
              <div class="member-info">
                <h4>Yarbaba</h4>
                <span>Chief Executive Officer</span>
                <p>From Ikara, U/Bazai, Kaduna State.</p>
                <div class="social">
                  <Link href="">
                    <i class="bi bi-twitter"></i>
                  </Link>
                  <Link href="">
                    <i class="bi bi-facebook"></i>
                  </Link>
                  <Link href="">
                    <i class="bi bi-instagram"></i>
                  </Link>
                  <Link href="">
                    {" "}
                    <i class="bi bi-linkedin"></i>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-lg-6 mt-4 mt-lg-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="organization d-flex align-items-start">
              <div class="pic">
                <img src="/siwes/suzi.jpg" class="img-fluid" alt="" />
              </div>
              <div class="member-info">
                <h4>Bala Jimmy Yakubu</h4>
                <span>Secretary Manager</span>
                <p>From Giwa Janbaba, Kaduna State.</p>
                <div class="social">
                  <Link href="">
                    <i class="bi bi-twitter"></i>
                  </Link>
                  <Link href="">
                    <i class="bi bi-facebook"></i>
                  </Link>
                  <Link href="">
                    <i class="bi bi-instagram"></i>
                  </Link>
                  <Link href="">
                    {" "}
                    <i class="bi bi-linkedin"></i>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="organization d-flex align-items-start">
              <div class="pic">
                <img src="/siwes/suzi.jpg" class="img-fluid" alt="" />
              </div>
              <div class="member-info">
                <h4>Hadiza Yunusa</h4>
                <span>Treasurer</span>
                <p>From Tudun Wada, Kano State.</p>
                <div class="social">
                  <Link href="">
                    <i class="bi bi-twitter"></i>
                  </Link>
                  <Link href="">
                    <i class="bi bi-facebook"></i>
                  </Link>
                  <Link href="">
                    <i class="bi bi-instagram"></i>
                  </Link>
                  <Link href="">
                    {" "}
                    <i class="bi bi-linkedin"></i>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
            <div class="organization d-flex align-items-start">
              <div class="pic">
                <img src="/siwes/suzi.jpg" class="img-fluid" alt="" />
              </div>
              <div class="member-info">
                <h4>Suzzie Yakubu Bala</h4>
                <span>Accountant</span>
                <p>From Rimi Kamanzou, Kaduna State.</p>
                <div class="social">
                  <Link href="">
                    <i class="bi bi-twitter"></i>
                  </Link>
                  <Link href="">
                    <i class="bi bi-facebook"></i>
                  </Link>
                  <Link href="">
                    <i class="bi bi-instagram"></i>
                  </Link>
                  <Link href="">
                    <i class="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
