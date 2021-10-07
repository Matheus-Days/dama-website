export type SummaryDataType = {
  number: string;
  title: string;
  description: string;
  videoPosition: number;
}[];

export const summaryData = [
  {
    number: "1",
    title: "Lorem Ipsum",
    description: "Colocar aqui texto descritivo da etapa 1",
    videoPosition: 0,
  },
  {
    number: "2",
    title: "Lorem Ipsum",
    description: "Colocar aqui texto descritivo da etapa 2",
    videoPosition: 5,
  },
  {
    number: "3",
    title: "Lorem Ipsum",
    description: "Colocar aqui texto descritivo da etapa 3",
    videoPosition: 10,
  },
  {
    number: "4",
    title: "Lorem Ipsum",
    description: "Colocar aqui texto descritivo da etapa 4",
    videoPosition: 15,
  },
  {
    number: "5",
    title: "Lorem Ipsum",
    description: "Colocar aqui texto descritivo da etapa 3",
    videoPosition: 20,
  },
] as SummaryDataType;
