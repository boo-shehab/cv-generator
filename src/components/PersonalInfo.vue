<template>
      <Form :validation-schema="validationSchema" @submit="onSubmit">
        <a-row :gutter="[16,16]" justify="center" align="middle">

          <a-col :sm="24" :md="8">
              <span>Name</span>
            <Field name="name">
              <template #default="{ field, errors }">
                <a-form-item :validate-status="errors[0] ? 'error' : 'success'" :help="errors[0]">
                  <a-input v-bind="field" placeholder="Enter your name" />
                </a-form-item>
              </template>
            </Field>
          </a-col>
  
          <a-col :sm="24" :md="8">
            <span>Email</span>
            <Field name="email">
              <template #default="{ field, errors }">
                <a-form-item :validate-status="errors[0] ? 'error' : 'success'" :help="errors[0]">
                  <a-input v-bind="field" placeholder="Enter your email" />
                </a-form-item>
              </template>
            </Field>
          </a-col>
          
          <a-col :sm="24" :md="8">
            <span>Mobile</span>
            <Field name="Mobile">
              <template #default="{ field, errors }">
                <a-form-item :validate-status="errors[0] ? 'error' : 'success'" :help="errors[0]">
                  <a-input v-bind="field" placeholder="Enter your phone number" />
                </a-form-item>
              </template>
            </Field>
          </a-col>
          
          <a-col :sm="24" :md="8">
            <span>Street</span>
            <Field name="street">
              <template #default="{ field, errors }">
                <a-form-item :validate-status="errors[0] ? 'error' : 'success'" :help="errors[0]">
                  <a-input v-bind="field" placeholder="Enter your street" />
                </a-form-item>
              </template>
            </Field>
          </a-col>

          <a-col :sm="24" :md="8">
            <span>city</span>
            <Field name="city">
              <template #default="{ field, errors }">
                <a-form-item :validate-status="errors[0] ? 'error' : 'success'" :help="errors[0]">
                  <a-input v-bind="field" placeholder="Enter your city" />
                </a-form-item>
              </template>
            </Field>
          </a-col>

          <a-col :sm="24" :md="8">
            <span>Country</span>
            <Field name="Country">
              <template #default="{ field, errors }">
                <a-form-item :validate-status="errors[0] ? 'error' : 'success'" :help="errors[0]">
                  <a-input v-bind="field" placeholder="Enter your Country" />
                </a-form-item>
              </template>
            </Field>
          </a-col>
  
          <a-col :sm="24" :md="12">
            <span>LinkedIn</span>
            <Field name="linkedin">
              <template #default="{ field, errors }">
                <a-form-item :validate-status="errors[0] ? 'error' : 'success'" :help="errors[0]">
                  <a-input v-bind="field" placeholder="Enter your LinkedIn account" />
                </a-form-item>
              </template>
            </Field>
          </a-col>
  
          <a-col :sm="24" :md="12">
            <span>GitHub</span>
            <Field name="github">
              <template #default="{ field, errors }">
                <a-form-item :validate-status="errors[0] ? 'error' : 'success'" :help="errors[0]">
                  <a-input v-bind="field" placeholder="Enter your GitHub account" />
                </a-form-item>
              </template>
            </Field>
          </a-col>
  
          <a-col :sm="24">
            <span>Position</span>
            <Field name="position">
              <template #default="{ field, errors }">
                <a-form-item :validate-status="errors[0] ? 'error' : 'success'" :help="errors[0]">
                  <a-input v-bind="field" placeholder="Front-End Developer" />
                </a-form-item>
              </template>
            </Field>
          </a-col>
  
          <a-col :span="16">
            <span>Skills</span>
            <Field name="skills">
              <template #default="{ field, errors }">
                <a-form-item :validate-status="errors[0] ? 'error' : 'success'" :help="errors[0]">
                  <a-input v-bind="field" placeholder="Enter your skills" />
                </a-form-item>
              </template>
            </Field>
          </a-col>

          <a-col :span="8">
            <a-button>+</a-button>
          </a-col>
  
          <a-col :span="24">
            <span>Upload Image</span>
            <Field name="image">
              <template #default="{ field, errors }">
                <a-form-item :validate-status="errors[0] ? 'error' : 'success'" :help="errors[0]">
                  <a-upload v-bind="field">
                    <a-button>Click to Upload</a-button>
                  </a-upload>
                </a-form-item>
              </template>
            </Field>
          </a-col>
        </a-row>
      </Form>
  </template>
  
  <script setup>
  import { Form, Field } from "vee-validate";
  import * as Yup from "yup";
  
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    street: Yup.string().required("Street is required"),
    city: Yup.string().required("City is required"),
    linkedin: Yup.string().url("Invalid URL").required("LinkedIn is required"),
    github: Yup.string().url("Invalid URL").required("GitHub is required"),
    position: Yup.string().required("Position is required"),
    skills: Yup.string().required("Skills are required"),
    image: Yup.mixed().required("Please upload an image"),
  });
  
  const onSubmit = (values) => {
    console.log("Form submitted successfully", values);
  };
  </script>
  
  <style scoped>
  .form-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 24px;
  }
  
  .button-container {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
  }
  </style>
  