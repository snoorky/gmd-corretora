import Image from "next/image";
import { Button } from "./button";
import Forms from "./forms";

const benefits = [
  {
    icon: "document",
    description: "Consultoria gratuita para escolha do melhor consórcio",
  },
  {
    icon: "hands",
    description: "Opções para imóveis, veículos, pesados e capital de giro",
  },
  {
    icon: "growth",
    description: "Ideal para alavancar patrimônio ou reduzir dívidas",
  },
  {
    icon: "filled",
    description: "Parcelas acessíveis e sem juros bancários",
  },
  {
    icon: "users",
    description: "Atendimento para pessoas físicas e jurídicas",
  },
];

export default function Consortium() {
  return (
    <section className="relative">
      <Image
        alt="Imagem de background"
        className="absolute object-cover"
        src="/consortium-background.png"
        fill
      />
      <div className="absolute w-screen h-full bg-black/50 inset-0"></div>
      <div className="relative flex flex-col xl:flex-row justify-between items-center text-center text-white">
        <div className="flex flex-col items-center justify-center xl:items-start xl:text-left xl:w-[50%]">
          <h2 className="text-orange-light">Consórcio Inteligente</h2>
          <h4 className="-mt-2">Realize seus sonhos e fortaleça sua empresa</h4>
          <p className="my-4 md:my-8">
            Oferecemos consultoria completa em consórcios, auxiliando pessoas e
            empresas na escolha do grupo ideal para seus objetivos. Com zero
            juros, é uma forma inteligente de adquirir bens, organizar as
            finanças e construir patrimônio com planejamento.
          </p>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-5 xl:grid-cols-1 mb-6 md:mb-12">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex items-center flex-col xl:flex-row gap-2 last:col-span-2 md:last:col-span-1"
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
          <Button
            label="Falar com um Consultor"
            url="https://api.whatsapp.com/send?phone=5515981377486&text=Olá!+Tenho+interesse+em+consórcio+e+gostaria+de+ajuda+para+escolher+uma+opção+que+combine+com+meus+objetivos."
            isPrimary
          />
        </div>
        <div className="bg-white/70 space-y-4 rounded-2xl text-dark mt-6 md:mt-12 xl:mt-0 p-4 md:p-8 xl:w-[40%]">
          <h3>Informe seu objetivo e receba as melhores opções do mercado.</h3>
          <Forms label="Consórcio" />
        </div>
      </div>
    </section>
  );
}
