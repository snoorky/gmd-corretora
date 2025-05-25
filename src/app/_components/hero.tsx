import Image from "next/image";
import { Button } from "./button";

export default function Hero() {
  return (
    <main className="relative w-screen h-auto pt-6 text-white">
      <Image
        alt="Imagem de background"
        src="/hero-background.png"
        className="absolute object-cover object-top"
        fill
        priority
      />
      <div className="absolute w-screen h-full bg-black/50 inset-0"></div>
      <div className="relative flex flex-col items-center text-center">
        <div className="relative w-[206px] md:w-[274px] lg:w-[324px] xl:w-[400px] h-[60px] md:h-[80px] lg:h-[94px] xl:h-[116px]">
          <Image
            alt="Logo da GMD Corretora"
            src="/logo.png"
            sizes="(max-width: 767px) 206px, (max-width: 1023px) 274px, (max-width: 1279px) 324px, 400px"
            className="absolute"
            fill
            priority
          />
        </div>
        <h1>
          Proteção para o que realmente <strong>importa</strong>
        </h1>
        <h6>
          Seguro, Plano de Saúde e Consórcio sob medida para você ou sua empresa
        </h6>
        <div className="flex gap-2 md:gap-4">
          <Button label="Simule agora" url="" icon="form" isPrimary size={24} />
          <Button
            label="Fale com um Consultor"
            url=""
            icon="whatsapp"
            size={20}
          />
        </div>
      </div>
    </main>
  );
}
