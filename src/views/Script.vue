<template>
  <div class="script-src">
    <h1>This is an script-src example</h1>
  </div>
</template>

<!-- external script -->
<script>
  export default {
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
      document.head.appendChild(recaptchaScript)
    },
  }
</script>