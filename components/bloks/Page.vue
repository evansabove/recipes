<script setup lang="ts">
import { PropType } from "vue";
import { PageStoryblok } from "../../types/component-types-sb";
import { StoryblokTypes } from "../../types/StoryblokTypes";

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
</script>

<template>
  <UContainer>
    <div class="flex flex-col">
      <p class="text-3xl mb-5 flex-none">Site title</p>
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
      <div class="flex-none">
        <p>Footer</p>
      </div>
    </div>
  </UContainer>
</template>
