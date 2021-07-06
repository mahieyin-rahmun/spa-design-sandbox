import { NextApiRequest } from "next";
import { Connection } from "typeorm";

export enum EInvoiceStatus {
  PAID,
  PENDING,
  DRAFT,
}

export interface IAddress {
  id: number;
  streetAddress: string;
  city: string;
  postalCode: string;
  country: string;
}

export enum EPaymentTerms {
  NET_30_DAYS,
  NET_6_MONTHS,
  NET_1_YEAR,
}

export interface IProjectItem {
  id: number;
  name: string;
  quantity: number;
  unitPrice: number;
}
export interface IInvoice {
  id: number;
  clientName: string;
  clientEmail: string;
  invoiceDate: string;
  dueDate: string;
  projectDescription: string;

  from: IAddress;
  to: IAddress;

  paymentTerm: EPaymentTerms;

  items: IProjectItem[];
  amount: number;

  status: EInvoiceStatus;
}

export interface IInvoicePreview
  extends Pick<IInvoice, "id" | "amount" | "clientName" | "status"> {
  dueDate: Date;
}

export interface IGraphqlContext {
  req: NextApiRequest;
  databaseConnection: Connection;
}
