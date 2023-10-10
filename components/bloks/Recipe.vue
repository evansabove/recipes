<script lang="ts" setup>
import { computed } from "vue";
import { PropType } from "vue";
import { RecipeStoryblok } from "../../types/component-types-sb";

const props = defineProps({
  blok: {
    type: Object as PropType<RecipeStoryblok>,
    required: true,
  },
});

const ingredients = computed(() => renderRichText(props.blok.ingredients));
const method = computed(() => renderRichText(props.blok.method));
const toptips = computed(() => renderRichText(props.blok.toptips));
</script>

<template>
  <div>
    <img
      :src="blok.image.filename"
      :alt="blok.image.alt"
      class="splash-image"
    />
    <p class="title">{{ blok.title }}</p>
    <p class="mb-5">{{ blok.description }}</p>

    <p class="text-2xl mb-5">Ingredients</p>
    <div class="mb-5" v-html="ingredients"></div>

    <p class="text-2xl mb-5">Method</p>
    <div class="mb-5" v-html="method"></div>

    <p>{{ blok.conclusion }}</p>
  </div>
</template>

<style lang="postcss">
ul {
  @apply list-disc;
  @apply ms-5;
}

ol {
  @apply list-decimal;
  @apply ms-5;
}

.title {
  font-size: 2rem;
  @apply mb-5;
}

.splash-image {
  height: 500px;
  width: 100%;
  object-fit: cover;
  border-radius: 2rem;
  @apply mb-5;
}

.top-tips {
  font-size: 1.2rem;
}
</style>
