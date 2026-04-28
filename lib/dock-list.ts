import { File, HomeIcon } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

export const items = [
    {name: "Home", Icon: HomeIcon, link: "/"},
    {name: "Resume", Icon: File, link: "/resume.pdf"},
    {name: "Github", Icon: IoLogoGithub, link: "https://github.com/shivaKotagir"},
    {name: "LinkedIn", Icon: FaLinkedin, link: "https://www.linkedin.com/in/kotagiri-shiva-670330288/"},
    {name: "X", Icon: FaXTwitter, link: "https://x.com/ShivaKumar403"},
  ]