export type laudoDataType = {
  number: string;
  title: string;
  description: string;
}[];

export const laudoData = [
  {
    number: "1",
    title: "Anamnese",
    description:
      "Consulte a anamnese coletada no app da técnica diretamente pela estação de trabalho.",
  },
  {
    number: "2",
    title: "Marcação e descrição de achados",
    description:
      "Marque os achados nas imagens durante a varredura nas imagens. A caracterização segue o léxico da 5a edição do BI-RADS.",
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
      "As anomalias detectadas pelos algoritmos de IA podem ser exibidas ou ocultadas a qualquer momento. Os modelos focam na precisão, diminuindo o número de falsos positivos a serem avaliados.",
  },
  {
    number: "5",
    title: "Laudo estruturado de verdade!",
    description:
      "O laudo estruturado conecta imagem e texto. Um pré-laudo é gerado automaticamente enquanto as marcações são realizadas.",
  },
];
