import Image from "next/image";
import { Button } from "./button";
import Forms from "./forms";

const insurances = [
  {
    image: "seguro-vida",
    title: "Seguro de Vida",
    description: "Proteja quem você ama com coberturas essenciais",
    buttonLabel: "Proteger minha Família",
    buttonText: "/",
  },
  {
    image: "seguro-auto",
    title: "Seguro Auto",
    description: "Proteção completa para seu veículo com assistência 24h",
    buttonLabel: "Proteger meu Veículo",
    buttonText: "/",
  },
  {
    image: "seguro-residencial",
    title: "Seguro Residencial",
    description: "Seu lar protegido contra incêndios, furtos e imprevistos",
    buttonLabel: "Proteger minha Casa",
    buttonText: "/",
  },
  {
    image: "seguro-empresarial",
    title: "Seguro Empresarial",
    description: "Segurança para patrimônio, equipamentos, estoque e mais",
    buttonLabel: "Proteger minha Empresa",
    buttonText: "/",
  },
  {
    image: "seguro-viagem",
    title: "Seguro Viagem",
    description:
      "Proteção completa para você viajar tranquilo, no Brasil ou exterior",
    buttonLabel: "Viajar com Segurança",
    buttonText: "/",
  },
  {
    image: "seguro-garantia",
    title: "Seguro Garantia",
    description: "Garantias para contratos, licitações e processos judiciais",
    buttonLabel: "Solicitar uma Garantia",
    buttonText: "/",
  },
  {
    image: "seguro-fianca",
    title: "Seguro Fiança",
    description: "Aluguel sem fiador, com mais segurança e praticidade",
    buttonLabel: "Alugar sem Fiador",
    buttonText: "/",
  },
  {
    image: "responsabilidade-civil",
    title: "Responsabilidade Civil",
    description: "Coberturas para RC Geral, Profissional, Médico, D&O e outros",
    buttonLabel: "Solicitar Cotação de RC",
    buttonText: "/",
  },
];

export default function Insurances() {
  return (
    <div className="relative">
      <section className="relative z-1 flex flex-col text-center">
        <h2 className="text-orange">Seguros</h2>
        <h4 className="-mt-2">Para Você e sua Empresa</h4>
        <div className="grid gap-4 md:gap-6 grid-cols-2 xl:grid-cols-4 my-6 md:my-12">
          {insurances.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl justify-between overflow-hidden pb-2 md:pb-4 border border-orange bg-white"
            >
              <div className="">
                <div className="relative w-[170px] md:w-[340px] lg:w-[410px] xl:w-[280px] h-[115px] md:h-[230px] lg:h-[276px] xl:h-[190px]">
                  <Image
                    alt={item.title}
                    src={`/${item.image}.png`}
                    sizes="(max-width: 767px) 170px, (max-width: 1023px) 340px, (max-width: 1279px) 410px, 280px"
                    className="absolute object-cover"
                    loading="lazy"
                    fill
                  />
                </div>
                <div className="p-2 md:p-4">
                  <h3 className="text-black">{item.title}</h3>
                  <p className="text-dark">{item.description}</p>
                </div>
              </div>
              <div className="px-2 md:px-4">
                <Button
                  label={item.buttonLabel}
                  url={item.buttonText}
                  isPrimary
                />
              </div>
            </div>
          ))}
        </div>
        <div className="relative rounded-2xl overflow-hidden p-4 md:p-8 xl:p-12 xl:min-h-[30rem] border border-black/25">
          <Image
            alt="Família sorrindo por possuir seguro"
            src={"/seguro-background.png"}
            className="absolute object-cover object-top"
            fill
          />
          <div className="relative text-left space-y-2 xl:space-y-6 w-[70%] md:w-[50%] xl:w-[30%]">
            <h3>
              Nos diga o que você precisa e nós encontramos o seguro certo
            </h3>
            <Forms label="Seguros" />
          </div>
        </div>
      </section>
      <div
        className="absolute opacity-50 z-[-999] left-[-60%] top-[-40%] w-full h-full bg-contain bg-left bg-no-repeat"
        style={{ backgroundImage: "url('/element.png')" }}
      ></div>
      <div
        className="absolute opacity-50 z-[-999] right-[-60%] bottom-[-40%] w-full h-full bg-contain bg-left bg-no-repeat"
        style={{ backgroundImage: "url('/element.png')" }}
      ></div>
    </div>
  );
}
