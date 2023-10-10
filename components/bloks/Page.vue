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
    <article v-if="story.content?.body">
        <component
            :is="blok.component"
            v-for="blok in story.content.body"
            :id="blok._id"
            :key="blok._id"
            v-editable="blok"
            :blok="blok"
            :story="story" />
    </article>
</template>
