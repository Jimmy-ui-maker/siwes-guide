import Link from "next/link";

export default function FacultyOfScience() {
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
      name: "View All",
      routes: "/scienceFaculties",
    },
  ];
  return (
    <section id="siwesList" className="cardList vh-100 section-bg pb-4">
      <div className="container" data-aos="fade-up">
        <div className="section-title ">
          <h2 className=" text-center  text-uppercase">
            Fiew Faculty of Science, KASU.
          </h2>
          <p className=" text-center ">Select your Course/Department.</p>
        </div>

        <div className="row g-4  align-items-center text-center">
          {fScience.map((fs) => (
            <div
              key={fs.id}
              className="col-lg-6 col-12 "
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
