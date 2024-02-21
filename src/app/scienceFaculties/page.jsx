import Link from "next/link";

export default function page() {
  const fScience = [
    {
      name: "Biochemistry",
      routes: "/scienceFaculties/biochemistry",
    },

    {
      name: "Biological Science",
      routes: "/scienceFaculties/biologicalScience",
    },

    {
      name: "Chemistry",
      routes: "/scienceFaculties/chemistry",
    },
    {
      name: "Computer Science",
      routes: "/scienceFaculties/computerScience",
    },
    {
      name: "Geography",
      routes: "/scienceFaculties/geography",
    },
    {
      name: "Geology",
      routes: "/scienceFaculties/geology",
    },

    {
      name: "Industrial Chemistry",
      routes: "/scienceFaculties/industrialchemistry",
    },
    {
      name: "Mathematical Science",
      routes: "/scienceFaculties/mathematicalScience",
    },
    {
      name: "Microbiology",
      routes: "/scienceFaculties/microbiology",
    },

    {
      name: "Physics",
      routes: "/scienceFaculties/physics",
    },

    {
      name: "Statistics",
      routes: "/scienceFaculties/statistics",
    },
  ];
  return (
    <section id="cardList" className="cardList section-bg pb-4">
      <div className="container" data-aos="fade-up">
        <div className="section-title ">
          <h2 className=" text-center  text-uppercase">
            Faculty of Science, KASU.
          </h2>
          <p className=" text-center ">Select your Course/Department.</p>
        </div>

        <div className="row g-4  align-items-center text-center">
          {fScience.map((fs) => (
            <div
              key={fs.id}
              className="col-lg-3 col-12 "
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="card stateBody  border-0">
                <Link className=" text-decoration-none" href={fs.routes}>
                  <p className=" p-3">{fs.name}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
