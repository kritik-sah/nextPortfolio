"use client";
import { useSession } from "next-auth/react";
import React, { useRef, useState } from "react";
// import { Editor } from "@tinymce/tinymce-react";
import { Editor } from "react-draft-wysiwyg";
import { toast } from "react-toastify";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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

const Experience = () => {
  const [title, setTitle] = useState<any>("");
  const [desc, setDesc] = useState<any>("");
  const [from, setFrom] = useState<any>("");
  const [to, setTo] = useState<any>("");
  const [company, setCompany] = useState<any>("");

  const clearState = () => {
    setTitle("");
    setDesc("");
    setFrom("");
    setTo("");
    setCompany("");
  };

  const { data: session }: any = useSession();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!title || !from || !to || !company || !desc) {
      toast.error("All required feild are must be provided");
      return;
    }

    const htmlDesc = JSON.stringify(draftToHtml(desc));
    console.log("🚀 ~ file: page.tsx:36 ~ handleSubmit ~ desc:", htmlDesc);
    try {
      const res = await fetch(`http://localhost:3000/api/experience`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
        method: "POST",
        body: JSON.stringify({
          title,
          desc: htmlDesc,
          to,
          from,
          company,
          authorId: session?.user?._id,
        }),
      });
      if (!res.ok) {
        throw new Error("Error occured");
      }
      const Experience = await res.json();
      console.log(
        "🚀 ~ file: page.tsx:49 ~ handleSubmit ~ Experience:",
        Experience
      );
      toast.success("created Experience successfully!!");
      clearState();
    } catch (error) {
      console.log("🚀 ~ file: page.tsx:52 ~ handleSubmit ~ error:", error);
    }
  };

  const uploadAll = () => {
    tempData?.forEach(async (data) => {
      try {
        const res = await fetch(`http://localhost:3000/api/experience`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
          method: "POST",
          body: JSON.stringify({
            title: data?.title,
            desc: data?.desc,
            from: data?.from,
            to: data?.to,
            company: data?.company,
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
        toast.success("created Experience successfully!!");
      } catch (error) {
        console.log("🚀 ~ file: page.tsx:52 ~ handleSubmit ~ error:", error);
      }
    });
  };

  return (
    <div className="createPosts">
      <h1 className="">Add Experience</h1>
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
          <Editor
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName border"
            editorClassName="editorClassName min-h-[500px]"
            onChange={(e) => setDesc(e)}
          />
          {/* <input
            type="text"
            id="desc"
            placeholder="description..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          /> */}
        </div>
        {/* Company input  */}
        <div>
          <label
            htmlFor="company"
            className="block text-xs font-medium text-gray-700"
          >
            Company
          </label>

          <input
            type="text"
            id="company"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        {/* Github input  */}
        <div>
          <label
            htmlFor="from"
            className="block text-xs font-medium text-gray-700"
          >
            From
          </label>

          <input
            type="text"
            id="from"
            placeholder="2023"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        {/* link input  */}
        <div>
          <label
            htmlFor="to"
            className="block text-xs font-medium text-gray-700"
          >
            To
          </label>

          <input
            type="text"
            id="to"
            placeholder="present"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>

        {/* submit button  */}
        <button
          disabled={!title || !from || !to || !company}
          type="submit"
          className="btn-primary"
        >
          Submit
        </button>
      </form>
      <button onClick={uploadAll} className="btn-primary">
        Submit All
      </button>
    </div>
  );
};

export default Experience;
