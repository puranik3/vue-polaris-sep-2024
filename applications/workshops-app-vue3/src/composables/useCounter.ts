import { ref } from 'vue'

type Validator = () => boolean

// validateDecrement can be a function which checks the page (or other variables) and return true if decrement can be done
const useCounter = (decrementIsValid: Validator, incrementIsValid: Validator) => {
  const page = ref(1)

  const decrement = () => {
    if (decrementIsValid()) {
      --page.value
    }
  }

  const increment = () => {
    if (incrementIsValid()) {
      ++page.value
    }
  }

  return {
    page,
    decrement,
    increment
  }
}

export default useCounter
