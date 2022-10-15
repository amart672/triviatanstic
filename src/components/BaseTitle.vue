<script setup></script>

<template>
  <div class="brand">
    <slot name="logo" />
    <h1 class="title">
      <slot />
    </h1>
    <slot name="logo" />
  </div>
</template>

<style lang="postcss" scoped>
.brand {
  @apply flex items-center justify-center gap-2;
  & .logo {
    @apply h-12 w-12;
  }

  & :slotted(img) {
    @apply h-16 w-16;
  }
  & .title {
    @apply text-center text-6xl font-thin uppercase tracking-widest text-blue-500;
  }
}
</style>
