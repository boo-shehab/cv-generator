import { defineStore } from 'pinia';
import * as Yup from 'yup';

export const useFormStore = defineStore('form', {
  state: () => ({
    formData: {
      name: '',
      email: '',
      // Add other fields as needed
    },
    validationSchemas: [
      // Step 1 Validation
      Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
      }),
      // Add more schemas for other steps
    ],
  }),
  actions: {
    saveStepData(data) {
      this.formData = { ...this.formData, ...data };
    },
    async validateCurrentStep(stepIndex) {
      try {
        await this.validationSchemas[stepIndex].validate(this.formData, { abortEarly: false });
        return true;
      } catch (errors) {
        console.error("Validation failed:", errors);
        return false;
      }
    },
  },
});
