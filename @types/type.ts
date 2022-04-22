export interface IJob {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirement: Requirements;
  role: Requirements;
}

export interface Requirements {
  content: string;
  items: Item[];
}
export interface Item {
  item: string;
}

export interface IJobProps {
  bg: string;
}
