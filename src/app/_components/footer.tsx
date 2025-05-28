import Image from "next/image";
import Link from "next/link";
import Forms from "./forms";

const contact = [
  {
    icon: "whatsapp-fill",
    title: "WhatsApp: (15) 98137-7486",
    url: "https://api.whatsapp.com/send?phone=5515981377486",
  },
  {
    icon: "whatsapp-fill",
    title: "Telefone: (15) 3100-3979",
    url: "tel:+551531003979",
  },
  {
    icon: "mail",
    title: "E-mail: corretora@gmdbus.com.br",
    url: "mailto:corretora@gmdbus.com.br",
  },
  {
    icon: "local",
    title: "Rua Dorli Nunes, 25, Bairro Caputera, Sorocaba/SP, 18017-376",
    url: "https://www.google.com/maps/dir//GMD+Bus+%7C+GMD+Corretora+-+Rua+Dorli+Nunes+25,+Rod.+Raposo+Tavares,+km+95+-+Caputera,+Sorocaba+-+SP,+18017-376/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94cf619faeedfa6d:0x7816b5bb13f39c75?sa=X&ved=1t:57443&ictx=111",
  },
  {
    icon: "instagram",
    title: "Instagram: @gmd_corretora",
    url: "https://www.instagram.com/gmd_corretora",
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col px-4 md:px-16 lg:px-24 xl:px-32 bg-black/5">
      <div className="z-1 rounded-2xl p-4 md:p-8 md:flex md:flex-row-reverse md:gap-8 border border-black/25 bg-white">
        <div className="md:w-[50%]">
          <h2 className="text-orange">Fale Conosco</h2>
          <p>
            De norte a sul do país, a GMD Corretora está pronta para te atender
            com soluções sob medida. Não importa onde você esteja — nossa
            consultoria chega até você com eficiência, clareza e cuidado.
          </p>
          <div className="my-4 space-y-2">
            {contact.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image
                  alt={item.icon}
                  src={`/icons/${item.icon}.svg`}
                  width={24}
                  height={24}
                />
                <Link className="p-0" target="_blank" href={item.url}>
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-[50%]">
          <Forms label="Rodapé" />
        </div>
      </div>
      <div className="z-0 flex flex-col items-center -mt-16 -mx-4 md:-mx-16 lg:-mx-24 xl:-mx-32 pb-3 md:pb-6 pt-20 bg-blue text-white">
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
        <p>© 2025 GMD Corretora. Todos os direitos reservados.</p>
        <p>Desenvolvido por Raphael</p>
      </div>
    </footer>
  );
}
