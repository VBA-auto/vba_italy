import Image from "next/image";
import React from "react";
import CapturTab from "./CapturTab";

const CapturModal = () => {
  return (
    <div>
      <div className=" justify-center items-start gap-5 ">
        <div className="">
          <div className="ms-auto  accent_color py-5 bg-white rounded-md  p-5">
            <div className="flex justify-between relative">
              <div className="mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-700 md:block hidden">
                  Renault Captur
                </h1>
              </div>
            </div>
            <h1 className="text-2xl font-semibold text-center text-gray-700 md:hidden block mt-5 ">
              Renault Captur
            </h1>
            <div className="my-3">
              <Image
                width={300}
                height={290}
                unoptimized
                src="/images/calculateur_DC4_Renault_Capture.webp"
                className="mx-auto w-[300px] h-[170px] mb-4"
                alt=""
              />
            </div>
            <p className="text-justify text-[15px]">
              Verifica la disponibilità del tuo modulo (unità di controllo del
              cambio) per il cambio automatico Renault Captur EDC. Può essere
              fornito in bianco o preprogrammato (Plug & Play). L'installazione
              è possibile a seconda della tua posizione geografica. Scegli il
              tuo modello per il Renault Captur: Benzina o Diesel. Non esitare a
              contattarci se desideri essere assolutamente sicuro che questo
              pezzo sia davvero la causa del problema. Per ulteriori
              informazioni, puoi consultare la nostra assistenza online.
            </p>
          </div>
        </div>
      </div>

      {/* --------------------------- */}
      <div className="mt-5">
        <CapturTab />
      </div>
    </div>
  );
};

export default CapturModal;
