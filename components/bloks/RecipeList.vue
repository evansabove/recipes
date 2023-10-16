<script lang="ts" setup>
import { computed } from "vue";
import { PropType } from "vue";
import { useContentStore } from "~/store/content";
import { RecipeListStoryblok } from "../../types/component-types-sb";

const props = defineProps({
  blok: {
    type: Object as PropType<RecipeListStoryblok>,
    required: true,
  },
});

const contentStore = useContentStore();
const recipes = await contentStore.loadRecipes();

const getStoryDescription = (story: any) => {
  return story.content?.body && story.content?.body.length
    ? story.content.body[0].description
    : "";
};
</script>

<template>
  <div>
    <img
      :src="blok.image.filename"
      :alt="blok.image.alt"
      class="splash-image"
    />
    <UCard v-for="recipe in recipes" :key="recipe.id" class="recipe-card">
      <template #header>
        <a :href="recipe.full_slug">{{ recipe.name }}</a>
      </template>
      {{ getStoryDescription(recipe) }}
    </UCard>
  </div>
</template>

<style lang="postcss">
.recipe-card {
  @apply mb-5;
}
.splash-image {
  height: 500px;
  width: 100%;
  object-fit: cover;
  border-radius: 2rem;
  @apply mb-5;
}

a {
  text-decoration: underline;
}
</style>
