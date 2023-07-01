"use client";
import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

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

const Portfolio = () => {
  const [image, setImage] = useState<any>("");
  const [title, setTitle] = useState<any>("");
  const [desc, setDesc] = useState<any>("");
  const [skills, setSkills] = useState<any>([]);
  const [github, setGithub] = useState<any>("");
  const [link, setLink] = useState<any>("");
  const [colab, setColab] = useState<any>("");
  const [personal, setPersonal] = useState<boolean | undefined>(false);

  const clearState = () => {
    setImage("");
    setTitle("");
    setDesc("");
    setSkills([]);
    setGithub("");
    setLink("");
    setColab("");
    setPersonal(false);
  };

  const { data: session }: any = useSession();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!title || !image || !desc || !skills) {
      toast.error("All required feild are must be provided");
      return;
    }
    let skillsArray: any = [];
    skills?.forEach((skill: any) => {
      skillsArray.push(skill?.value);
    });

    try {
      const res = await fetch(`http://localhost:3000/api/project`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          image,
          github,
          link,
          colab,
          personal,
          skills: skillsArray,
          authorId: session?.user?._id,
        }),
      });
      if (!res.ok) {
        throw new Error("Error occured");
      }
      const project = await res.json();
      console.log("🚀 ~ file: page.tsx:49 ~ handleSubmit ~ project:", project);
      toast.success("created project successfully!!");
      clearState();
    } catch (error) {
      console.log("🚀 ~ file: page.tsx:52 ~ handleSubmit ~ error:", error);
    }
  };

  const uploadAll = () => {
    tempdata?.forEach(async (data) => {
      try {
        const res = await fetch(`http://localhost:3000/api/project`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
          method: "POST",
          body: JSON.stringify({
            title: data?.title,
            desc: data?.desc,
            image: data?.image,
            github: data?.github,
            link: data?.link,
            colab: data?.colab,
            personal: data?.personal,
            skills: data?.skills,
            authorId: session?.user?._id,
          }),
        });
        if (!res.ok) {
          throw new Error("Error occured");
        }
        const project = await res.json();
        console.log(
          "🚀 ~ file: page.tsx:49 ~ handleSubmit ~ project:",
          project
        );
        toast.success("created project successfully!!");
      } catch (error) {
        console.log("🚀 ~ file: page.tsx:52 ~ handleSubmit ~ error:", error);
      }
    });
  };

  return (
    <div className="createPosts">
      <h1 className="">Add Portfolio</h1>
      <form onSubmit={handleSubmit} className="my-4 space-y-4">
        {/* Title input */}
        <div>
          <label
            htmlFor="title"
            className="block text-xs font-medium text-gray-700"
          >
            Title
          </label>

          <input
            type="text"
            id="title"
            placeholder="title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        {/* desc input  */}
        <div>
          <label
            htmlFor="desc"
            className="block text-xs font-medium text-gray-700"
          >
            Description
          </label>

          <input
            type="text"
            id="desc"
            placeholder="description..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        {/* Image input  */}
        <div>
          <label
            htmlFor="image"
            className="block text-xs font-medium text-gray-700"
          >
            Image
          </label>

          <input
            type="text"
            id="image"
            placeholder="image url..."
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        {/* Github input  */}
        <div>
          <label
            htmlFor="github"
            className="block text-xs font-medium text-gray-700"
          >
            Github
          </label>

          <input
            type="text"
            id="github"
            placeholder="Github repo. url..."
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        {/* link input  */}
        <div>
          <label
            htmlFor="link"
            className="block text-xs font-medium text-gray-700"
          >
            Link
          </label>

          <input
            type="text"
            id="link"
            placeholder="url..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        {/* colab input  */}
        <div>
          <label
            htmlFor="colab"
            className="block text-xs font-medium text-gray-700"
          >
            Colabrator
          </label>

          <input
            type="text"
            id="colab"
            placeholder="Colabrator url..."
            value={colab}
            onChange={(e) => setColab(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        {/* skills input  */}
        <div>
          <label
            htmlFor="skills"
            className="block text-xs mb-1 font-medium text-gray-700"
          >
            Skills
          </label>
          <CreatableSelect
            isMulti
            id="skills"
            placeholder="Select skills"
            value={skills}
            onChange={(e) => setSkills(e)}
          />
        </div>
        {/* ispersnal checkbox  */}
        <div className="flex items-center justify-start gap-4">
          <label
            htmlFor="isPersonal"
            className="relative h-8 w-14 cursor-pointer"
          >
            <input
              type="checkbox"
              id="isPersonal"
              checked={personal}
              onChange={(e) => setPersonal(e.target.checked)}
              className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
            />

            <span className="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600">
              <svg
                data-unchecked-icon
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>

              <svg
                data-checked-icon
                xmlns="http://www.w3.org/2000/svg"
                className="hidden h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"></span>
          </label>
          is personal project?
        </div>
        {/* submit button  */}
        <button
          disabled={!title || !image || !desc || !skills}
          type="submit"
          className="btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Portfolio;
