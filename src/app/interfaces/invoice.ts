export interface Invoice {
  id: string;
  schoolId: number;
  item: 'Zeraki Analytics' | 'Zeraki Finance' | 'Zeraki Timetable';
  creationDate: string;
  dueDate: string;
  amount: number;
  paidAmount: number;
  balance: number;
  status: 'Valid' | 'Pending';
}
