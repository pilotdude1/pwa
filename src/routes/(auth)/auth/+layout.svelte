<script lang="ts">
  let isEurope = false
  try {
    isEurope = Intl.DateTimeFormat()
      .resolvedOptions()
      .timeZone.startsWith("Europe/")
  } catch (e) {
    /* continue */
  }
</script>


    <slot />
    <div class="mt-8 {isEurope ? 'block' : 'hidden'}">
      🍪 Logging in uses Cookies 🍪
    </div>
