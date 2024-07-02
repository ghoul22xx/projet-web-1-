"use client";
import { Inter } from "next/font/google";
import "../app/globals.css";
import { createContext, useState } from "react";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const ThemeContext = createContext();
export const LanguageContext = createContext();

export default function RootLayout({ children }) {
  const [appMode, setAppMode] = useState("dark");
  const [appLang, setAppLang] = useState("fr");
  return (
    <html lang="en" className={inter.className}>
      <body>

      <button
        className={appMode + "-btn"}
        onClick={() => {
          appMode === "dark" ? setAppMode("light") : setAppMode("dark");
        }}
      >
        {appMode.charAt().toUpperCase() + appMode.slice(1)}
      </button>

      <button
        className={appMode + "-lang-btn"}
        onClick={() => {
          appLang === "fr" ? setAppLang("en") : setAppLang("fr");
        }}
      >
        {appLang}
      </button>

      <div className={"background"}>
        {appMode === "dark" ? (
          <Image
            src="/background.jpg"
            alt="Background Image"
            fill
            priority={true}
          />
        ) : (
          <Image
            src="/light-background.png"
            alt="Background Image"
            fill
            priority={true}
          />
        )}
      </div>
      <LanguageContext.Provider value={appLang}>
        <ThemeContext.Provider value={[appMode, setAppMode]}>
          {children}
        </ThemeContext.Provider>
      </LanguageContext.Provider>
      </body>
    </html>
  );
}
