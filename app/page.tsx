import React from "react";

export default function Home() {
  return (
    <div className="container">
      {/* Name and Developer title and next to a an image */}
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col items-center justify-center w-full flex-1 text-center">
          <h1 className="text-6xl font-bold">Edwin</h1>
          <h2 className="text-2xl font-bold">Full Stack Developer</h2>
        </div>
      </div>
    </div>
  );
}
