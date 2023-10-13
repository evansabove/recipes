<script lang="ts" setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useContentStore } from "../store/content";
import { StoryblokTypes } from "../types/StoryblokTypes";
import Storybridge from "../components/core/Storybridge.vue";

const route = useRoute();
const router = useRouter();
const content = useContentStore();
const { $config } = useNuxtApp();

const story = ref<StoryblokTypes.Story<StoryblokTypes.Content> | null>(null);

story.value = await content.loadStory(route.fullPath);
// await content.loadStories()

if (!story.value) {
  router.push("/404");
}

const appConfig = useAppConfig();

const pageTitle = story.value?.name
  ? `${story.value?.name} - ${appConfig.productName}`
  : appConfig.productName;

useHead({
  title: pageTitle,
  script: [{ children: `(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:3693754,hjsv:6}; a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');` }]
});

useSeoMeta({
  title: pageTitle,
});
</script>

<template>
  <Script>
    <!-- Hotjar Tracking Code for https://www.cookwith.me.uk -->
    
  </Script>
  <client-only>
    <Storybridge v-model="story" />
  </client-only>
  <template v-if="story">
    <component
      :is="story.content.component"
      :key="story.content._uid"
      :story="story"
    />
  </template>
</template>
