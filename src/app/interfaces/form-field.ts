export interface FormField {
  name: string;
  label: string;
  type?: string;
  value?: any;
  options?: any[];
  validators: any[];
}
