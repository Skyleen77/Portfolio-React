import React , { useRef } from "react";
import emailjs from '@emailjs/browser';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { config } from '../config.js';

toast.configure()

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(config.service, config.template, form.current, config.user)
      .then((result) => {
          notifyIsValid();
      }, (error) => {
          notifyError();
      });

    e.target.reset();
  };

  const notifyIsValid = () => {
    toast.success('Votre message a bien envoyé')
  }

  const notifyError = () => {
    toast.error("Erreur: Votre message n'a pas pu être envoyé")
  }

  return (
    <>
      <form className="contactform" ref={form} onSubmit={sendEmail}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="VOTRE NOM"
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="VOTRE EMAIL"
              />
            </div>
          </div>

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="SUJET"
              />
            </div>
          </div>

          <div className="col-12">
            <div className="form-group">
              <textarea
                name="message"
                placeholder="VOTRE MESSAGE"
              ></textarea>
            </div>
          </div>

          <div className="col-12 center">
            <button type="submit" className="button">
              <span className="button-text">Envoyer</span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
        </div>
      </form>

    </>

  );

};

export default Contact;
