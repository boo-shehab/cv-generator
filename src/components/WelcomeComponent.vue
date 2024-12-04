<template>
    <div class="center-container">
      <a-typography-title :level="3" class="text-center">
        Welcome to Our CV Builder
      </a-typography-title>
  
      <img
        src="/welcome.2b69a3e1.svg"
        alt="welcome"
        class="welcome-image"
      />
  
      <a-typography-paragraph class="text-center subtitle">
        Choose the language of your CV content:
      </a-typography-paragraph>
      <a-radio-group
        v-model:value="selectedLanguage"
        button-style="solid"
        class="language-radio-group"
      >
        <a-radio-button value="English" class="custom-radio-button">English</a-radio-button>
        <a-radio-button value="Arabic" class="custom-radio-button">Arabic</a-radio-button>
      </a-radio-group>
      <a-button
        type="primary"
        shape="round"
        size="large"
        @click="handleStart"
        class="start-button"
      >
        Let's Start
      </a-button>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  const selectedLanguage = ref("English");
  
  const handleStart = () => {
    console.log(`Selected Language: ${selectedLanguage.value}`);
  };
  </script>
  
  <style scoped>
  .center-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 16px;
    gap: 16px;
  }
  
  .welcome-image {
    max-width: 300px;
    height: auto;
  }

  .subtitle {
    font-size: 16px;
  }
  
  .language-radio-group {
    margin: 16px 0;
  }
  
  .start-button {
    margin-top: 24px;
  }

.custom-radio-button.ant-radio-button-wrapper-checked {
    background-color: #1677ff !important;
    color: white !important;
  }
  </style>
  