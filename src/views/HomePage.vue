<script setup>
import { onMounted } from 'vue'
import useAPI from '@/composables/useAPI'
import BaseTitle from '@/components/BaseTitle.vue'

const { categories, getCategories } = useAPI()

onMounted(async () => {
  await getCategories()
})
</script>

<template>
  <!--  -->
  <BaseTitle>
    <template #logo>
      <img src="/logo.svg" alt="logo" />
    </template>
    Triviantastic
  </BaseTitle>
  <div v-if="categories.length > 0" class="categories">
    <RouterLink
      v-for="category in categories"
      :key="category.id"
      :to="`/question/category/${category.id}`"
      class="category"
    >
      {{ category.name }}
    </RouterLink>
  </div>
</template>

<style lang="postcss" scoped>
.categories {
  @apply grid flex-grow grid-cols-8 gap-8;
  & .category {
    @apply flex h-32 w-40 items-center justify-center rounded-lg border-4 border-pink-900 py-4 text-center font-thin uppercase text-slate-800 transition-colors duration-300;

    &:hover {
      @apply cursor-pointer border-blue-600 bg-blue-500 text-black;
    }
  }
}
</style>
