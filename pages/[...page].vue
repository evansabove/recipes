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

</script>

<template>
    <client-only>
        <Storybridge v-model="story" />
    </client-only>
    <template v-if="story">
        <component
            :is="story.content.component"
            :key="story.content._uid"
            :story="story" />
    </template>
</template>
