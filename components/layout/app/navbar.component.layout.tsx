import React from "react";
import Image from "next/image";
import logo from "@/assets/images/favicon-48x48.png"
import {NavLink} from "@/components/ui/Navbar/navlink";

function Navbar(): React.JSX.Element {
    return (
        <div className={"flex p-10 justify-between"}>
            <div className={"flex gap-3 items-center"}>
                <Image src={logo} alt={"My Name shortform \"AK\" as a Logo"} height={32} width={32} draggable={false}/>
                <span className={"text-[var(--text)] text-2xl"}>Ashutosh Kumar</span>
            </div>
            <NavLink />
            <div></div>
        </div>
    )
}

export { Navbar };