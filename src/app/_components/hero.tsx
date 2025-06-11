import Image from "next/image";
import { Button } from "./button";
import { CookieConsentBanner } from "./analytics";

export default function Hero() {
  return (
    <>
      <main className="relative w-screen h-auto pt-8 text-white">
        <Image
          alt="Imagem de background"
          src="/background-hero.webp"
          className="absolute object-cover object-bottom"
          fill
          priority
          fetchPriority="high"
        />
        <div className="absolute w-screen h-full bg-black/25 inset-0"></div>
        <div className="relative flex flex-col items-center text-center">
          <div className="relative w-[206px] md:w-[274px] lg:w-[324px] xl:w-[400px] h-[37px] md:h-[49px] lg:h-[58px] xl:h-[72px]">
            <Image
              alt="Logo da GMD Corretora"
              src="/logo.webp"
              sizes="(max-width: 767px) 206px, (max-width: 1023px) 274px, (max-width: 1279px) 324px, 400px"
              className="absolute"
              fill
              priority
            />
          </div>
          <h1 className="xl:w-3xl">Contemplar sonhos com segurança e tranquilidade</h1>
          <h6>Seguro, Plano de Saúde e Consórcio sob medida para você ou sua empresa</h6>
          <div className="flex gap-2 md:gap-4">
            <Button
              label="Simule agora"
              url="#simular"
              target="_self"
              icon="form"
              isPrimary
              size={24}
            />
            <Button
              label="Fale com um Consultor"
              url="https://api.whatsapp.com/send?phone=5515981377486&text=Olá!+Gostaria+de+falar+com+um+consultor+sobre+seguro,+plano+de+saúde+ou+consórcio+sob+medida"
              icon="whatsapp"
              size={20}
            />
          </div>
        </div>
      </main>
      <CookieConsentBanner />
    </>
  );
}
