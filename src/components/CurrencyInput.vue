<script setup lang="ts">
import { ref } from 'vue'
import { useField } from 'vee-validate'
import * as yup from 'yup'

const props = defineProps<{
  name: string
  label?: string
  modelValue?: string | number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const schema = yup.number()
  .required('Value is required')
  .min(0, 'Value must be positive')

const { value, errorMessage } = useField<string>(props.name, schema)

const isFocused = ref(false)

const formatCurrency = (val: string | number): string => {
  if (!val) return ''
  const num = typeof val === 'string' ? parseFloat(val.replace(/[^\d.-]/g, '')) : val
  return `$ ${num.toLocaleString('en-US')}`
}

const unformatCurrency = (val: string): string => {
  return val.replace(/[^\d.-]/g, '')
}

const handleFocus = () => {
  isFocused.value = true
  const unformattedValue = unformatCurrency(value.value)
  value.value = unformattedValue
}

const handleBlur = () => {
  isFocused.value = false
  if (value.value) {
    const formattedValue = formatCurrency(value.value)
    value.value = formattedValue
  }
}

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  const newValue = input.value.replace(/[^\d.-]/g, '')
  value.value = newValue
  emit('update:modelValue', newValue)
}
</script>

<template>
  <div class="currency-input">
    <label v-if="label" :for="name" class="label">{{ label }}</label>
    <input
      :id="name"
      type="text"
      :value="value"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      class="input"
      :class="{ 'error': errorMessage }"
    />
    <span v-if="errorMessage" class="error-message">{{ errorMessage }}</span>
  </div>
</template>

<style scoped>
.currency-input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.label {
  font-size: 0.875rem;
  color: #374151;
}

.input {
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
}

.input.error {
  border-color: #ef4444;
}

.error-message {
  font-size: 0.75rem;
  color: #ef4444;
}
</style>