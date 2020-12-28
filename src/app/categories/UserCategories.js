export const admin = ["username", "password", "authorization"];

export const employee = ["employee_id", "employee_type"];

export const billingInfo = [
  "billing_address",
  "billing_address_2",
  "billing_city",
  "billing_state",
  "billing_zip",
];

export const personalInfo = [
  "first_name",
  "last_name",
  "street_address",
  "street_address_2",
  "city",
  "state",
  "zip",
  "home_phone",
  "cell_phone",
  "email",
];

export const healthInsInfo = [
  "health_insurance_provider",
  "health_insurance_policy_number",
  "health_insurance_id",
];

export const emergencyCont = [
  "emergency_contact_name",
  "emergency_contact_relationship",
  "emergency_contact_phone",
];


export const allCategories = emergencyCont.concat(
  healthInsInfo,
  personalInfo,
  billingInfo,
  employee
);
