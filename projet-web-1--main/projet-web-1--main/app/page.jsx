"use client";
import Image from "next/image";
import Description from "../public/components/Description";
import styles from "../public/components/Accueil.module.css";
import Titre from "../public/components/Titre";
import Link from "next/link";
import { useContext } from "react";
import { LanguageContext, ThemeContext } from "./layout";
import {data} from "../shared/data";
export default function Accueil() {
  const [appMode ,setAppMode] = useContext(ThemeContext);
  const appLang  = useContext(LanguageContext);
  return (
    <>
      <div>
        <Image
          src="/hamza.jpg"
          alt="hamza image"
          style={{
            objectFit: "cover",
          }}
          width={759}
          height={759}
        />
      </div>
      <Titre className={appMode + "-mode"}>VOID WALKERS®</Titre>
      <Description className={appMode + "-mode"}>
        {data[appLang].home[0]}
        spectateurs.
      </Description>
      <div className="flex">
        <Link href="/montreal">
          <button className={"link-" + appMode}>MONTREAL</button>
        </Link>
        <Link href="/paris">
          <button className={"link-" + appMode}>PARIS</button>
        </Link>
        <Link href="/register">
          <button className={"link-" + appMode}>{data[appLang].home[1]}</button>
        </Link>
        <Link href="/contactus">
          <button className={"link-" + appMode}>{data[appLang].home[2]}</button>
        </Link>
      </div>
    </>
  );
}
