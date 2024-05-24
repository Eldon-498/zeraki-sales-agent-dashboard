export interface Invoice {
  id: string;
  schoolId: number;
  item: string;
  creationDate: string;
  dueDate: string;
  amount: number;
  paidAmount: number;
  balance: number;
  status: string;
}
