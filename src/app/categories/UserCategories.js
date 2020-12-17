admin = ["username", "password", "authorization"];

employee = ["employee_id", "employee_type"];

billingInfo = [
  "billing_address",
  "billing_address_2",
  "billing_city",
  "billing_state",
  "billing_zip",
];

personalInfo = [
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

healthInsInfo = [
  "health_insurance_provider",
  "health_insurance_policy_number",
  "health_insurance_id",
];

emergencyCont = [
  "emergency_contact_name",
  "emergency_contact_relationship",
  "emergency_contact_phone",
];

allCategories = this.emergencyCont.concat(
  this.healthInsInfo,
  this.personalInfo,
  this.billingInfo,
  this.employee
);
