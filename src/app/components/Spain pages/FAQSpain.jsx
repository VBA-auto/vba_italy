"use client";
import React, { useState } from "react";
import Head from "next/head";

import Image from "next/image";

const pageDescription =
  "Vous trouverez ici les questions fréquentes que l'on peut trouver sur les problemes boites automatiques EDC Renault";

const AccordionItem = ({ title, content, image, isOpen, onClick }) => (
  <div className=" mb-3">
    <button
      className="w-full px-[10px] py-[5px] border border-[#2c80ef96] text-[#2C80EF] rounded-md  text-left flex justify-between items-center focus:outline-none"
      onClick={onClick}
    >
      <p className="py-[5px]">{title}</p>
      <p className="text-xl">{isOpen ? "-" : "+"}</p>
    </button>
    {isOpen && (
      <div className="border-b border-gray-200 py-[10px] px-[10px] text-gray-700">
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
        {image ? (
          <Image
            width={800}
            height={500}
            loading="lazy"
            unoptimized
            className="my-3 mx-auto"
            src={image && image}
            alt=""
          />
        ) : (
          ""
        )}
      </div>
    )}
  </div>
);

const FaqSpain = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title:
        "Come posso sapere se la mia centralina del cambio automatico è difettosa?",
      content:
        "In generale, i codici di errore associati a una centralina del cambio automatico difettosa includono 'cortocircuito a massa motore frizione due' o 'cortocircuito a massa motore frizione uno'. Questi problemi sono solitamente legati a guasti elettrici o elettronici e si manifestano generalmente con un chilometraggio inferiore a 120.000 km.",
    },
    {
      title: "Dopo quanti chilometri una centralina può essere difettosa?",
      content:
        "Secondo le nostre statistiche, i guasti alla centralina del cambio automatico si verificano generalmente tra i 60.000 e i 120.000 km. Tuttavia, non è raro che alcune centraline nei modelli Mégane e Scenic funzionino fino a 180.000 km o addirittura 200.000 km.",
    },
    {
      title: "È possibile testare la centralina del cambio automatico?",
      content:
        "Sì, in alcuni casi è possibile testare la centralina collegando il terminale del veicolo e il terminale della trasmissione senza connetterlo alla scatola del cambio. Con uno strumento diagnostico, è possibile far girare i motori uno e due per verificarne il funzionamento. Tuttavia, disponiamo di un banco di prova specializzato che consente di testare la centralina in modo preciso e affidabile.",
    },
    {
      title:
        "È possibile sostituire solo la centralina anziché l'intero cambio?",
      content:
        "Sì, certamente. In questo tipo di cambio, il problema può derivare dalla centralina. Anche i motori della frizione situati nella parte superiore o inferiore (vedere la foto nella 'penultima domanda') possono essere la causa. Oltre alla centralina, il guasto potrebbe essere dovuto anche alla frizione, alla forcella della frizione, ai sincronizzatori, al selettore o al software di gestione. Sulla base dei codici diagnostici e del comportamento del veicolo, è possibile determinare con precisione l'origine del problema.",
    },
    {
      title:
        "Come posso conoscere la referenza della mia centralina del cambio automatico?",
      content:
        "Ci basta conoscere l'anno e il modello del suo veicolo per trovare la referenza esatta della sua centralina. In generale, la referenza è riportata direttamente sulla centralina stessa. Le referenze più comuni includono A2C30743000, A2C53374830 03 K01, A2C30743100 o A2C73768907. <br/> Inoltre, troverà un codice KXX-0X inciso sulla centralina.",
    },
    {
      title: "Non ho la retromarcia, è un problema della centralina?",
      content:
        "Sembra che il problema sia generalmente dovuto a un difetto della centralina. Tuttavia, in alcuni casi, potrebbe anche essere causato dal motore della frizione situato sotto la scatola del cambio.",
    },
    {
      title: "Quali sono le referenze compatibili con il mio veicolo?",
      content: `
        <h2 class="my-2">Di seguito un riepilogo delle referenze e dei modelli compatibili per ciascuna referenza.</h2>
          <table class="w-full border-collapse">
            <thead class="">
              <tr class="bg-[#2c80efdc] text-white text-left">
                <th class="border p-2">Referenza</th>
                <th class="border p-2">Modelli Compatibili</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-gray-100">
                <td class="border p-2">310F93913R</td>
                <td class="border p-2">Mégane (2008–2016, 2016 e successive)</td>
              </tr>
              <tr>
                <td class="border p-2">310322059R</td>
                <td class="border p-2">Mégane, Clio 4, Captur</td>
              </tr>
              <tr class="bg-gray-100">
                <td class="border p-2">310321994R</td>
                <td class="border p-2">Clio 4, Captur</td>
              </tr>
              <tr>
                <td class="border p-2">310321808R</td>
                <td class="border p-2">Clio 4, Captur</td>
              </tr>
            </tbody>
          </table>
        `,
    },
    {
      title: "Ho solo le marce pari, è un problema della centralina?",
      content:
        "Sembra che il problema sia generalmente dovuto a un difetto della centralina. Tuttavia, in alcuni casi, potrebbe anche essere causato dal motore della frizione situato nella parte superiore della scatola del cambio.",
    },
    {
      title: "Ho solo le marce dispari, è un problema della centralina?",
      content:
        "Sembra che il problema sia generalmente dovuto a un difetto della centralina. Tuttavia, in alcuni casi, potrebbe anche essere causato dal motore della frizione situato nella parte superiore della scatola del cambio.",
    },
    {
      title:
        "Quali sono le diverse referenze per la centralina del cambio EDC?",
      content: `Le diverse referenze esistenti sono le seguenti: <br/>
          310320749R 310320891R 310320756R 310321109R 310321488R 310321517R 310320841R 310320717R 310320892R 310320721R 310321520R 310321561R, A4539006303 310321808R 310321150R 310321421R 310321706R 310321716R 310321793R 310321662R 310321524R 310321994R 310322059R 310F93913R 310321149R 310321306R 310320553R 310321359R, 310321148R, 310321488R.<br/> 
          Può trovarle a questo link: <a class='text-[#2c80ef]' href='https://laboiteautomatique.com/selectionnez-votre-vehicule' target='_blank' rel='noopener noreferrer'>https://laboiteautomatique.com/selectionnez-votre-vehicule</a> <br/> Le referenze più comuni sono <a class='text-[#2c80ef] underline' href='/reference/310321488R'>310321488R</a>, <a class='text-[#2c80ef] underline' href='/reference/310320749R'>310320749R</a>, <a class='text-[#2c80ef] underline' href='/reference/310320721R'>310320721R</a>, <a class='text-[#2c80ef] underline' href='/reference/310320756R'>310320756R</a>, <a class='text-[#2c80ef] underline' href='/reference/310321808R'>310321808R</a>, <a class='text-[#2c80ef] underline' href='/reference/310321306R'>310321306R</a>, <span class='text-[#2c80ef] underline cursor-default'>310320254R</span>.`,
    },
    {
      title: "Potrebbe essere un problema diverso dalla centralina?",
      content:
        "Sì, il guasto potrebbe dipendere anche da altri componenti. È necessario controllare la frizione, le forcelle della frizione, i due piccoli motori di controllo della centralina, i sincronizzatori, il selettore di marcia, il sensore del pedale del freno o il sensore del selettore.",
      image: "/images/faqAns.webp",
    },
    {
      title:
        "Quali sono i codici di errore di una centralina del cambio automatico difettosa?",
      content:
        "In generale, i codici di errore che indicano un guasto della centralina includono problemi legati al software o guasti elettrici. Ad esempio, si potrebbero riscontrare codici di cortocircuito, cortocircuiti del motore della frizione, errori di alimentazione, guasti elettrici del motore della frizione, codici di percorso elettrico non identificato o errori interni della centralina. Tutti questi codici indicano chiaramente un problema alla centralina.",
    },
  ];

  return (
    <main id="FAQ">
      <section className="installation">
        <div className="relative">
          <Head>
            <title>Question frequentes sur les problemes boite EDC</title>
            <meta name="description" content={pageDescription} />
          </Head>
          <div style={{ display: "none" }}>
            {accordionData.map((item, index) => (
              <div key={index}>
                <h1>{item.title}</h1>
              </div>
            ))}
          </div>
          {/* Texte au-dessus de l'image */}
          <main className="pb-5">
            <div className="container mx-auto">
              <div className="product border accent_color py-4 text-center rounded-md">
                <h1 className="headingText font-semibold  my-1 text-[#374151]">
                  Domande Frequenti
                </h1>
                <p className="font-semibold mt-2 text-[#374151]">
                  Esplora le risposte
                </p>
              </div>
              <div className=" mb-5 text-center">
                <p className="text-[24px] font-semibold text-[#374151]"></p>
              </div>
              <div className="">
                <div className=" w-full">
                  {accordionData.map((item, index) => (
                    <AccordionItem
                      key={index}
                      title={item.title}
                      content={item.content}
                      image={item.image}
                      isOpen={openIndex === index}
                      onClick={() => toggleAccordion(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </main>
  );
};

export default FaqSpain;
