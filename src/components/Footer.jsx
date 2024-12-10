import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaTwitter } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { SiPerplexity } from "react-icons/si";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  TIKTOK_URL,
  YOUTUBE_URL,
  X_URL,
  PERSONAL_WEBSITE_URL,
  CURRENT_YEAR,
  PERPLEXITY_URL,
} from "../constants/index";

export default function Footer() {
  return (
    <footer className="bg-darkDesert">
      <div className="flex flex-col items-center justify-center py-2 px-2 sm:flex-row sm:justify-between sm:py-4 sm:px-6">
        <span className="text-sm text-lightDesert sm:text-center">
          © {CURRENT_YEAR}{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={PERSONAL_WEBSITE_URL}
            className="hover:text-goldDesert transition-colors duration-300"
          >
            Artland
          </a>
        </span>
        <div className="flex mt-2 space-x-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={GITHUB_URL}
            className="text-lightDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaGithub className="w-5 h-5" />
            <span className="sr-only">GitHub account</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={LINKEDIN_URL}
            className="text-lightDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn account</span>
          </a>
          {/* Facebook */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={FACEBOOK_URL}
            className="text-lightDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaFacebook className="w-5 h-5" />
            <span className="sr-only">Facebook account</span>
          </a>
          {/* Instagram */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={INSTAGRAM_URL}
            className="text-lightDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaInstagram className="w-5 h-5" />
            <span className="sr-only">Instagram account</span>
          </a>

          {/* TikTok */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={TIKTOK_URL}
            className="text-lightDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaTiktok className="w-5 h-5" />
            <span className="sr-only">TikTok account</span>
          </a>

          {/* YouTube */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={YOUTUBE_URL}
            className="text-lightDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaYoutube className="w-5 h-5" />
            <span className="sr-only">YouTube channel</span>
          </a>

          {/* X (Twitter) */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={X_URL}
            className="text-lightDesert hover:text-goldDesert transition-colors duration-300"
          >
            <SiX className="w-5 h-5" />
            <span className="sr-only">X (formerly Twitter) account</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
