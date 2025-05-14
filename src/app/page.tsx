"use client";

import { useState } from "react";

const forms = [
  "Contato Rápido",
  "Cotação Seguro",
  "Plano de Saúde",
  "Consórcio",
];

export default function Home() {
  const [currentForm, setCurrentForm] = useState(forms[0]);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Enviando...");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, tipo: currentForm }),
    });

    setStatus(response.ok ? "Enviado com sucesso!" : "Erro ao enviar.");
    if (response.ok) e.currentTarget.reset();
  };

  const InputField = ({
    name,
    label,
    type = "text",
  }: {
    name: string;
    label: string;
    type?: string;
  }) => (
    <div className="mb-3">
      <label className="block font-medium">{label}</label>
      <input
        type={type}
        name={name}
        required
        className="w-full border rounded px-3 py-2"
      />
    </div>
  );

  const TextareaField = ({ name, label }: { name: string; label: string }) => (
    <div className="mb-3">
      <label className="block font-medium">{label}</label>
      <textarea
        name={name}
        required
        className="w-full border rounded px-3 py-2"
      />
    </div>
  );

  const SelectField = ({
    name,
    label,
    options,
  }: {
    name: string;
    label: string;
    options: string[];
  }) => (
    <div className="mb-3">
      <label className="block font-medium">{label}</label>
      <select name={name} required className="w-full border rounded px-3 py-2">
        <option value="">Selecione</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );

  const renderFormFields = () => {
    switch (currentForm) {
      case "Contato Rápido":
        return (
          <>
            <InputField name="nome_completo" label="Nome Completo" />
            <InputField name="telefone" label="Telefone / WhatsApp" />
            <InputField name="email" label="E-mail" type="email" />
            <SelectField
              name="servico"
              label="Qual serviço você precisa?"
              options={["Seguro", "Plano de Saúde", "Consórcio"]}
            />
            <TextareaField name="mensagem" label="Mensagem" />
          </>
        );
      case "Cotação Seguro":
        return (
          <>
            <InputField name="nome" label="Nome" />
            <InputField name="cpf_cnpj" label="CPF / CNPJ" />
            <InputField name="telefone" label="Telefone / WhatsApp" />
            <InputField name="email" label="E-mail" type="email" />
            <SelectField
              name="tipo_seguro"
              label="Tipo de Seguro"
              options={[
                "Vida",
                "Auto",
                "Residencial",
                "Empresarial",
                "RC",
                "Engenharia",
                "Garantia",
                "Fiança",
              ]}
            />
            <TextareaField name="resumo" label="Resumo da necessidade" />
          </>
        );
      case "Plano de Saúde":
        return (
          <>
            <InputField name="responsavel" label="Nome do Responsável" />
            <InputField name="empresa" label="Empresa (opcional)" />
            <InputField name="telefone" label="Telefone / WhatsApp" />
            <InputField name="email" label="E-mail" type="email" />
            <SelectField
              name="tipo_plano"
              label="Tipo de Plano"
              options={["Empresarial", "Familiar", "Individual"]}
            />
            <InputField
              name="numero_vidas"
              label="Número de vidas"
              type="number"
            />
            <TextareaField name="idades" label="Idades dos beneficiários" />
            <TextareaField
              name="mensagem_adicional"
              label="Mensagem adicional"
            />
          </>
        );
      case "Consórcio":
        return (
          <>
            <InputField name="nome_completo" label="Nome completo" />
            <InputField name="telefone" label="Telefone com WhatsApp" />
            <InputField name="email" label="E-mail" type="email" />
            <InputField
              name="valor_aproximado"
              label="Valor aproximado do bem ou objetivo"
            />
            <InputField name="cidade_estado" label="Cidade e Estado" />
            <TextareaField name="observacoes" label="Observações adicionais" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Formulários</h1>
      <div className="flex space-x-2 mb-6">
        {forms.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => {
              setCurrentForm(f);
              setStatus("");
            }}
            className={`px-3 py-1 border rounded ${
              f === currentForm ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        {renderFormFields()}
        <button
          type="submit"
          className="w-full py-2 mt-4 bg-green-600 text-white rounded"
        >
          Enviar mensagem
        </button>
        {status && <p className="mt-2">{status}</p>}
      </form>
    </div>
  );
}
