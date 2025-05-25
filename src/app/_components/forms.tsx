"use client";

import { useState } from "react";

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

export default function Forms({ label }: FormProps) {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Enviando...");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, tipo: label }),
    });

    setStatus(response.ok ? "Enviado com sucesso!" : "Erro ao enviar.");
    if (response.ok) e.currentTarget.reset();
  };

  const FormInput = (props: FormProps) => (
    <input
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      className={`h-10 md:h-12 ${props.formClass}`}
      required={props.required}
    />
  );

  const FormTextArea = (props: FormProps) => (
    <textarea
      name={props.name}
      placeholder={props.placeholder}
      className={`h-20 pt-2 ${props.formClass}`}
      required
    />
  );

  const FormSelect = (props: OptionsProps) => (
    <select
      aria-label={props.name}
      name={props.name}
      className={`h-10 md:h-12 ${props.formClass}`}
      required
    >
      <option disabled hidden>
        {label}
      </option>
      {props.options.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );

  const FormCheckbox = (props: OptionsProps) => (
    <fieldset className={`text-left px-2 ${props.formClass}`}>
      <legend className="font-semibold my-2">{label}</legend>
      <div className="flex items-center flex-wrap gap-2">
        {props.options.map((option, index) => (
          <label key={index}>
            <input
              name={props.name}
              value={option}
              type="checkbox"
              className="accent-orange rounded-none px-0"
              required
            />
            <span className="ml-1">{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );

  const FormButton = (props: FormProps) => (
    <button type="submit" className={`text-white bg-orange ${props.formClass}`}>
      {props.label}
    </button>
  );

  const renderFormFields = () => {
    switch (label) {
      case "Seguros":
        return (
          <>
            <FormInput
              name="nome"
              placeholder="Nome Completo"
              type="text"
              formClass="col-span-9"
            />
            <FormInput
              name="email"
              placeholder="Email"
              type="email"
              formClass="col-span-9"
            />
            <FormInput
              name="registro"
              placeholder="CPF/CNPJ"
              type="text"
              formClass="col-span-9 md:col-span-4 xl:col-span-9"
            />
            <FormInput
              name="telefone"
              placeholder="Telefone/WhatsApp"
              type="tel"
              formClass="col-span-9 md:col-span-5 xl:col-span-9"
            />
            <FormSelect
              name="seguros"
              label="Tipo de Seguro"
              formClass="col-span-9"
              options={[
                "Vida",
                "Auto",
                "Residencial",
                "RC",
                "Engenharia",
                "Garantia",
                "Fiança",
              ]}
            />
            <FormButton
              formClass="col-span-9 md:col-span-4"
              label="Solicitar Cotação"
            />
            {status && <p className="col-span-9 md:col-span-5">{status}</p>}
          </>
        );
      case "Saúde":
        return (
          <>
            <FormInput
              name="nome"
              placeholder="Nome do Responsável"
              type="text"
              formClass="col-span-9 md:col-span-5 xl:col-span-9"
            />
            <FormInput
              name="email"
              placeholder="Email"
              type="email"
              formClass="col-span-9 md:col-span-4 xl:col-span-9"
            />
            <FormInput
              name="empresa"
              placeholder="Empresa (opcional)"
              type="text"
              formClass="col-span-9 md:col-span-3 xl:col-span-5"
              required={false}
            />
            <FormInput
              name="telefone"
              placeholder="Telefone/WhatsApp"
              type="tel"
              formClass="col-span-9 md:col-span-3 xl:col-span-4"
            />
            <FormSelect
              name="plano"
              label="Tipo de Plano"
              formClass="col-span-9 md:col-span-3"
              options={["Empresarial", "Familiar", "Individual"]}
            />
            <FormInput
              name="dependentes"
              placeholder="Dependentes"
              type="number"
              formClass="col-span-9 md:col-span-6 xl:col-span-3"
            />
            <FormSelect
              name="idades"
              label="Idades Dependentes"
              formClass="col-span-9 md:col-span-3"
              options={[
                "0–5 anos",
                "6–17 anos",
                "18–25 anos",
                "26–35 anos",
                "36–45 anos",
                "46–60 anos",
                "60+ anos",
              ]}
            />
            <FormTextArea
              name="mensagem"
              placeholder="Descreva aqui se deseja plano com coparticipação, rede específica ou outro"
              formClass="col-span-9"
            />
            <FormButton
              label="Enviar solicitação de plano de saúde"
              formClass="col-span-9 md:col-span-4 xl:col-span-6"
            />
            {status && (
              <p className="col-span-9 md:col-span-2 lg:col-span-2 xl:col-span-3">
                {status}
              </p>
            )}
          </>
        );
      case "Consórcio":
        return (
          <>
            <FormInput
              name="nome"
              placeholder="Nome do Responsável"
              type="text"
              formClass="col-span-9 md:col-span-4 xl:col-span-9"
            />
            <FormInput
              name="email"
              placeholder="Email"
              type="email"
              formClass="col-span-9 md:col-span-5"
            />
            <FormInput
              name="telefone"
              placeholder="Telefone/WhatsApp"
              type="tel"
              formClass="col-span-9 md:col-span-3 xl:col-span-4"
            />
            <FormInput
              name="cidade"
              placeholder="Cidade/Estado"
              type="text"
              formClass="col-span-9 md:col-span-3 xl:col-span-5"
            />
            <FormInput
              name="valor"
              placeholder="Valor do Bem"
              type="text"
              formClass="col-span-9 md:col-span-3 xl:col-span-4"
            />
            <FormCheckbox
              name="consorcio"
              label="Tipo de Consórcio"
              formClass="col-span-9"
              options={[
                "Imóvel residencial",
                "Alavancagem patrimonial",
                "Capital de giro",
                "Pesados (ônibus ou caminhões)",
                "Imóvel comercial",
                "Veículo (carro ou moto)",
                "Troca de dívidas por taxa menor",
              ]}
            />
            <FormTextArea
              name="mensagem"
              placeholder="Mensagem adicional"
              formClass="col-span-9"
            />
            <FormButton
              label="Simular Consórcio"
              formClass="col-span-9 md:col-span-2 xl:col-span-3"
            />
            {status && (
              <p className="col-span-9 md:col-span-2 xl:col-span-3">{status}</p>
            )}
          </>
        );
      case "Rodapé":
        return (
          <>
            <FormInput
              name="nome"
              placeholder="Nome Completo"
              type="text"
              formClass="col-span-9"
            />
            <FormInput
              name="email"
              placeholder="Email"
              type="email"
              formClass="col-span-9"
            />
            <FormInput
              name="telefone"
              placeholder="Telefone/WhatsApp"
              type="tel"
              formClass="col-span-9 md:col-span-4"
            />
            <FormSelect
              name="servico"
              label="Tipo de Seguro"
              formClass="col-span-9 md:col-span-5"
              options={["Seguro", "Plano de Saúde", "Consórcio"]}
            />
            <FormTextArea
              name="mensagem"
              placeholder="Escreva aqui sua dúvida, necessidade ou solicitação"
              formClass="col-span-9"
            />
            <FormButton label="Enviar Mensagem" formClass="col-span-4" />
            {status && <p className="col-span-5">Enviado com sucesso!</p>}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form
      className="grid grid-cols-9 items-center gap-2"
      onSubmit={handleSubmit}
    >
      {renderFormFields()}
    </form>
  );
}
