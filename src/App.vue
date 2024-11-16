<script setup lang="ts">
import { ref } from 'vue'
import { Form } from 'vee-validate'
import CurrencyInput from './components/CurrencyInput.vue'

const amount = ref('')
</script>

<template>
  <div class="container">
    <h1>Currency Input Demo</h1>
    <Form class="form">
      <CurrencyInput
        name="amount"
        label="Amount"
        v-model="amount"
      />
      <div class="value-display">
        <strong>Current Value:</strong> {{ amount }}
      </div>
    </Form>
  </div>
</template>

<style>
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
}

h1 {
  margin-bottom: 2rem;
  color: #1f2937;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.value-display {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f3f4f6;
  border-radius: 0.375rem;
}
</style>