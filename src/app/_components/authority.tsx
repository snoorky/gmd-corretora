const autorithy = [
  {
    title: "12+",
    description: "anos de experiência no mercado",
  },
  {
    title: "1000+",
    description: "vidas protegidas com nossos seguros",
  },
  {
    title: "85+",
    description: "empresas atendidas com consultoria",
  },
  {
    title: "15+",
    description: "parcerias com seguradoras e operadoras",
  },
];

export default function Authority() {
  return (
    <section className="bg-orange">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4">
        {autorithy.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <strong className="text-blue font-bold text-3xl md:text-4xl lg:text-5xl">
              {item.title}
            </strong>
            <p className="text-white">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
