"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { toast } from "react-toastify";

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

const Certificate = () => {
  const [image, setImage] = useState<any>("");
  const [title, setTitle] = useState<any>("");
  const [desc, setDesc] = useState<any>("");
  const [link, setLink] = useState<any>("");

  const clearState = () => {
    setImage("");
    setTitle("");
    setDesc("");
    setLink("");
  };
  const { data: session }: any = useSession();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!title || !image || !desc || !link) {
      toast.error("All required feild are must be provided");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/certification`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          image,
          link,
          authorId: session?.user?._id,
        }),
      });
      if (!res.ok) {
        throw new Error("Error occured");
      }
      const project = await res.json();
      console.log("🚀 ~ file: page.tsx:46 ~ handleSubmit ~ project:", project);

      toast.success("created project successfully!!");
      clearState();
    } catch (error) {
      console.log("🚀 ~ file: page.tsx:52 ~ handleSubmit ~ error:", error);
    }
  };
  const uploadAll = () => {
    tempData?.forEach(async (data) => {
      try {
        const res = await fetch(`http://localhost:3000/api/certification`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
          method: "POST",
          body: JSON.stringify({
            title: data?.title,
            desc: data?.desc,
            image: data?.image,
            link: data?.link,
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
      <h1 className="">Add certification</h1>
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
        {/* submit button  */}
        <button
          disabled={!title || !image || !desc || !link}
          type="submit"
          className="btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Certificate;
