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
const appConfig = useAppConfig();
const currentYear = new Date().getFullYear();
</script>

<template>
  <UContainer>
    <div class="site-container">
      <div class="site-header">
        <p class="mb-5">{{ appConfig.productName }}</p>
      </div>
      <div class="site-body">
        <article v-if="story.content?.body">
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
      </div>
    </div>
  </UContainer>
  <div class="site-footer">&copy; {{ appConfig.productName }} {{ currentYear }}</div>
</template>

<style lang="postcss">
.site-container {
  display: flex;
  flex-direction: column;
  align-content: stretch;
  flex-wrap: wrap;
  min-height: 100vh;
}

.site-header {
  display: flex;
  font-size: 3rem;
}

.site-body {
  display: flex;
  @apply flex-1;
  margin-bottom: 3rem;
}

.site-footer {
  text-align: center;
  font-size: 0.8rem;
}
</style>