export default {
  // custom validator
  nameValue(value: string) {
    const namePat = /^[A-Za-z][A-Za-z ]+$/
    return namePat.test(value)
  }
}
