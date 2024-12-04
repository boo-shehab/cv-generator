<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { ref, computed } from 'vue';

const currentStep = ref(0);

// Define the validation schemas for each step
const schemas = [
  yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required').email('Invalid email format'),
  }),
  yup.object({
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    confirmPassword: yup
      .string()
      .required('Confirmation password is required')
      .oneOf([yup.ref('password')], 'Passwords must match'),
  }),
  yup.object({
    address: yup.string().required('Address is required'),
    postalCode: yup
      .string()
      .required('Postal code is required')
      .matches(/^[0-9]+$/, 'Postal code must be numeric'),
  }),
  yup.object({
    terms: yup.bool().required().equals([true], 'You must accept the terms and conditions'),
  }),
];

const currentSchema = computed(() => schemas[currentStep.value]);

function nextStep(values) {
  if (currentStep.value === 3) {
    console.log('Form submitted: ', JSON.stringify(values, null, 2));
    return;
  }

  currentStep.value++;
}

function prevStep() {
  if (currentStep.value <= 0) return;
  currentStep.value--;
}
</script>

<template>
  <Form @submit="nextStep" :validation-schema="currentSchema" keep-values v-slot="{ values }">
    <template v-if="currentStep === 0">
      <label for="name">Name</label>
      <Field name="name" id="name" />
      <ErrorMessage name="name" />

      <label for="email">Email</label>
      <Field name="email" id="email" type="email" />
      <ErrorMessage name="email" />
    </template>

    <template v-if="currentStep === 1">
      <label for="password">Password</label>
      <Field name="password" type="password" id="password" />
      <ErrorMessage name="password" />

      <label for="confirmPassword">Confirm Password</label>
      <Field name="confirmPassword" type="password" id="confirmPassword" />
      <ErrorMessage name="confirmPassword" />
    </template>

    <template v-if="currentStep === 2">
      <label for="address">Address</label>
      <Field as="textarea" name="address" id="address" />
      <ErrorMessage name="address" />

      <label for="postalCode">Postal Code</label>
      <Field name="postalCode" id="postalCode" />
      <ErrorMessage name="postalCode" />
    </template>

    <template v-if="currentStep === 3">
      <label for="terms">Agree to terms and conditions</label>
      <Field name="terms" type="checkbox" id="terms" :value="true" />
      <ErrorMessage name="terms" />
    </template>

    <button v-if="currentStep !== 0" type="button" @click="prevStep">Previous</button>
    <button v-if="currentStep !== 3" type="submit">Next</button>
    <button v-if="currentStep === 3" type="submit">Finish</button>
  </Form>
</template>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  max-width: 500px;
  padding-bottom: 100px;
}

input {
  display: block;
}

span {
  display: block;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-top: 20px;
}

button {
  display: block;
  margin-top: 10px;
}

button[type='submit'] {
  margin-top: 10px;
}

form {
  padding: 20px;
  border: 1px solid black;
}

p {
  font-size: 14px;
}
</style>
