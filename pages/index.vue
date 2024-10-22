<script>
import { ROUTES } from '~/utils/helper'

definePageMeta({
  middleware: [
    () => {
      return navigateTo(ROUTES.HOME)
    },
  ],
})
</script>
