import Image from "next/image";
import { Button } from "./button";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 xl:gap-32">
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:w-[65%] xl:w-[45%]">
        <div>
          <h4 className="text-orange">Quem Somos</h4>
          <h2>Segurança de verdade vem com orientação de quem entende</h2>
        </div>
        <div className="space-y-2">
          <p>
            A GMD Corretora é especialista em soluções de proteção e
            planejamento financeiro. Com mais de uma década de atuação, ajudamos
            famílias, profissionais e empresas a protegerem o que
            importa: saúde, bens e futuro.
          </p>
          <p>
            Trabalhamos com as principais seguradoras e operadoras do país,
            oferecendo uma consultoria completa, imparcial e humana. Da escolha
            da cobertura ideal ao suporte no pós-venda. nossa missão é
            garantir segurança, economia e tranquilidade em cada decisão.
          </p>
        </div>
        <Button label="Solicite uma Consultoria Gratuita" url="" isPrimary />
      </div>
      <div className="relative flex w-full md:w-[50%] h-80 md:h-96 xl:h-[30rem]">
        <div className="absolute border-8 border-white -top-6 -right-4 overflow-hidden rounded-2xl w-[98%] h-[100%]">
          <Image
            alt="Imagem de background"
            className="absolute object-cover"
            src="/about-background.png"
            fill
          />
        </div>
        <div className="absolute border-8 border-white -bottom-6 -left-4 overflow-hidden rounded-2xl w-[70%] h-[50%]">
          <Image
            alt="Imagem de background"
            className="absolute object-cover"
            src="/about-background-secondary.png"
            fill
          />
        </div>
        <div className="w-1/2 h-full rounded-2xl bg-orange"></div>
        <div className="w-1/2 h-full rounded-2xl bg-blue"></div>
      </div>
    </section>
  );
}
