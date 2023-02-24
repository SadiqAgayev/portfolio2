import React, { useState } from "react";

const RightContact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+(.-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email");
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
      setErrMsg("");
    }
  };
  return (
    <div className="w-full lgl:w-[60%] h-full flex flex-col gap-8 px-8 py-9 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg">
      <form className="w-full flex flex-col gap-6">
        {errMsg && (
          <p className="py-3 text-center text-orange-500 text-base tracking-wide animate-bounce">
            {errMsg}
          </p>
        )}
        {successMsg && (
          <p className="py-3 text-center text-green-500 text-base tracking-wide animate-bounce">
            {successMsg}
          </p>
        )}
        <div className="w-full flex flex-col lgl:flex-row gap-10">
          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Your name
            </p>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className={`${
                errMsg === "Username is required" ? "outline-red-700" : ""
              } contactInput`}
              type="text"
              value={username}
            />
          </div>
          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Phone Number
            </p>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={`${
                errMsg === "Phone number is required" ? "outline-dred-700" : ""
              } contactInput`}
              type="number"
              value={phoneNumber}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className={`${
              errMsg === "Please give your Email!" ? "outline-red-700" : ""
            } contactInput`}
            type="email"
            value={email}
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Subject
          </p>
          <input
            onChange={(e) => setSubject(e.target.value)}
            className={`${
              errMsg === "Please give your Subject!" ? "outline-red-700" : ""
            } contactInput`}
            type="text"
            value={subject}
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Your Message
          </p>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            rows="8"
            cols="30"
            className={`${
              errMsg === "Message is required!" ? "outline-red-700" : ""
            } contactTextarea`}
            type="text"
            value={message}
          />
        </div>
        <div className="w-full">
          <button
            onClick={handleSend}
            className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:border-red-700 hover:text-white border-transparent"
          >
            Send Message
          </button>
        </div>
        {errMsg && (
          <p className="py-3 text-center text-orange-500 text-base tracking-wide animate-bounce">
            {errMsg}
          </p>
        )}
        {successMsg && (
          <p className="py-3 text-center text-green-500 text-base tracking-wide animate-bounce">
            {successMsg}
          </p>
        )}
      </form>
    </div>
  );
};

export default RightContact;
