import { title } from "process";

export interface JobPost {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  salary: string;
  skills: string[];
  link: string;
  jobType: string;
  jobCategory: string;
}


