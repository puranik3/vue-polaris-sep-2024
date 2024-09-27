import { defineProps } from 'vue'

type Color = string // restrict colors if needed like 'red' | 'green'

interface Props {
  settings: { color: Color }
}

// @todo Improve this! - how can be manage a default value for the theme prop?
const useColorProp = () => {
  // const props = defineProps<{
  //   color: string
  // }>()

  const props = defineProps<Props>()

  return props
}

export default useColorProp
