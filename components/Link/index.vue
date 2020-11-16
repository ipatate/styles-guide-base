<template>
  <nuxt-link class="underline hover:text-gray-800" :to="to">
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Link',
  props: {
    title: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      required: true,
    },
  },
}
</script>
