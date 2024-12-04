<script setup>
// import WelcomeComponent from './components/WelcomeComponent.vue';
import PersonalInfo from './components/PersonalInfo.vue'
import { ref } from 'vue';
import { message } from 'ant-design-vue';
const current = ref(0);
const next = () => {
  current.value++;
};
const prev = () => {
  current.value--;
};
const steps = [
  {
    title: 'First',
    content: PersonalInfo,
  },
  {
    title: 'Second',
    content: PersonalInfo,
  },
  {
    title: 'Last',
    content: PersonalInfo,
  },
];
const items = steps.map(item => ({ key: item.title, title: item.title }));
</script>
<template>
  <!-- <WelcomeComponent /> -->
  
  <a-typography-title level="2" class="text-center">Enter Your Information</a-typography-title>
  <a-card class="form-container" title="title">
    <a-steps :current="current" :items="items"></a-steps>
    <div class="steps-content">
      <component :is="steps[current].content" />
    </div>
    <div class="steps-action">
      <a-button v-if="current < steps.length - 1" type="primary" @click="next">Next</a-button>
      <a-button
        v-if="current == steps.length - 1"
        type="primary"
        @click="message.success('Processing complete!')"
      >
        Done
      </a-button>
      <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">Previous</a-button>
    </div>
  </a-card>
</template>
<style>
.ant-steps-item-title::after {
  background: none !important;
  background-color: none !important;
}
</style>