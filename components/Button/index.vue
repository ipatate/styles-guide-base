<template>
  <button
    class="button"
    @click="$emit('click')"
    :class="{rounded: rounded, [variant]: true, outlined: outlined}"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    rounded: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'primary',
      validator: function(value) {
        // La valeur passée doit être l'une de ces chaines de caractères
        return ['primary', 'success', 'warning', 'danger'].indexOf(value) !== -1
      },
    },
  },
}
</script>

<style scoped>
.button {
  @apply inline-flex items-center px-6 py-2 border border-transparent text-lg leading-5 font-medium transition duration-150 ease-in-out;
}

.rounded {
  @apply rounded-md;
}

.primary {
  @apply text-white bg-primary-500;
}

.success {
  @apply text-gray-800 bg-green-400;
}

.warning {
  @apply text-gray-800 bg-orange-400;
}

.danger {
  @apply text-white bg-red-700;
}

.button.primary:hover {
  @apply bg-primary-300;
}

.button.success:hover {
  @apply bg-green-300;
}

.button.warning:hover {
  @apply bg-orange-300;
}

.button.danger:hover {
  @apply bg-red-500;
}

.button:focus {
  @apply outline-none shadow-outline;
}

.button.primary:focus {
  @apply bg-primary-300;
}

.button.success:focus {
  @apply bg-green-300;
}

.button.warning:focus {
  @apply bg-orange-300;
}

.button.danger:focus {
  @apply bg-red-500;
}

.button.outlined {
  @apply bg-transparent border-2;
}

.button.outlined:hover {
  @apply bg-transparent;
}

.button.outlined:focus {
  @apply bg-transparent;
}

.button.primary.outlined {
  @apply border-primary-300 text-primary-300;
}

.button.success.outlined {
  @apply border-green-700 text-green-700;
}

.button.warning.outlined {
  @apply border-orange-600 text-orange-700;
}

.button.danger.outlined {
  @apply border-red-600 text-red-700;
}

.button.primary.outlined:hover {
  @apply border-primary-200 text-primary-200;
}

.button.success.outlined:hover {
  @apply border-green-500 text-green-500;
}

.button.warning.outlined:hover {
  @apply border-orange-400 text-orange-600;
}

.button.danger.outlined:hover {
  @apply border-red-400 text-red-500;
}
</style>
