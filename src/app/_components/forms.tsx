"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface FormProps {
  name?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  formClass?: string;
  required?: boolean;
}

interface OptionsProps extends FormProps {
  options: string[];
}

interface AgeRange extends FormProps {
  id: string;
  value?: { faixa: string; quantidade: number }[];
}

const FaixaIdadeSelect = ({ name, label, formClass, value = [] }: AgeRange) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [selecionados, setSelecionados] = useState<Record<string, number>>(() => {
    const map: Record<string, number> = {};
    value.forEach(({ faixa, quantidade }) => { map[faixa] = quantidade });
    return map;
  });

  const faixas = [
    { id: "0-18", label: "0 a 18 anos" },
    { id: "19-23", label: "19 a 23 anos" },
    { id: "24-28", label: "24 a 28 anos" },
    { id: "29-33", label: "29 a 33 anos" },
    { id: "34-38", label: "34 a 38 anos" },
    { id: "39-43", label: "39 a 43 anos" },
    { id: "44-48", label: "44 a 48 anos" },
    { id: "49-53", label: "49 a 53 anos" },
    { id: "54-58", label: "54 a 58 anos" },
    { id: "59+", label: "Acima de 59 anos" },
  ];

  const toggleOpen = () => setOpen((prev) => !prev);

  const handleQuantidadeChange = (faixaId: string, quantidadeStr: string) => {
    const quantidade = Math.max(0, Math.min(99, Number(quantidadeStr) || 0));
    setSelecionados((old) => ({ ...old, [faixaId]: quantidade }));
  };

  const faixasSelecionadas = Object.entries(selecionados).filter(([_, qtd]) => qtd > 0);
  const totalVidas = faixasSelecionadas.reduce((acc, [_, qtd]) => acc + qtd, 0);
  const resumo = faixasSelecionadas.length === 0 ? label : `${faixasSelecionadas.length} faixa(s), ${totalVidas} vida(s)`;

  return (
    <div ref={containerRef} className={`relative ${formClass}`}>
      <button type="button" onClick={toggleOpen}
        className="w-full outline-none text-left border border-black/25 bg-white text-dark placeholder:text-dark"
      >
        {resumo}
        <Image
          src="/icons/select-chevron.svg"
          alt="dropdown icon"
          className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2"
          width={16}
          height={16}
        />
      </button>

      <div
        className={`z-10 absolute grid grid-cols-2 xl:grid-cols-1 gap-1 gap-x-4 w-full mt-1 p-4 rounded-2xl shadow-lg border border-black/25 bg-white text-dark placeholder:text-dark transition-all duration-200 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {faixas.map(({ id, label }) => (
          <div key={id} className="col-span-1 flex justify-between items-center">
            <label htmlFor={`${name}-${id}`} className="select-none">{label}</label>
            <input id={`${name}-${id}`} type="number" placeholder="0"
              value={selecionados[id] ?? ""} onChange={(e) => handleQuantidadeChange(id, e.target.value)}
              className="rounded-xl text-center border border-black/25"
            />
          </div>
        ))}
      </div>

      <input type="hidden" name={name} value={JSON.stringify(faixasSelecionadas.map(([faixa, quantidade]) => ({ faixa, quantidade })))} />
    </div>
  );
};

const FormInput = ({ name, placeholder, type, formClass, required = true }: FormProps) => (
  <input name={name} placeholder={placeholder} type={type} className={`h-10 md:h-12 ${formClass}`} required={required} />
);

const FormTextArea = (props: FormProps) => (
  <textarea name={props.name} placeholder={props.placeholder} className={`h-20 pt-2 resize-none ${props.formClass}`} required />
);

const FormSelect = (props: OptionsProps) => (
  <div className={`${props.formClass} relative`}>
    <select name={props.name} className="h-10 md:h-12 w-full" defaultValue="" required
      style={{ WebkitAppearance: "none", MozAppearance: "none", appearance: "none" }}
    >
      <option value="" disabled hidden>{props.label}</option>
      {props.options.map((item, index) => (
        <option key={index} value={item}>{item}</option>
      ))}
    </select>
    <Image
      src="/icons/select-chevron.svg"
      alt="dropdown icon"
      className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2"
      width={16}
      height={16}
    />
  </div>
);

const FormCheckbox = (props: OptionsProps) => (
  <fieldset className={`text-left px-2 ${props.formClass}`}>
    <legend className="font-semibold my-2">{props.label}</legend>
    <div className="flex items-center flex-wrap gap-2">
      {props.options.map((option, index) => (
        <label key={index}>
          <input name={props.name} value={option} type="checkbox" className="accent-orange rounded-none px-0" />
          <span className="ml-1">{option}</span>
        </label>
      ))}
    </div>
  </fieldset>
);

const FormButton = (props: FormProps) => (
  <button type="submit" className={`text-white bg-orange ${props.formClass}`}>{props.label}</button>
);

export default function Forms({ label }: FormProps) {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (label === "Saude") {
      const idadesJson = formData.get("idades") as string | null;
      let selectedIdades: { faixa: string; quantidade: number }[] = [];

      try {
        selectedIdades = idadesJson ? JSON.parse(idadesJson) : [];
      } catch {
        selectedIdades = [];
      }

      if (selectedIdades.length === 0) {
        setStatus("Seleciona a idade");
        return;
      }
    }

    if (label === "Consorcio") {
      const selecionados = formData.getAll("consorcio");

      if (selecionados.length === 0) {
        setStatus("Selecione um consórcio");
        return;
      }
    }

    const data: Record<string, unknown> = {};
    for (const key of formData.keys()) {
      const valores = formData.getAll(key);
      data[key] = valores.length > 1 ? valores : valores[0];
    }

    setStatus("Enviando...");
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, tipo: label }),
    });

    setStatus(response.ok ? "Enviado com sucesso!" : "Erro ao enviar.");
    if (response.ok) form.reset();
    setTimeout(() => setStatus(""), 3000);
  };

  const renderFormFields = () => {
    switch (label) {
      case "Seguros":
        return (
          <>
            <FormInput name="nome" placeholder="Nome Completo" type="text" formClass="col-span-9" />
            <FormInput name="email" placeholder="Email" type="email" formClass="col-span-9" />
            <FormInput name="telefone" placeholder="Telefone/WhatsApp" type="tel" formClass="col-span-9" />
            <FormSelect name="seguros" label="Tipo de Seguro" formClass="col-span-9"
              options={[
                "Vida",
                "Auto",
                "Residencial",
                "Empresial",
                "Responsabilidade Civil",
                "Engenharia",
                "Garantia",
                "Fiança",
              ]}
            />
            <FormButton formClass="col-span-9 md:col-span-4" label="Solicitar Cotação" />
            {status && <p className="col-span-9 md:col-span-5">{status}</p>}
          </>
        );
      case "Saude":
        return (
          <>
            <FormInput name="nome" placeholder="Nome do Responsável" type="text" formClass="col-span-9 md:col-span-5 xl:col-span-9" />
            <FormInput name="email" placeholder="Email" type="email" formClass="col-span-9 md:col-span-4 xl:col-span-9" />
            <FormInput name="empresa" placeholder="Empresa (opcional)" type="text" formClass="col-span-9 md:col-span-5 xl:col-span-5" required={false} />
            <FormInput name="telefone" placeholder="Telefone/WhatsApp" type="tel" formClass="col-span-9 md:col-span-4 xl:col-span-4" />
            <FormSelect name="plano" label="Tipo de Plano" formClass="col-span-9 md:col-span-3" options={["Empresarial", "Familiar", "Individual"]} />
            <FaixaIdadeSelect id="" name="idades" label="Idades dos beneficiários" formClass="col-span-9 md:col-span-6" />
            <FormTextArea name="mensagem" placeholder="Descreva aqui se deseja plano com coparticipação, rede específica ou outro" formClass="col-span-9" />
            <FormButton label="Enviar solicitação de plano de saúde" formClass="col-span-9 md:col-span-4 xl:col-span-6" />
            {status && (<p className="col-span-9 md:col-span-2 lg:col-span-2 xl:col-span-3">{status}</p>)}
          </>
        );
      case "Consorcio":
        return (
          <>
            <FormInput name="nome" placeholder="Nome do Responsável" type="text" formClass="col-span-9 md:col-span-4 xl:col-span-9" />
            <FormInput name="email" placeholder="Email" type="email" formClass="col-span-9 md:col-span-5" />
            <FormInput name="telefone" placeholder="Telefone/WhatsApp" type="tel" formClass="col-span-9 md:col-span-3 xl:col-span-4" />
            <FormInput name="cidade" placeholder="Cidade/Estado" type="text" formClass="col-span-9 md:col-span-3 xl:col-span-5" />
            <FormInput name="valor" placeholder="Valor do Bem" type="text" formClass="col-span-9 md:col-span-3 xl:col-span-4" />
            <FormCheckbox name="consorcio" label="Tipo de Consórcio" formClass="col-span-9"
              options={[
                "Imóvel residencial",
                "Imóvel comercial",
                "Veículos pesados",
                "Veículos leves",
                "Outros",
              ]}
            />
            <FormTextArea name="mensagem" placeholder="Mensagem adicional" formClass="col-span-9" />
            <FormButton label="Simular Consórcio" formClass="col-span-9 md:col-span-2 xl:col-span-4" />
            {status && <p className="col-span-9 md:col-span-3 xl:col-span-4">{status}</p>}
          </>
        );
      case "Contato":
        return (
          <>
            <FormInput name="nome" placeholder="Nome Completo" type="text" formClass="col-span-9" />
            <FormInput name="email" placeholder="Email" type="email" formClass="col-span-9" />
            <FormInput name="telefone" placeholder="Telefone/WhatsApp" type="tel" formClass="col-span-9 md:col-span-4" />
            <FormSelect name="servico" label="Tipo de Serviço" formClass="col-span-9 md:col-span-5" options={["Seguro", "Plano de Saúde", "Consórcio"]} />
            <FormTextArea name="mensagem" placeholder="Escreva aqui sua dúvida, necessidade ou solicitação" formClass="col-span-9" />
            <FormButton label="Enviar Mensagem" formClass="col-span-4" />
            {status && <p className="col-span-5">{status}</p>}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form id={label} className="grid grid-cols-9 items-center gap-2" onSubmit={handleSubmit}>
      {renderFormFields()}
    </form>
  );
}
