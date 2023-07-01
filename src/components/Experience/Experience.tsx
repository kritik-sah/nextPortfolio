import React from "react";

const tempData = [
  {
    company: "Rangrez studio",
    title: "ASSOCIATE VIDEO EDITOR",
    desc: "<ul>\n\t<li>It was my first job, where I learned to use Photoshop and video editing software like adobe premier pro.</li>\n\t<li>Here I discovered my most important lesson, which is I can learn what I love to do, there are people who will pay me for this.</li>\n</ul>",
    from: "2018",
    to: "2019",
  },
  {
    company: "IT Rebels(Self Employed)",
    title: "FREELANCE WEB DEVELOPER/ GRAPHIC DESIGNER",
    desc: "<ul>\n\t<li>At the end of my first year, I started my freelancing journey with fiverr.com in which I started with basic graphic designing and then I improved my portfolio with each order I received.</li>\n\t<li>It was a tough journey since no one was there to guide me, but still, I am happy that I took my first step there.</li>\n</ul>",
    from: "2018",
    to: "Present",
  },
  {
    company: "Tonic WorldWide pvt. Ltd.",
    title: "JR. FRONTEND DEVELOPER",
    desc: "<ul>\n\t<li>Since I am a self-taught developer, I gained so much confidence and knowledge while working on my first IT Job.</li>\n\t<li>I worked on many web projects and built 100+ mailers in just 6 months.</li>\n\t<li>I improved so many different skills, like blogging, using phpMyAdmin, and Photoshop, and Cleaning some backend codes in PHP and MySQL (I still don&#39;t know much about this though), I mostly worked on frontend technology like HTML, CSS, bootstrap, jquery &amp; javascript.</li>\n</ul>",
    from: "2021",
    to: "2022",
  },
  {
    company: "Intellihealth Solutions Pvt. Ltd. / Truemeds",
    title: "SDE I - FRONTEND (REACTJS, REDUX)",
    desc: "<ul>\n\t<li>Intellihealth Solutions Private Limited also known as Truemeds, It is a digital pharmacy and consultancy it was a product-based startup.</li>\n\t<li>I have worked on admin and other management portals from the catalog to incomplete orders.</li>\n\t<li>I learned react.js and improved my skill while working with truemeds.</li>\n</ul>",
    from: "2022",
    to: "2023",
  },
  {
    company: "Omega Athena Technology Private Ltd / DAOstruct",
    title: "FRONTEND DEVELOPER (NEXTJS, WEB3)",
    desc: "<ul>\n\t<li>Learned and improved my react, nextjs skills.</li>\n\t<li>Learned about the web3 ecosystem, and technology like Ethereum, smart contracts, and wallets.</li>\n\t<li>Attended a lot of. web3 events and made some valuable connections.</li>\n\t<li>As a founding front-end developer, I learned to manage deliverables and get better results.</li>\n</ul>",
    from: "2023",
    to: "Present",
  },
];
export async function fetchExp() {
  let resp: any = [];
  try {
    const resp = await fetch("http://localhost:3000/api/experience", {
      cache: "no-store",
    });
  } catch (error) {
    console.log("🚀 ~ file: Experience.tsx:47 ~ fetchExp ~ error:", error);
  }

  return resp.json();
}

const Experience = async () => {
  const data: any = await fetchExp();
  console.log("🚀 ~ file: Experience.tsx:50 ~ Experience ~ data:", data);
  return (
    <section className="text-gray-600 bg-gray-100 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Work Experience
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I gained so much confidence and knowledge while working on my Job.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 -m-2">
          {data?.map((exp: any, index: any) => (
            <article
              key={index}
              className="flex w-full bg-white transition hover:shadow-xl"
            >
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
                  <span>{exp?.from}</span>
                  <span className="w-px flex-1 bg-gray-900/10"></span>
                  <span>{exp?.to}</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <h3 className="font-bold uppercase text-gray-900">
                    {exp?.title}
                  </h3>

                  <h4 className="font-medium text-gray-800">
                    {`@${exp?.company}`}
                  </h4>

                  <div
                    dangerouslySetInnerHTML={{ __html: exp?.desc }}
                    className="mt-2 text-sm/relaxed text-gray-700 htmlBase"
                  ></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
