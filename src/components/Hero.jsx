import React from "react";

export default function Hero() {
  return (
<section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-svh px-4 md:px-12 hero-desing bg-black scroll-mt-24">
  {/* LEFT SIDE */}
  <div className="md:w-1/3 flex flex-col items-center text-center md:items-start md:text-left wrapper">
    <h1 className="glitch hero-desing text-5xl md:text-6xl font-bold leading-tight mb-4">
      <span>lInGa PrAbHu </span>
      <span>S</span>
    </h1>
    <p className="text-lg md:text-xl  text-white mb-6">
      Developer
    </p>
  </div>

        {/* <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Get Started
        </button> */}
     {/* RIGHT SIDE */}
 <div
  className="md:w-3/3 mt-5 md:mt-0 flex justify-center rounded-2xl"
  style={{ backgroundColor: "#28282b" }}
>
  <div
    className="p-8 rounded-3xl px-6 py-6 w-full max-w-x3"
    style={{ backgroundColor: "#28282b", borderRadius: "30px" }}
  >
    <p className="text-white text-lg leading-relaxed text-Justify ">
      Senior Azure & .NET Developer with 5+ years of experience in backend development, cloud platforms, and event-driven systems. 
      Skilled in building high-performance APIs, Azure Function Apps, Event Hub integrations, Service Bus messaging, Redis caching, SQL optimization, and Kubernetes deployments.
      Passionate about creating scalable, secure, and maintainable solutions that deliver measurable business impact.
    </p>
  </div>
</div>
</section>
  );
}

