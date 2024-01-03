import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [course, setCourse] = useState("");
  const [address, setAddress] = useState("");
  const [question, setQuestion] = useState("");

  function FormData(e)  {
    e.preventDefault()
    console.log("this is the name value", name,email,mobile,course,address,question);

  };
  return (
    <div className="w-[1000px] mx-auto p-6 bg-[#d4c7c730] rounded-md shadow-md">
      <form onSubmit={FormData}>
        <div className="flex flex-row gap-x-[10px]">
          <div className="mb-4 w-full md:w-1/2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4 w-full md:w-1/2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Repeat the pattern for other fields */}
        <div className="flex flex-row gap-x-[10px]">
          <div className="mb-4 w-full md:w-1/2">
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-600"
            >
              Mobile
            </label>
            <input
              type="tel"
              value={mobile}
              onChange={(e)=>setMobile(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your mobile number"
            />
          </div>

          <div className="mb-4 w-full md:w-1/2">
            <label
              htmlFor="course"
              className="block text-sm font-medium text-gray-600"
            >
              Course Name
            </label>
            <input
              type="text"
              value={course}
              onChange={(e)=>setCourse(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your Course name"
            />
          </div>
        </div>

        {/* Additional fields go here */}
        <div className="flex flex-row gap-x-[10px]">
          <div className="mb-4 w-full">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600"
            >
              Address
            </label>
            <textarea
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              rows="3"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your address"
            ></textarea>
          </div>

          <div className="mb-4 w-full">
            <label
              htmlFor="question"
              className="block text-sm font-medium text-gray-600"
            >
              Question
            </label>
            <textarea
              value={question}
              onChange={(e)=>setQuestion(e.target.value)}
              rows="3"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Ask your question here"
            ></textarea>
          </div>
        </div>

        <div className="w-full">
          <button
            onClick={()=>alert("Your Data is submitted successfully")}
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
