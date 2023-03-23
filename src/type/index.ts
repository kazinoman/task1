export interface IColumn {
  id: number;
  name: string;
  personInfo: IPerson[];
}

export interface IPerson {
  id: number;
  pname: string;
  description: String;
  date: string;
  fileCount: number;
  messageCount: number;
  unknownNumber: number;
  image: IImage[];
}

export interface IImage {
  image: string;
}

export interface IReactNode {
  children: React.ReactNode;
  className?: string;
}
