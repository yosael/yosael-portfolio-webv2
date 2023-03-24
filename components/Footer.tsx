import React from "react";
//import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { socialNetworks } from "@/data/socialNetworks";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center border-t-2 pt-20 pb-10">
      <h1 className="text-zinc-700">Follow me</h1>
      <div className="flex flex-row items-center justify-center w-full h-24  ">
        {/* Social Media Icons */}
        {socialNetworks.map((socialNetwork) => (
          <SocialIcon
            url={socialNetwork.url}
            className="mr-4"
            target={"_blank"}
          />
        ))}
      </div>
    </footer>
  );
}
