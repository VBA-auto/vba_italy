import Image from "next/image";
import React from "react";
import MeganeTab from "./MeganeTab";

const MeganeModal = () => {
  return (
    <div>
      <div className=" justify-center items-start gap-5 ">
        <div className="">
          <div className="ms-auto  accent_color py-5 bg-white rounded-md  p-5">
            <div className="flex justify-between relative">
              <div className="mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-700 md:block hidden">
                  Renault Mégane
                </h1>
              </div>
            </div>
            <h1 className="text-2xl font-semibold text-center text-gray-700 md:hidden block mt-5 ">
              Renault Mégane
            </h1>
            <div className="my-3">
              <Image
                width={300}
                height={290}
                src="/images/calculateur_DC4_renault-megane.webp"
                className="mx-auto w-[300px] h-[170px] mb-4"
                alt=""
              />
            </div>
            <p className="text-justify text-[15px]">
              Verifica la disponibilità del tuo modulo (cambio da controllare)
              per il cambio automatico EDC Renault Mégane 3. Può essere fornito
              in bianco o direttamente programmato (Plug & Play).
              L'installazione è possibile a seconda della tua posizione
              geografica. Scegli il tuo modello per Renault Mégane 3: Benzina o
              Diesel. Non esitare a contattarci se desideri essere assolutamente
              sicuro che questa parte sia davvero la causa del problema. Per
              maggiori informazioni, puoi consultare la nostra assistenza
              online.
            </p>
          </div>
        </div>
      </div>

      {/* --------------------------- */}
      <div className="mt-5">
        <MeganeTab />
      </div>
    </div>
  );
};

export default MeganeModal;
