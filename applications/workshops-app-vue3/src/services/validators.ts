export default {
  // custom validator
  nameValue(value: string) {
    const namePat = /^[A-Za-z][A-Za-z ]+$/
    return namePat.test(value)
  },
  containsUppercase(value: string) {
    return /[A-Z]/.test(value)
  },
  containsLowercase(value: string) {
    return /[a-z]/.test(value)
  },
  containsNumber(value: string) {
    return /[0-9]/.test(value)
  },
  containsSpecial(value: string) {
    return /[#?!@$%^&*-]/.test(value)
  }
}
