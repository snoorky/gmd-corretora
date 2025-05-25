import Image from "next/image";
import { Button } from "./button";
import Forms from "./forms";

const benefits = [
  {
    icon: "chart",
    description: "Comparativo completo entre operadoras líderes do mercado",
  },
  {
    icon: "family",
    description: "Atendimento para empresas, famílias e pessoas físicas",
  },
  {
    icon: "tasks",
    description: "Planos com ou sem coparticipação, você escolhe",
  },
  {
    icon: "chat",
    description: "Consultoria gratuita e personalizada para seu perfil",
  },
];

export default function Health() {
  return (
    <section className="relative">
      <Image
        alt="Imagem de background"
        className="absolute object-cover"
        src="/health-background.png"
        fill
      />
      <div className="absolute w-screen h-full bg-black/50 inset-0"></div>
      <div className="relative flex flex-col xl:flex-row justify-between items-center text-center text-white">
        <div className="flex flex-col items-center justify-center xl:items-start xl:text-left xl:w-[50%]">
          <h2 className="text-orange-light">Planos de Saúde</h2>
          <h4 className="-mt-2">Empresariais e Familiares</h4>
          <p className="my-4 md:my-8">
            Intermediamos a contratação dos principais planos de saúde
            disponíveis no mercado nacional, sempre com foco na sua real
            necessidade. Comparamos operadoras, coberturas e condições para
            oferecer o melhor custo benefício, seja para sua família ou para a
            sua empresa.
          </p>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4 xl:grid-cols-1 mb-6 md:mb-12">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex items-center flex-col xl:flex-row gap-2"
              >
                <Image
                  alt={`Ícone de ${item.icon}`}
                  src={`/icons/${item.icon}.svg`}
                  width={32}
                  height={32}
                />
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <Button label="Entrar em Contato" url="" isPrimary />
        </div>
        <div className="bg-white/70 space-y-4 rounded-2xl text-dark mt-6 md:mt-12 xl:mt-0 p-4 md:p-8 xl:w-[40%]">
          <h3>
            Preencha seus dados e receba a proposta ideal para sua empresa ou
            família
          </h3>
          <Forms label="Saúde" />
        </div>
      </div>
    </section>
  );
}
