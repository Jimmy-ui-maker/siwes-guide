"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function EdoForm() {
  const [fname, setFname] = useState("");
  const [orgName, setOrgName] = useState("");
  const [state, setState] = useState("Edo");
  const [lgas, setLgas] = useState("Akoko-Edo");
  const [courses, setCourses] = useState("Computer");
  const [address, setAddress] = useState("");
  const [desc, setDesc] = useState("");
  const [contact, setContact] = useState("");
  const [secNum, setSecNum] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [weburl, setUrl] = useState("");

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!orgName || !state || !lgas || !desc || !courses) {
      alert("All fields are needed!!!");
    }

    const response = await fetch("/api/edo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        orgName,
        state,
        lgas,
        courses,
        address,
        desc,
        contact,
        secNum,
        email,
        github,
        weburl,
      }),
    });
    if (response.status == 201) {
      router.refresh();
      router.push("/");
    }
  }
  return (
    <section className="allForms d-flex flex-column justify-content-center align-items-center">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="card border-dark ">
              <div className="card-body">
                <h1 className="text-center text-uppercase mb-4">
                  Adamawa Form
                </h1>
                <hr />
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-4">
                      <h2>Names Section</h2>
                      <hr />
                      <div className="mb-3">
                        <label className="">Founder Name</label>
                        <input
                          onChange={(e) => setFname(e.target.value)}
                          value={fname}
                          type="text"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Organization Name</label>
                        <input
                          onChange={(e) => setOrgName(e.target.value)}
                          value={orgName}
                          type="text"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">State</label>
                        <select
                          className="form-control shadow-none "
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                        >
                          <option value="Adamawa">Adamawa</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="">Select LGAs</label>
                        <select
                          className="form-control shadow-none "
                          value={lgas}
                          onChange={(e) => setLgas(e.target.value)}
                        >
                          <option value="Akoko-Edo">Akoko-Edo</option>
                          <option value="Egor">Egor</option>
                          <option value="Esan Central">Esan Central</option>
                          <option value="Esan North-East">Esan North-East</option>
                          <option value="Esan South-East">Esan South-East</option>
                          <option value="Esan West">Esan West</option>
                          <option value="Etsako Central">Etsako Central</option>
                          <option value="Etsako East">Etsako East</option>
                          <option value="Etsako West">Etsako West</option>
                          <option value="Igueben">Igueben</option>
                          <option value="Ikpoba-Okha">Ikpoba-Okha</option>
                          <option value="Oredo">Oredo</option>
                          <option value="Orhonmwon">Orhonmwon</option>
                          <option value="Ovia North-East">Ovia North-East</option>
                          <option value="Ovia South-West">Ovia South-West</option>
                          <option value="Owan East">Owan East</option>
                          <option value="Owan West">Owan West</option>
                          <option value="Uhunmwonde">Uhunmwonde</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="">Select Courses</label>
                        <select
                          className="form-control shadow-none "
                          value={courses}
                          onChange={(e) => setCourses(e.target.value)}
                        >
                          <option value="Computer">Computer</option>
                          <option value="Biology">Biology</option>
                          <option value="Statistics">Statistics</option>
                          <option value="Physics">Physics</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <h2>Description Section</h2>
                      <hr />
                      <div className="mb-3">
                        <label className="">Organization Address</label>
                        <textarea
                          onChange={(e) => setAddress(e.target.value)}
                          value={address}
                          type="text"
                          rows={4}
                          className="form-control shadow-none "
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <label className="">Organization Description</label>
                        <textarea
                          onChange={(e) => setDesc(e.target.value)}
                          value={desc}
                          type="text"
                          rows={5}
                          className="form-control shadow-none "
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <h2>Contact Section</h2>
                      <hr />
                      <div className="mb-3">
                        <label className="">Contact Number</label>
                        <input
                          onChange={(e) => setContact(e.target.value)}
                          value={contact}
                          type="number"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Secretory Number</label>
                        <input
                          onChange={(e) => setSecNum(e.target.value)}
                          value={secNum}
                          type="number"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Organization Email</label>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          type="email"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Organization Github URL</label>
                        <input
                          onChange={(e) => setGithub(e.target.value)}
                          value={github}
                          type="text"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Organization Web URL</label>
                        <input
                          onChange={(e) => setUrl(e.target.value)}
                          value={weburl}
                          type="text"
                          className="form-control shadow-none "
                        />
                      </div>
                    </div>
                  </div>

                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-submit border-dark "
                    >
                      Add Data
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
