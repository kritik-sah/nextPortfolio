import React from "react";

const tempData = [
  {
    title: "Responsive Web Design",
    desc: "All about HTML, CSS, and the foundation of web development.",
    image:
      "https://kritik.servicesstrategy.com/img/certificates/responsive-web-dev.jpg",
    link: "https://www.freecodecamp.org/certification/kritiksah/responsive-web-design",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    desc: "Foundation of javascript with Data structure and Algorithms.",
    image:
      "https://kritik.servicesstrategy.com/img/certificates/javascript-algorithms-and-data-structures.jpg",
    link: "https://www.freecodecamp.org/certification/kritiksah/javascript-algorithms-and-data-structures",
  },
  {
    title: "Front End Development Libraries",
    desc: "In the Front End Development Libraries Certification, I learned how to style our site quickly with Bootstrap & how to create powerful Single Page Applications (SPAs) with React and Redux.",
    image:
      "https://kritik.servicesstrategy.com/img/certificates/front-end-development-libraries.jpg",
    link: "https://www.freecodecamp.org/certification/kritiksah/front-end-development-libraries",
  },
  {
    title: "The Complete 2023 Web Development Bootcamp - Dr. Angela Yu",
    desc: "MERN stack web devlopment - The Complete 2022 Web Development Bootcamp",
    image:
      "https://kritik.servicesstrategy.com/img/certificates/web-development-bootcamp.jpg",
    link: "https://www.udemy.com/certificate/UC-eb832aa6-b7af-46cd-bae1-9db04261a966/",
  },
];

const Certifications = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            CERTIFICATES
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Greetings, my name is Kritik Sah, and I am a 23-year-old frontend
            web developer. I possess a strong zeal for expanding my knowledge
            and skillset within the realm of web3 and blockchain technology.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tempData?.map((cert, index) => (
            <Certificate key={index} data={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

const Certificate = (props: any) => {
  const { data } = props;
  return (
    <article className="group">
      <picture>
        <img
          alt={data?.title}
          src={data?.image}
          className="h-96 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[30%]"
        />
      </picture>

      <div className="py-4">
        <a href={data?.link} target="_blank" rel="noopener noreferrer">
          <h3 className="text-lg font-medium text-gray-900">{data?.title}</h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {data?.desc}
        </p>
      </div>
    </article>
  );
};
