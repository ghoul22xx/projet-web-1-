"use client";
import Image from "next/image";
import Titre from "../../public/components/Titre";
import styles from "./contactus.module.css";
import { useContext, useState } from "react";
import { LanguageContext, ThemeContext } from "../layout";
import {data} from "../../shared/data";
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const [appMode ,setAppMode] = useContext(ThemeContext);
  const appLang  = useContext(LanguageContext);


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  let sendMessage = (event) => {
    event.preventDefault();
    let error = false;
    if (name == "") {
      error = true;
      setNameError("Veuillez entrer votre nom");
    } else {
      setNameError("");
    }
    if (email == "") {
      error = true;
      setEmailError("Veuillez entrer votre email");
    } else {
      setEmailError("");
    }
    if (message == "") {
      error = true;
      setMessageError("Veuillez entrer votre message");
    } else {
      setMessageError("");
    }
    if (!error) {
      console.log("Courriel: " + email);
      console.log("Nom: " + name);
      console.log("Message: " + message);
      sendEmail();
    }
    error = false;
  };
  const sendEmail = () => {
    emailjs
      .sendForm('service_tstnzu8', 'template_mishtjd', document.getElementById("contactus-form"), {
        publicKey: 'ohpuoKZ4ze_yrQMBd',
      })
      .then(
        () => {
          console.log('Email Sent!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  };
  return (
    <>
      <Titre className={appMode + "-mode"}>{data[appLang].contactus[0]}</Titre>
      <form id="contactus-form" action="" className={styles.form} onSubmit={sendMessage}>
        <label className={appMode + "-mode"}>NOM</label>
        <input
          type="text"
          name="to_name"
          onChange={(e) => setName(e.target.value)}
        />
        <span className="error">{nameError}</span>

        <label className={appMode + "-mode"}>EMAIL</label>
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="error">{emailError}</span>

        <label name="message" className={appMode + "-mode"}>MESSAGE</label>
        <input
          type="text"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <span className="error">{messageError}</span>

        <button>{data[appLang].contactus[1]}</button>
      </form>
    </>
  );
}
