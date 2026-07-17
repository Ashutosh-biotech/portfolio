import React from "react";
import Image from "next/image";
import logo from "@/assets/images/favicon-48x48.png"
import {NavLink} from "./Navbar/navlink";
import { MdOutlineFileDownload } from "react-icons/md";

function Navbar(): React.JSX.Element {
    return (
        <div className={"flex px-10 py-7 justify-between backdrop-blur-md fixed w-screen z-50"}>
            <div className={"flex gap-3 items-center"}>
                <Image src={logo} alt={"My Name shortform \"AK\" as a Logo"} height={32} width={32} draggable={false}/>
                <span className={"text-(--text) text-2xl"}>Ashutosh Kumar</span>
            </div>
            <NavLink />
            <div>
                <a href="#" className={"text-(--text) flex gap-3 items-center py-2 px-5 bg-(--primary) hover:bg-(--primary-hover) hover:scale-110 transition-transform duration-300 rounded-xl"}>Resume<MdOutlineFileDownload className={"text-(--text)"}/></a>
            </div>
        </div>
    )
}

export { Navbar };