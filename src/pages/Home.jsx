import React from "react";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const particlesConfig = {
  particles: {
    number: { value: 50 },
    size: { value: 3 },
    move: { enable: true, speed: 2 },
  },
};

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Initialize the slim engine
  }, []);
  return (
    <div className="relative">
      {/* <Particles init={particlesInit} options={particlesConfig} /> */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center text-white max-w-2xl p-8">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-primary">Welcome to</span> Finter
          </h1>
          <p className="text-lg text-gray-400 mb-6">
            Empowering you with financial insights and tools to make smarter
            decisions.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/signup"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up Now
            </Link>

            <Link
              to="/about"
              className="bg-gray-700 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="text-white min-h-screen px-8 py-16">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            We invest in the world's potential
          </h1>
          <p className="text-gray-400 mb-8">
            Here at Flowbite we focus on markets where innovation can unlock
            long-term value and drive economic growth.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-3xl font-bold">5,897</h3>
            <p className="text-gray-400">New products this week</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-3xl font-bold">$45,385</h3>
            <p className="text-gray-400">Sales this week</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-3xl font-bold">6768</h3>
            <p className="text-gray-400">User signups this week</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="flex items-center">
            <div className="text-blue-500 text-3xl mr-4">🔧</div>
            <div>
              <h3 className="font-bold">Customizable Persona</h3>
              <p className="text-gray-400 text-sm">
                Creating a personlised Persona for our user.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-blue-500 text-3xl mr-4">🔒</div>
            <div>
              <h3 className="font-bold">Relevant Financial Repo</h3>
              <p className="text-gray-400 text-sm">
                We provide relevant financial report.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-blue-500 text-3xl mr-4">📊</div>
            <div>
              <h3 className="font-bold">Analyzing Financial Status</h3>
              <p className="text-gray-400 text-sm">
                We analyze financial status of user and then we provide relevant
                financial report.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
