export enum EInvoiceStatus {
  PAID,
  PENDING,
  DRAFT,
}

export interface IInvoice {
  id: string;
  dueDate: Date;
  amount: number;
  clientName: string;
  status: EInvoiceStatus;
}
