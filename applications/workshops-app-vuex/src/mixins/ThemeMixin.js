export default {
    props: {
        theme: {
            type: String,
            default: 'dark',
            validator(value) {
                return [
                    'primary',
                    'secondary',
                    'success',
                    'info',
                    'warning',
                    'danger',
                    'light',
                    'dark'
                ].includes(value)
            }
        }
    }
}