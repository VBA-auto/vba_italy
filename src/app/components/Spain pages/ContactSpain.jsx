"use client";

import Head from "next/head";
import { useState } from "react";

const pageDescription =
  "Contactez-nous via cette page, en laissant vos coordonnées et indiquez votre type de véhicule Renault ";

const ContactSpain = () => {
  const [isError, setIsError] = useState(false);
  const [isTel, setIsTel] = useState(false);
  const [isOk, setIsOk] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    message: "",
    category: "Renault Captur", // Ajout de la catégorie
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Si c'est le menu déroulant, mettez à jour la valeur dans l'objet formData
    if (name === "category") {
      setFormData((prevData) => ({ ...prevData, category: value }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const isPhoneNumberValid = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.phone || !isPhoneNumberValid(formData.phone)) {
      setIsTel(true);
      return;
    }

    try {
      const response = await fetch("/api/contactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsOk(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <main id="contact" className="">
      <section className="pt-[30px] pb-20 md:px-0 px-5">
        <div className="relative">
          <div className="flex flex-col items-center">
            <Head>
              <title>Contattaci - Calcolatore Renault VBA</title>
              <meta name="description" content={pageDescription} />
            </Head>
            <div className="container mx-auto mb-8">
              <div className="product border accent_color py-4 text-center rounded-md">
                <h1 className="headingText font-semibold my-1 text-[#374151]">
                  Contattaci
                </h1>
                <p className="font-semibold mt-2 text-[#374151]">
                  Siamo qui per aiutarti.
                </p>
              </div>
            </div>

            <div className="contactForm md:w-[846px]">
              <form
                onSubmit={handleSubmit}
                className="w-full z-20 shadow-xl accent_color p-4 rounded-md"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Nome e Cognome */}
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block pl-2 text-sm font-medium text-gray-600"
                    >
                      Nome / Cognome *
                    </label>
                    <input
                      placeholder="Inserisci il tuo nome e cognome"
                      type="text"
                      id="name"
                      name="name"
                      className="forminputFields bg-white"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Indirizzo Email */}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block pl-2 text-sm font-medium text-gray-600"
                    >
                      E-mail*
                    </label>
                    <input
                      placeholder="esempio@email.com"
                      type="email"
                      id="email"
                      name="email"
                      className="forminputFields bg-white"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Telefono */}
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block pl-2 text-sm font-medium text-gray-600"
                    >
                      Telefono*
                    </label>
                    <input
                      placeholder="Inserisci il tuo numero di telefono"
                      type="tel"
                      id="phone"
                      name="phone"
                      className="forminputFields bg-white"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Categorie (Menu a tendina) */}
                  <div className="mb-4">
                    <label
                      htmlFor="category"
                      className="block pl-2 text-sm font-medium text-gray-600"
                    >
                      Oggetto della richiesta*
                    </label>
                    <select
                      id="category"
                      name="category"
                      className="forminputFields bg-white"
                      required
                      onChange={handleChange}
                    >
                      <option value="Renault Captur">Renault Captur</option>
                      <option value="Renault Megane">Renault Megane</option>
                      <option value="Renault Clio IV">Renault Clio IV</option>
                      <option value="Renault Scenic">Renault Scenic</option>
                      <option value="Renault Fluence">Renault Fluence</option>
                    </select>
                  </div>
                </div>

                {/* Messaggio */}
                <div className="mt-4">
                  <label
                    htmlFor="message"
                    className="block pl-2 text-sm font-medium text-gray-600"
                  >
                    Messaggio*
                  </label>
                  <textarea
                    placeholder="Si prega di specificare l'oggetto della richiesta. Ci impegniamo a rispondere entro 24 ore."
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="forminputFields bg-white"
                    onChange={handleChange}
                  ></textarea>
                </div>

                <p className="text-red-500">
                  {isTel
                    ? "Errore nell'invio del modulo, verifica il tuo numero di telefono"
                    : ""}
                </p>
                <p className="text-red-500">
                  {isError ? "Errore nell'invio del modulo" : ""}
                </p>
                <p className="text-green-500">
                  {isOk ? "Modulo inviato con successo" : ""}
                </p>

                {/* Pulsante Invia */}
                <div className="mt-4">
                  <button
                    type="submit"
                    className="text-[#2C80EF] bg-transparent text-[15px] border border-[#2c80ef] py-2 px-12 rounded-md hover:bg-[#2C80EF] hover:text-white block mx-auto"
                  >
                    Invia
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactSpain;
