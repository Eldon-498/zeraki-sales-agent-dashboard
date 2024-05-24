export interface Collection {
  id: number;
  invoiceNumber: number;
  amount: number;
  date: string;
  collectNUmber: number;
  status: 'Valid' | 'Bounced';
}
