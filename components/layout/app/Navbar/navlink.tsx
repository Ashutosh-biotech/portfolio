"use client"

import Link from "next/link";
import React from "react";

interface NavItemInterface { name: string; href: string }

const NavItems:  NavItemInterface[] = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Projects",
        href: "/projects",
    },
    {
        name: "Skills",
        href: "/skills",
    },
    {
        name: "Experience",
        href: "/experience",
    },
    {
        name: "Education",
        href: "/education",
    },
    {
        name: "Contact",
        href: "/contact",
    }
]

function NavLink() :React.JSX.Element {

    const [active, setActive] = React.useState<number>(0);

    return (
        <div className={"flex gap-6 items-center"}>
            {
                NavItems.map((item :NavItemInterface, i :number ): React.JSX.Element => (
                    <Link
                        key={i}
                        href={item.href}
                        className={`p-3 relative group overflow-hidden transition-colors duration-400 ${
                            i === active
                                ? "text-(--primary) border-b-2 border-(--primary)"
                                : "text-(--text)"
                        }`}
                        onClick={() :void => setActive(i)}
                    >
                        <span
                            className="relative z-10 block transition-colors duration-300 group-hover:text-(--bg)">
                            {item.name}
                        </span>

                        {/* The Hover Liquid Layer: Emerges from the bottom and engulfs the box */}
                        <div
                            className="absolute bottom-0 left-0 w-full h-0 bg-(--primary) transition-all duration-300 ease-out group-hover:h-full z-0"/>
                    </Link>
                ))
            }
        </div>
    )
}

export {NavLink};