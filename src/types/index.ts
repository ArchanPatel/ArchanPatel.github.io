export type Project = {
  id: string;
  title: string;
  short: string;
  description?: string;
  tags?: string[];
  repo?: string;
  demo?: string;
  image?: string;
  highlighted?: boolean;
};
