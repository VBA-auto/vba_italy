import Image from "next/image";
import React from "react";
import ClioRsTab from "./ClioRsTab";

const ClioRsModal = () => {
  return (
    <div>
      <div className=" justify-center items-start gap-5 ">
        <div className="">
          <div className="ms-auto  accent_color py-5 bg-white rounded-md  p-5">
            <div className="flex justify-between relative">
              <div className="mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-700 md:block hidden">
                  Renault Clio RS
                </h1>
              </div>
            </div>
            <h1 className="text-2xl font-semibold text-center text-gray-700 md:hidden block mt-5 ">
              Renault Clio RS
            </h1>
            <div className="my-3">
              <Image
                width={300}
                height={290}
                src="/images/calculateur_DC4_clioRS.webp"
                className="mx-auto w-[300px] h-[170px] mb-4"
                alt=""
              />
            </div>
            <p className="text-justify text-[15px]">
              Verifica la disponibilità del tuo modulo (cambio da controllare)
              per il cambio automatico EDC Renault Clio RS. Può essere fornito
              in bianco o direttamente programmato (Plug & Play).
              L'installazione è possibile a seconda della tua posizione
              geografica. Esiste un solo modello per Renault Clio 4 RS: Benzina
              (1.6). Non esitare a contattarci se desideri essere assolutamente
              sicuro che questa parte sia davvero la causa del problema. Per
              maggiori informazioni, puoi consultare la nostra assistenza
              online.
            </p>
          </div>
        </div>
      </div>

      {/* --------------------------- */}
      <div className="mt-5">
        <ClioRsTab />
      </div>
    </div>
  );
};

export default ClioRsModal;
