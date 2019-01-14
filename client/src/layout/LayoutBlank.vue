<template>
  <div class="router-transitions">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'LayoutBlank',
  props: {
    title: String
  }
}
</script>
