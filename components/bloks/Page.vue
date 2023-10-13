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
  <div class="site-header">
    <UContainer>
      <p class="mb-5">{{ appConfig.productName }}</p>
    </UContainer>
  </div>
  <UContainer>
    <div class="site-container">
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
  <div class="site-footer">
    &copy; {{ appConfig.productName }} {{ currentYear }}
  </div>
</template>

<style lang="postcss">
body {
  background: #FFFCF9;
}
.site-container {
  display: flex;
  flex-direction: column;
  align-content: stretch;
  flex-wrap: wrap;
  min-height: 100vh;
}

.site-header {
  font-size: 3rem;
  background: #416165;
  padding-top: 1rem;
  padding-bottom: 4rem;
  color: #FFFCF9;
}

.site-body {
  display: flex;
  @apply flex-1;
  margin-bottom: 3rem;
  margin-top: -3.5rem;
}

.site-footer {
  text-align: center;
  font-size: 0.8rem;
  background: #416165;
  padding: 1rem;
  color: #FFFCF9;
}
</style>