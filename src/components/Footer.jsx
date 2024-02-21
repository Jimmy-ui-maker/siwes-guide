import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer id="footer" class="footer ">
        <div class="footer-top">
          <div class="container">
            <div class="row gy-4">
              <div class="col-lg-5 col-12 footer-info">
                <Link href="" class="logo d-flex align-items-center">
                  <span>SIWES GUIDELNES</span>
                </Link>
                <hr />
                <p className="  fw-semibold">
                  Is a site developed for Computer Science Department, KASU.
                  <br />
                  To ease 300L Students on how to start and end there 300L
                  Second Semester.
                  <br />
                  Main purposes are; <br />
                  List of Siwes Organiztions, <br />
                  How to fill Log Books and <br />
                  How to come up with a good Mini Project, <br />
                  Technical Report and a good looking Slide for Presentation.
                </p>
              </div>

              <div class="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <Link href="/" className=" nav-link fw-semibold">
                      Home
                    </Link>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <Link href="/about" className=" nav-link fw-semibold">
                      About us
                    </Link>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <Link
                      href="/scienceFaculties"
                      className=" nav-link fw-semibold"
                    >
                      Organizations
                    </Link>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <Link href="/logBooks" className=" nav-link fw-semibold">
                      Log Book
                    </Link>
                  </li>

                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <Link href="/projects" className=" nav-link fw-semibold">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <Link href="/report" className=" nav-link fw-semibold">
                      Report
                    </Link>
                  </li>
                </ul>
              </div>

              <div class="col-lg-2 col-6 footer-links">
                <h4>My Services</h4>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <Link href="" className=" nav-link fw-semibold">
                      Hair Dredlug
                    </Link>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <Link href="" className=" nav-link fw-semibold">
                      Saloon
                    </Link>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <Link href="" className=" nav-link fw-semibold">
                      Fingers Stuffs
                    </Link>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <Link href="" className=" nav-link fw-semibold">
                      Eye things
                    </Link>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <Link href="" className=" nav-link fw-semibold">
                      Hair Sewing
                    </Link>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <Link href="" className=" nav-link fw-semibold">
                      Hair Sewing
                    </Link>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p className=" nav-link fw-semibold">
                  Kongo Zaria <br />
                  Kaduna State
                  <br />
                  Nigeria <br />
                  <br />
                  <strong>Phone:</strong> +234 906 183 9480
                  <br />
                  <strong>Email:</strong> yarbaba@gmail.com
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            &copy; Copyright
            <strong>
              <span> Sir Jimmy</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits">
            Designed by
            <Link href="/" className=" mx-1">
              Bala Jimmy Yakubu
            </Link>
          </div>
          <div className="p-2"></div>
          <div className="d-flex justify-content-end fixed-bottom">
            <Link href="/" className="scroll-back ">
              <i className=" bi bi-arrow-up btn  rounded-5 text-muted"></i>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
