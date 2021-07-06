import { Dispatch, SetStateAction } from "react";
import { IInvoicePreview } from "./server";

export type TInvoiceProps = {
  invoiceData: Required<IInvoicePreview>;
};

export type TInvoiceFormProps = {
  setIsFormDrawerOpen?: Dispatch<SetStateAction<boolean>>;
  invoiceData?: IInvoicePreview;
};

export namespace TInvoiceFormInputTypes {
  export type TAddress = Record<
    "streetAddress" | "city" | "postalCode" | "country",
    string
  >;

  export enum EPaymentTerms {
    NET_30_DAYS,
    NET_6_MONTHS,
    NET_1_YEAR,
  }

  export type TProjectItems = {
    name: string;
    quantity: number;
    unitPrice: number;
  };

  export type TInvoiceFormModel = {
    from: TAddress;
    to: TAddress;
    clientName: string;
    clientEmail: string;
    invoiceDate: string;
    paymentTerms: EPaymentTerms;
    projectDescription: string;
    items: TProjectItems[];
  };
}
