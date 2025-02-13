"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Props } from "./interface";
import style from "./ActiveLink.module.css";

export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${style.link} ${pathName === path && style["active-link"]} `}
      href={path}
    >
      {text}
    </Link>
  );
};
