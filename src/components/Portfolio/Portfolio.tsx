import React from "react";
import { FaGithub, FaUserGroup } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";

const tempdata = [
  {
    image: "https://kritik.servicesstrategy.com/img/work/infinitelearning.jpg",
    title: "INFINITE LEARNING",
    desc: "Website for local coaching business",
    skills: ["wordpress", "frontend", "elementor"],
    github: null,
    link: "https://infinitelearning.org.in/",
    colab: null,
    personal: false,
  },
  {
    image: "https://kritik.servicesstrategy.com/img/work/cocktaildb.jpg",
    title: "COCKTAIL STUDIO - THECOCKTAILDB API",
    desc: "A modern react.js application to fetch and display CocKtail recepies",
    skills: [
      "react",
      "Recoil",
      "tailwindcss",
      "TheCocktailDB API",
      "next-auth",
    ],
    github: "https://github.com/kritik-sah/coctaildb",
    link: "https://coctaildb.vercel.app/",
    colab: null,
    personal: true,
  },
  {
    image: "https://kritik.servicesstrategy.com/img/work/instagram.jpg",
    title: "INSTAGRAM CLONE",
    desc: "A fullstack next.js tailwind css Instagram clone application",
    skills: ["react", "next", "tailwindcss", "firebase", "next-auth"],
    github: "https://github.com/kritik-sah/next-instagram",
    link: "https://next-instagram-kritik.vercel.app/",
    colab: null,
    personal: true,
  },
  {
    image: "https://kritik.servicesstrategy.com/img/work/memecom.jpg",
    title: "MEME COMMERCE",
    desc: "A fullstack next.js ecommerce appliction",
    skills: [
      "react",
      "next",
      "tailwindcss",
      "mongo db",
      "mongoose",
      "next-auth",
      "react-hook-form(FV)",
      "PayPal",
    ],
    github: "https://github.com/kritik-sah/NextEcom",
    link: "https://memecommerce-xi.vercel.app/",
    colab: null,
    personal: true,
  },
  {
    image: "https://kritik.servicesstrategy.com/img/work/livamissdiva.jpg",
    title: "LIVA MISS DIVA 2022",
    desc: "Microsite for a voting campaign, Worked with Tonic worldwide",
    skills: ["frontend", "bootstrap", "jquery"],
    github: null,
    link: "https://www.livafluidfashion.com/livamissdiva/",
    colab: "https://www.tonicworldwide.com/",
    personal: false,
  },
  {
    image:
      "https://kritik.servicesstrategy.com/img/work/birlacellulose-greentrack.jpg",
    title: "BIRLA CELLULOSE - GREENTRACK",
    desc: "Page addon for Birla Cellulose, Worked with Tonic worldwide",
    skills: ["frontend", "bootstrap", "jquery"],
    github: null,
    link: "https://birlacellulose.com/traceability-greentrack.php",
    colab: "https://www.tonicworldwide.com/",
    personal: false,
  },
  {
    image:
      "https://kritik.servicesstrategy.com/img/work/westfield-pestcontrol.jpg",
    title: "WESTFIELD PEST CONTROL",
    desc: "Microsite/landing page for a campaign, Worked with Tonic worldwide",
    skills: ["frontend", "bootstrap", "jquery"],
    github: null,
    link: "https://wpcsindia.com/services/",
    colab: "https://www.tonicworldwide.com/",
    personal: false,
  },
  {
    image: "https://kritik.servicesstrategy.com/img/work/welspun-corp.jpg",
    title: "WELSPUN CORP",
    desc: "Worked on Styles, on page Seo and Developed Components and pages, Worked with Tonic worldwide",
    skills: ["frontend", "bootstrap", "jquery"],
    github: null,
    link: "https://www.welspuncorp.com/",
    colab: "https://www.tonicworldwide.com/",
    personal: false,
  },
  {
    image: "https://kritik.servicesstrategy.com/img/work/tonicworldwide.jpg",
    title: "TONIC WORLDWIDE",
    desc: "Worked on Styles, on page Seo and Developed Components, Worked with Tonic worldwide",
    skills: ["frontend", "bootstrap", "jquery"],
    github: null,
    link: "https://www.tonicworldwide.com/",
    colab: "https://www.tonicworldwide.com/",
    personal: false,
  },
  {
    image: "https://kritik.servicesstrategy.com/img/work/zyduswelness.jpg",
    title: "ZYDUS WELNESS",
    desc: "Worked on Styles, Developed Components, pages and content upload, Worked with Tonic worldwide",
    skills: ["frontend", "bootstrap", "jquery"],
    github: null,
    link: "https://www.zyduswellness.com/",
    colab: "https://www.tonicworldwide.com/",
    personal: false,
  },
  {
    image: "https://kritik.servicesstrategy.com/img/work/nuclusofficeparks.jpg",
    title: "NUCLEUS OFFICE PARKS",
    desc: "Worked on Styles, Developed Components, pages and content upload, Worked with Tonic worldwide",
    skills: ["frontend", "bootstrap", "jquery"],
    github: null,
    link: "https://www.nucleusofficeparks.com/",
    colab: "https://www.tonicworldwide.com/",
    personal: false,
  },
  {
    image: "https://kritik.servicesstrategy.com/img/work/dabur-ganesh.jpg",
    title: "DABUR (WORLD RECORD)",
    desc: "Largest Digital Collage of Lord Ganesh, worked on frontend, Worked with Tonic worldwide",
    skills: ["frontend", "bootstrap", "jquery"],
    github: null,
    link: "https://myganpatimoment.com/",
    colab: "https://www.tonicworldwide.com/",
    personal: false,
  },
  {
    image: "https://kritik.servicesstrategy.com/img/work/welspun-india.jpg",
    title: "WELSPUN INDIA",
    desc: "Worked on Content upload and website Maintainance, Worked with Tonic worldwide",
    skills: ["frontend", "bootstrap", "jquery"],
    github: null,
    link: "https://www.welspunindia.com/",
    colab: "https://www.tonicworldwide.com/",
    personal: false,
  },
  {
    image: "https://kritik.servicesstrategy.com/img/work/almayae.jpg",
    title: "ALMAYA GROUP",
    desc: "Worked on Content upload and website Maintainance, Worked with Tonic worldwide",
    skills: ["frontend", "bootstrap", "jquery"],
    github: null,
    link: "https://www.almaya.ae/",
    colab: "https://www.tonicworldwide.com/",
    personal: false,
  },
  {
    image: "https://kritik.servicesstrategy.com/img/work/almaya-dist.jpg",
    title: "ALMAYA DISTRIBUTION",
    desc: "Worked on Content upload and website Maintainance, Worked with Tonic worldwide",
    skills: ["frontend", "bootstrap", "jquery"],
    github: null,
    link: "https://almayadistribution.ae/",
    colab: "https://www.tonicworldwide.com/",
    personal: false,
  },
  {
    image: "https://kritik.servicesstrategy.com/img/work/reactportfolio.jpg",
    title: "PERSONAL PORTFOLIO (OLD)",
    desc: "Created this portfolio to learn react in 2020",
    skills: ["frontend", "bootstrap", "react"],
    github: "https://github.com/kritik-sah/kritik-portfolio",
    link: "https://kritik-portfolio.vercel.app/",
    colab: null,
    personal: true,
  },
  {
    image: "https://kritik.servicesstrategy.com/img/work/joykites.jpg",
    title: "JOY KITES",
    desc: "Created this NFT(ERC-721) art collection",
    skills: [
      "React.js",
      "web3.js",
      "Hashlip nft art generator",
      "erc-721",
      "polygon pos",
      "metamask",
      "bootstrap",
    ],
    github: "https://github.com/kritik-sah/kritik-portfolio",
    link: "https://kritik-portfolio.vercel.app/",
    colab: null,
    personal: true,
  },
  {
    image: "https://kritik.servicesstrategy.com/img/work/cookit.jpg",
    title: "COOKIT",
    desc: "contributed to an opensource jquery library to display cookie notice at your website",
    skills: ["Github", "Jquery", "javascript", "css"],
    github: "https://github.com/Athios-dev/cookit",
    link: "https://athios-dev.github.io/cookit/",
    colab: null,
    personal: false,
  },
  {
    image: "https://kritik.servicesstrategy.com/img/work/expensetracker.jpg",
    title: "EXPENSE TRACKER",
    desc: "React, Tailwind css expense tracker",
    skills: ["Github", "react", "tailwind css", "responsive"],
    github: "https://github.com/kritik-sah/ReactExpenseTracker",
    link: "https://expensetrackerproj.vercel.app/",
    colab: null,
    personal: true,
  },
];
export async function fetchProjects() {
  const resp = await fetch("http://localhost:3000/api/project", {
    cache: "no-store",
  });

  return resp.json();
}
const Portfolio = async () => {
  const data: any = await fetchProjects();
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Portfolio projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Greetings, my name is Kritik Sah, and I am a 23-year-old frontend
            web developer. I possess a strong zeal for expanding my knowledge
            and skillset within the realm of web3 and blockchain technology.
          </p>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {data?.map((proj: any, index: any) => (
            <PortfolioCard key={index} data={proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

const PortfolioCard = ({ data }: any) => {
  return (
    <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg bg-white">
      <img
        alt={data?.title}
        src={data?.image}
        className="w-full object-cover"
      />

      <div className="bg-white p-4 sm:p-6">
        <h3 className="mt-0.5 text-lg text-gray-900">{data?.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {data?.desc}
        </p>
        <div className="flex flex-wrap gap-2 my-4">
          {data?.skills?.map((skill: string, index: number) => (
            <span
              key={index}
              className="whitespace-nowrap capitalize rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="h-14 bg-white">
        <div className="absolute border-t bottom-[5px] left-0 w-full flex items-center justify-start px-2 py-1 gap-4">
          {data?.github ? (
            <a
              href={data?.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200"
            >
              <FaGithub className="text-xl " />
            </a>
          ) : null}
          {data?.link ? (
            <a
              href={data?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200"
            >
              <HiOutlineExternalLink className="text-xl " />
            </a>
          ) : null}
          {data?.colab ? (
            <a
              href={data?.colab}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200"
            >
              <FaUserGroup className="text-xl" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
};
