'use client';
import Image from "next/image";
import Titre from "../../public/components/Titre";
import styles from  "./register.module.css"
import { useContext, useRef, useState } from "react";
import { LanguageContext, ThemeContext } from "../layout";
import {data} from "../../shared/data";
import emailjs from '@emailjs/browser';

export default function ContactUs(){
  const [appMode ,setAppMode] = useContext(ThemeContext);
  const appLang  = useContext(LanguageContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');

    let register = (event) => {
        event.preventDefault();
        let error= false
        if(email==""){
            error=true;
            setEmailError("Veuillez entrer votre email");
        }else{
            setEmailError("");
        }
        if(password==""){
            error=true;
            setPasswordError("Veuillez entrer votre mot de passe");
        }else{
          setPasswordError("");
        }
        if(!error){

            console.log("Email: "+email);
            console.log("Password: "+password);
            sendEmail();
        }
        error=false;
    }

    const sendEmail = () => {
      emailjs
        .sendForm('service_tstnzu8', 'template_r6u6mks', document.getElementById("register-form"), {
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
      <Titre className={appMode + "-mode"}>{data[appLang].register[0]}</Titre>
      <form id="register-form" action="" className={styles.form}  onSubmit={register}>

        <label className={appMode + "-mode"}>EMAIL</label>
        <input type="text" name="from_name" onChange={(e) => setEmail(e.target.value)} />
        <span className="error">{emailError}</span>


        <label className={appMode + "-mode"}>{data[appLang].register[1]}</label>
        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
        <span className="error">{passwordError}</span>


        <button>{data[appLang].register[0]}</button>
      </form>
      {/* <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
      </script>
      <script type="text/javascript">
        (function(){
            emailjs.init({
              publicKey: "ohpuoKZ4ze_yrQMBd",
            });
        })();
      </script> */}
        </>
    );
}