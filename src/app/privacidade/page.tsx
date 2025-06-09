export const metadata = {
  title: "Política de Privacidade | GMD Corretora",
  description: "Saiba como seus dados são tratados ao acessar nosso site.",
};

export default function PoliticaPrivacidadePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-blue mb-6 mt-auto">Política de Privacidade</h1>

        <p className="my-4">
          A sua privacidade é importante para nós. É política da GMD Corretora respeitar a sua
          privacidade em relação a qualquer informação sua que possamos coletar em nosso site, bem
          como em outros sites que possuímos e operamos.
        </p>

        <p className="my-4">
          Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe
          fornecer um serviço. Fazemos isso por meios justos e legais, com o seu conhecimento e
          consentimento. Também informamos por que estamos coletando e como essas informações serão
          utilizadas.
        </p>

        <p className="my-4">
          Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço
          solicitado. Quando armazenamos dados, protegemos esses dados por meios comercialmente
          aceitáveis para evitar perdas, roubos, bem como acesso, divulgação, cópia, uso ou
          modificação não autorizados.
        </p>

        <p className="my-4">
          Não compartilhamos informações de identificação pessoal publicamente ou com terceiros,
          exceto quando exigido por lei.
        </p>

        <p className="my-4">
          Nosso site pode conter links para sites externos que não são operados por nós. Esteja
          ciente de que não temos controle sobre o conteúdo e as práticas desses sites, e não
          podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
        </p>

        <p className="my-4">
          Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que
          talvez não possamos fornecer alguns dos serviços desejados.
        </p>

        <p className="my-4">
          O uso continuado de nosso site será considerado como aceitação de nossas práticas em
          relação à privacidade e às informações pessoais. Se você tiver alguma dúvida sobre como
          lidamos com dados de usuários e informações pessoais, entre em contato conosco.
        </p>

        <h2 className="text-xl font-semibold text-blue mt-6 mb-2">
          Uso do Meta Pixel (Facebook Pixel)
        </h2>
        <p className="my-4">
          Utilizamos o Meta Pixel, ferramenta da Meta (Facebook), para monitorar conversões e o
          comportamento dos usuários após interações com anúncios. Isso nos ajuda a medir a eficácia
          de nossas campanhas publicitárias e otimizar a experiência do usuário.
        </p>
        <p className="my-4">
          O Meta Pixel coleta dados anonimizados, como páginas visitadas e interações realizadas,
          que podem ser combinados com informações do Facebook, conforme a política de privacidade
          da Meta. Nenhuma informação pessoal identificável é compartilhada diretamente conosco.
        </p>

        <h2 className="text-xl font-semibold text-blue mt-6 mb-2">Google Tag Manager</h2>
        <p className="my-4">
          Este site utiliza o Google Tag Manager (GTM), uma ferramenta que facilita a implementação
          de scripts de terceiros, como Google Analytics e Meta Pixel. O GTM em si não coleta dados
          pessoais, mas pode ativar tags que fazem isso.
        </p>

        <h2 className="text-xl font-semibold text-blue mt-6 mb-2">Uso do Google AdSense</h2>

        <p className="my-4">
          O serviço Google AdSense, que utilizamos para veicular publicidade, usa o cookie
          DoubleClick para exibir anúncios mais relevantes em toda a Web e limitar o número de vezes
          que um mesmo anúncio é mostrado para você.
        </p>

        <p className="my-4">
          Utilizamos anúncios para ajudar a cobrir os custos de funcionamento deste site e financiar
          futuros desenvolvimentos. Os cookies de publicidade comportamental utilizados neste site
          foram projetados para garantir que você receba anúncios mais relevantes sempre que
          possível, rastreando anonimamente seus interesses e exibindo conteúdos semelhantes ao que
          pode ser do seu interesse.
        </p>

        <p className="my-4">
          Vários parceiros anunciam em nosso nome, e os cookies de rastreamento de afiliados
          simplesmente nos permitem verificar se nossos clientes acessaram o site por meio de um dos
          sites parceiros, para que possamos creditá-los corretamente e, quando aplicável, permitir
          que esses parceiros ofereçam promoções que possam beneficiar você em uma eventual compra.
        </p>

        <h2 className="text-xl font-semibold text-blue mt-6 mb-2">Compromisso do Usuário</h2>

        <ul className="list-[upper-alpha] list-inside my-4 space-y-2">
          <li>Não se envolver em atividades ilegais ou contrárias à boa-fé e à ordem pública;</li>
          <li>
            Não divulgar propaganda ou conteúdo de natureza racista, xenofóbica, jogos de azar,
            pornografia ilegal, apologia ao terrorismo ou qualquer conteúdo que viole os direitos
            humanos;
          </li>
          <li>
            Não causar danos aos sistemas físicos (hardware) e lógicos (software) do Colégio Arcanjo
            Gabriel, de seus fornecedores ou de terceiros, nem introduzir ou disseminar vírus ou
            quaisquer outros sistemas maliciosos capazes de causar os danos mencionados.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-blue mt-6 mb-2">Mais Informações</h2>

        <p className="mt-4">
          Esperamos que estas informações estejam claras. Como mencionado anteriormente, se houver
          algo que você não tem certeza se precisa ou não, geralmente é mais seguro manter os
          cookies ativados, caso utilize algum recurso oferecido em nosso site.
        </p>
      </div>
    </main>
  );
}
