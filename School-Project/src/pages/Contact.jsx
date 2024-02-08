import React from "react";

function Contact() {
  return (
    <div className="flex justify-center items-center p-10 ">
      <div className="grid h-30 m-auto  p-40 bg-cyan-500 bg border-black w-[50%  ] items-center justify-center rounded-lg gap-2">
        <div className="flex gap-4 ">
          <input type="text" placeholder="Name" className="p-2 rounded-lg" />
          <input type="text" placeholder="Email" className="p-2 rounded-lg" />
        </div>
        <div className="grid gap-4 w-100 h-40">
          <input
            type="text"
            placeholder="Message"
            className="p-2 rounded-lg size-full"
          />
          <button className="bg-slate-500 w-20 h-10 rounded-full flex justify-center items-center">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
export default Contact;
