"use client";

import Image from "next/image";
import { useState } from "react";

const testimonial = [
  {
    category: "Seguros",
    items: [
      {
        question: "Qual o melhor seguro para proteger minha família?",
        answer:
          "O melhor seguro de vida é o que se adapta às suas necessidades. Ele não cobre apenas morte, mas também pode incluir invalidez, doenças graves, diárias por internação hospitalar e assistência funeral, garantindo proteção para sua saúde, para sua família e para os seus bens, em diferentes situações.",
      },
      {
        question: "Qual a diferença de seguro residencial e empresarial?",
        answer:
          "O seguro residencial protege sua casa contra imprevistos como incêndio, roubo ou desastres naturais. Já o seguro empresarial é mais amplo e cobre riscos específicos do seu negócio, como equipamentos, estoques e responsabilidade civil.",
      },
      {
        question: "No seguro automóvel, tenho que colocar rastreador?",
        answer:
          "Não, porém algumas seguradoras oferecem descontos para veículos com rastreador. Na GMD, comparamos operadoras para garantir o melhor custo-benefício no seguro auto com ou sem dispositivos de segurança.",
      },
      {
        question: "Como funciona o seguro de responsabilidade civil?",
        answer:
          "Esse seguro protege você ou sua empresa de danos involuntários causados a terceiros, sejam materiais, corporais ou morais. É ideal para profissionais liberais e empresas que querem se resguardar juridicamente.",
      },
    ],
  },
  {
    category: "Planos de Saúde",
    items: [
      {
        question: "Qual a diferença do plano empresarial e familiar?",
        answer:
          "O plano empresarial é voltado a empresas que querem oferecer cobertura médica aos colaboradores, com condições mais vantajosas. Já o familiar atende grupos pequenos, como casais ou pais com filhos, e é ideal para quem busca proteção particular.",
      },
      {
        question: "Qual a diferença de coparticipação completa e parcial?",
        answer:
          "Na coparticipação completa, o beneficiário paga uma porcentagem por todos os procedimentos. Na parcial, apenas em terapias, como psicólogos, fisioterapeutas, entre outros. A escolha depende do quanto você quer economizar na mensalidade e nos atendimentos.",
      },
      {
        question: "Posso contratar plano de saúde como autônomo?",
        answer:
          "Sim! Autônomos podem aderir a planos de saúde por meio de entidades de classe ou como MEI. A GMD orienta você nesse processo, garantindo acesso a boas opções mesmo sem CNPJ empresarial.",
      },
      {
        question: "O que é coparticipação em planos de saúde?",
        answer:
          "Coparticipação é um modelo em que o beneficiário paga uma pequena parte do valor de exames e consultas, tornando a mensalidade mais acessível. É ideal para quem usa o plano com pouca frequência.",
      },
    ],
  },
  {
    category: "Consórcio",
    items: [
      {
        question: "Vale a pena fazer consórcio para comprar imóvel?",
        answer:
          "Sim! O consórcio imobiliário permite adquirir seu imóvel com parcelas acessíveis, sem juros e com planejamento. É uma forma inteligente de comprar sem pagar altas taxas bancárias.",
      },
      {
        question: "Qual a vantagem do consórcio em vez do financiamento?",
        answer:
          "A principal vantagem do consórcio é a ausência de juros. As parcelas são atualizadas apenas pelo índice de inflação, o que gera uma economia significativa a longo prazo.",
      },
      {
        question: "É possível usar o consórcio para quitar dívidas?",
        answer:
          "Sim. Existem consórcios específicos para capital de giro ou troca de dívidas, com taxas menores do que as praticadas por bancos. É uma solução viável para reorganizar suas finanças.",
      },
      {
        question: "Como funciona a contemplação no consórcio?",
        answer:
          "Você pode ser contemplado por sorteio ou lance. A GMD orienta qual estratégia é melhor para você atingir seu objetivo mais rápido, seja para comprar, investir ou quitar um bem.",
      },
    ],
  },
];

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState("Seguros");
  const [openIndex, setOpenIndex] = useState(0);

  const currentCategory = testimonial.find(
    (item) => item.category === activeCategory
  );

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? 0 : index);
  };

  return (
    <section className="flex flex-col text-center bg-black/5">
      <h2 className="text-orange">Dúvidas frequentes</h2>
      <h4>Respostas rápidas sobre seguros, planos e consórcios</h4>
      <div className="space-x-2 my-6 md:my-8">
        {testimonial.map((item) => (
          <button
            key={item.category}
            onClick={() => setActiveCategory(item.category)}
            className={
              item.category === activeCategory
                ? "bg-blue text-white"
                : "border border-orange"
            }
          >
            {item.category}
          </button>
        ))}
      </div>
      <div className="text-left space-y-2">
        {currentCategory?.items.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full flex justify-between items-center rounded-2xl bg-blue text-white"
            >
              {faq.question}
              {openIndex === index ? (
                <Image
                  alt="Ícone de FAQ recolhida"
                  src={"/icons/chevron-down.svg"}
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  alt="Ícone de FAQ expandida"
                  src={"/icons/chevron-up.svg"}
                  width={24}
                  height={24}
                />
              )}
            </button>
            {openIndex === index && (
              <div className="p-1 text-dark">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
