"use client";
import Image from "next/image";
import React, { useContext } from "react";
import Titre from "../../public/components/Titre";
import Description from "../../public/components/Description";
import Link from "next/link";
import { LanguageContext, ThemeContext } from "../layout";
import {data} from "../../shared/data";

export default function Paris() {
  const [appMode ,setAppMode] = useContext(ThemeContext);
  const appLang  = useContext(LanguageContext);

  return (
    <>
      <Link href="/">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
        </button>
      </Link>
      <Titre className={appMode + "-mode"}>PARIS</Titre>
      <Titre className={appMode + "-mode"}> ACCOR ARENA 13-03-2024 </Titre>
      <Image src="/paris.jpg" width={550} height={350} alt="accor arena" />
      <Description className={appMode + "-mode"}>
        {data[appLang].paris[0]}
      </Description>
    </>
  );
}
