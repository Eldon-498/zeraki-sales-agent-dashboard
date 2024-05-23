export interface Collection {
  id: number;
  invoiceId: number;
  amount: number;
  date: string;
  status: 'Valid' | 'Bounced';
}
