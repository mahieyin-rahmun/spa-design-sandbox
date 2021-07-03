import * as Yup from "yup";

const requiredMessage = "This is a required field";
const requiredLengthMessage = (length: number, isMaximum?: boolean) =>
  `This field must be ${
    !isMaximum ? "at least" : "a maximum of"
  } ${length} characters long`;
const cannotBeNegativeMsg = "Cannot be negative";

const validationSchema = Yup.object().shape({
  from: Yup.object().shape({
    city: Yup.string().required(requiredMessage),
    country: Yup.string().required(requiredMessage),
    postalCode: Yup.string().required(requiredMessage),
    streetAddress: Yup.string().required(requiredMessage),
  }),
  to: Yup.object().shape({
    city: Yup.string().required(requiredMessage),
    country: Yup.string().required(requiredMessage),
    postalCode: Yup.string().required(requiredMessage),
    streetAddress: Yup.string().required(requiredMessage),
  }),
  clientEmail: Yup.string().email().required(requiredMessage),
  clientName: Yup.string()
    .min(6, requiredLengthMessage(6))
    .required(requiredMessage),
  invoiceDate: Yup.string().test({
    name: "check if it is a date",
    test: (value) => {
      if (!value) {
        return false;
      }
      return new Date(value).toString() !== "Invalid Date";
    },
  }),
  paymentTerms: Yup.string().required(),
  projectDescription: Yup.string()
    .required()
    .min(20, requiredLengthMessage(20)),
  items: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required().min(3, requiredLengthMessage(3)),
        quantity: Yup.number().required().min(1, cannotBeNegativeMsg),
        unitPrice: Yup.number().required().min(0, cannotBeNegativeMsg),
      }),
    )
    .min(1),
});

export default validationSchema;
