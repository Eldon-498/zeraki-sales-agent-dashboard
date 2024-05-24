export interface School {
  id: number;
  name: string;
  type: "Primary" | "Secondary" |" IGCSE",
  county: string;
  registrationDate: string;
  contact: string;
  productName: 'Zeraki Analytics' | 'Zeraki Finance' | 'Zeraki Timetable';
}
