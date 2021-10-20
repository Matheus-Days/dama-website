export type SummaryDataType = {
  number: string;
  title: string;
  description: string;
}[];

export const summaryData = [
  {
    number: "1",
    title: "Anamnese",
    description:
      "Consulte a anamnese coletada no app da técnica diretamente pela estação de trabalho",
  },
  {
    number: "2",
    title: "Marcação e descrição de achados",
    description:
      "Marque os achados nas imagens durante a varredura. O laudo estruturado é automaticamente preenchido a partir de modelos baseados na 5a edição do BI-RADS.",
  },
  {
    number: "3",
    title: "Exames anteriores",
    description:
      "Visualize os exames anteriores da paciente. Temos hanging protocols que facilitam a comparação das imagens. Caso uma anotação não tenha sido percebida numa primeira leitura, é simples adicioná-la.",
  },
  {
    number: "4",
    title: " IA como segunda opinião",
    description:
      "As anomalias detectadas pelos algoritmos de IA podem ser exibidas ou ocultadas a qualquer momento. Os modelos focam na precisão, diminuindo o número de falsos positivos a serem avaliados",
  },
  {
    number: "5",
    title: "Laudo estruturado de verdade!",
    description:
      "O laudo estruturado de DAMA conecta imagem e texto. As modificações realizadas em um repercutem no outro automaticamente.",
  },
  {
    number: "6",
    title: "Laudo estruturado não precisa ser engessado",
    description:
      "Os modelos de laudo disponibilizados descrevem os achados preconizados no léxico do BI-RADS. Mesmo assim, é possível adicionar, modificar ou remover porções do texto sem perder a conexão com a imagem",
  },
];
