"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ImoForm() {
  const [fname, setFname] = useState("");
  const [orgName, setOrgName] = useState("");
  const [state, setState] = useState("Imo");
  const [lgas, setLgas] = useState("Aboh-Mbaino");
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

    const response = await fetch("/api/imo", {
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
                          <option value="Aboh-Mbaino">Aboh-Mbaino</option>
                          <option value="Ahiazu-Mbaise">Ahiazu-Mbaise</option>
                          <option value="Ehime-Mbaino">Ehime-Mbaino</option>
                          <option value="Ezinhite">Ezinhite</option>
                          <option value="Ideato North">Ideato North</option>
                          <option value="Ideato South">Ideato South</option>
                          <option value="Ihitte/Uboma">Ihitte/Uboma</option>
                          <option value="Ikeduru">Ikeduru</option>
                          <option value="Isiala">Isiala</option>
                          <option value="Isu">Isu</option>
                          <option value="Mbaitoli">Mbaitoli</option>
                          <option value="Ngor Okpala">Ngor Okpala</option>
                          <option value="Njaba">Njaba</option>
                          <option value="Nwangele">Nwangele</option>
                          <option value="Nkwere">Nkwere</option>
                          <option value="Obowo">Obowo</option>
                          <option value="Aguta">Aguta</option>
                          <option value="Ohaji Egbema">Ohaji Egbema</option>
                          <option value="Okigwe">Okigwe</option>
                          <option value="Onuimo">Onuimo</option>
                          <option value="Orlu">Orlu</option>
                          <option value="Orsu">Orsu</option>
                          <option value="Oru West">Oru West</option>
                          <option value="Oru">Oru</option>
                          <option value="Owerri North">Owerri North</option>
                          <option value="Owerri South">Owerri South</option>
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
