export default function Primeiro() {
  const raio = 5;
  const pi = 3.14159;
  const titulo = <div> Estuando java script</div>;

   // Função para calcular a área da circunferência 
  function areaCircunferencia(raio: number): number {
    return pi * raio * raio;
  }
  // Função para retornar o ano atual
  function anoAtual() {
    return new Date().getFullYear();
  }
    // Função para gerar uma lista de nomes
  function gerarUmaListaNome() {
    const nomes = ["Ana", "Bia", "Carlos", "Daniel", "Eduardo"];
    return nomes.map((nome) => <li key={nome}>{nome}</li>);
  }
  
  return (
    <div>
      <h1>{titulo}</h1>
      <div className="flex flex-col">
        <span>{1 + 1}</span>
        <span>{Math.random()}</span>
        <span>{anoAtual()}</span>
        <ul>{gerarUmaListaNome()}</ul>
      </div>
      <div>
        <span>Área da circunferência: {areaCircunferencia(raio)}</span>
      </div>
    </div>
  );
}
