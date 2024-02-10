"use client";
import Link from "next/link";
import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

export default async function page({ params }) {
  const componentRef = useRef();
  const handlePrint = () => {
    window.print();
  };
  return (
    <section className=" detalsPage">
      <div className="container">
        <div className=" d-flex justify-content-end p-2">
          {/**<ReactToPrint
            trigger={() => (
              <button onClick={handlePrint} className=" btn btn-primary">
                Print
              </button>
            )}
            content={() => componentRef.current}
          /> */}
        </div>

        <div className="row row1  ">
          <div className="col-lg-12 col-12 p-2 ">
            <div className="card p-2  ">
              <div className="d-flex flex1  p-2 justify-content-between">
                <div className="">
                  <img src="/siwes/suzi.jpg" className=" rounded-2" alt="" />
                </div>
                <div className="mx-2 text-center ">
                  <p className=" text-uppercase">Adamawa State</p>
                </div>
                <div>
                  <img src="/siwes/suzi.jpg" className=" rounded-2" alt="" />
                </div>
              </div>
              <hr />
              <div className="flex2 p-2 text-center">
                <h1 className=" text-uppercase">Computer Science Courses</h1>
              </div>
              <hr />
              <div className=" flex3 p-2 justify-content-center align-items-center text-center">
                <h3 className=" text-uppercase">Image of the Organization</h3>

                <img src="/siwes/adm.jpg" alt="" />
              </div>
              <hr />
              <div className=" flex4 text-start p-2">
                <h1 className=" text-uppercase">What we do offer</h1>
                <hr />

                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cumque quis obcaecati dolor? Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Cumque quis obcaecati dolor?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cumque quis obcaecati dolor?
                </p>
                <p>
                  To see more details about our Organization, visit our website
                  link <Link href={"/"}>ktc.com</Link>. Thank You.
                </p>
              </div>
              <div
                className="d-flex flex5 p-2 justify-content-center"
                ref={componentRef}
              >
                <div className="col-lg-12 col-12  ">
                  <div className="card">
                    <h2 className=" text-uppercase text-center mt-2">
                      About the Organization
                    </h2>
                    <hr />
                    <div className="card-body">
                      <h5>
                        <strong>Organzation Name:</strong> Cloudsoft 
                        Limited
                      </h5>
                      <p>
                        <strong>State:</strong> Adamawa
                      </p>
                      <p>
                        <strong>LGA:</strong> Demsa
                      </p>
                      <p>
                        <strong>Address:</strong> No1 Yakubu Gowon way, opposite
                        sidi and sons
                      </p>
                      <p>
                        <strong>Email:</strong> jmiyaks3@gmail.com
                      </p>
                      <p>
                        <strong>Contact Number:</strong> +234 701 022 8016
                      </p>
                      <p>
                        <strong>Website URL:</strong> https//mysite.vercel.app
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
