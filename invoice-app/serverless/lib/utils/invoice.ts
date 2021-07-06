import { EPaymentTerms } from "../../../types/server";
import { ProjectItemInput, ProjectItemUpdateInput } from "../graphql/input";

export function isValidDate(date: string) {
  return (
    !/\d{4}-\d{2}-\d{2}/.test(date) || /invalid/i.test(new Date("x").toString())
  );
}

/**
 *  Returns the computed amount from quantity and unitPrice of each of the items or undefined if
 *  items is undefined or empty array
 *
 * @param {ProjectItemInput[] | undefined} items
 * @return {number} undefined if items is undefined/empty array, otherwise the proper amount
 */
export function calculateAmountFromProjectItems<
  T = ProjectItemInput | ProjectItemUpdateInput,
>(items: T[] | undefined): number | undefined {
  if (items && items.length > 0) {
    return items.reduce(
      (accumulator: number, current: any) =>
        accumulator + current.quantity * current.unitPrice,
      0,
    );
  }

  return undefined;
}

export function calculateDueDateFromProjectTerms(
  invoiceDate: string,
  paymentTerms: EPaymentTerms,
) {
  // this is inaccurate and some library like luxon should be used for date time manipulation
  const currentDateMillis = new Date(invoiceDate).getTime();
  const offsetDays =
    paymentTerms === EPaymentTerms.NET_30_DAYS
      ? 30
      : paymentTerms === EPaymentTerms.NET_6_MONTHS
      ? 6 * 30
      : 12 * 30;
  const offsetMillis = offsetDays * 24 * 3600 * 1000;
  return new Date(currentDateMillis + offsetMillis).toISOString().split("T")[0];
}
