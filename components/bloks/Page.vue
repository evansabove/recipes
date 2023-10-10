<script setup lang="ts">
import { PropType } from "vue";
import { PageStoryblok } from "../../types/component-types-sb";
import { StoryblokTypes } from "../../types/StoryblokTypes";
import { useContentStore } from "@/store/content";

const props = defineProps({
  story: {
    type: Object as PropType<StoryblokTypes.Story<PageStoryblok>>,
    required: true,
  },
  theme: {
    type: Object,
    required: false,
  },
});

const content = useContentStore();

</script>

<template>
  <div style="display: none">
    <a v-for="story in content.stories" :key="story.id" :href="`/${story.full_slug}`"></a>
  </div>
  
  <UContainer>
    <div class="flex flex-col flex-stretch">
      <div class="site-header">
        <p class="mb-5 flex-none">Andy's Recipes</p>
      </div>
      <article v-if="story.content?.body" class="flex-1">
        <component
          :is="blok.component"
          v-for="blok in story.content.body"
          :id="blok._id"
          :key="blok._id"
          v-editable="blok"
          :blok="blok"
          :story="story"
        />
      </article>
      <div class="flex-none mt-auto">
      </div>
    </div>
  </UContainer>
</template>

<style lang="postcss">
.site-header {
  font-size: 3rem;
}
</style>