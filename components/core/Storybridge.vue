<script lang="ts" setup>
import { useScriptTag } from "@vueuse/core";
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Object,
  },
});

const story = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newVal) => {
    story.value = newVal;
  }
);

const emit = defineEmits(["update:modelValue"]);

if (import.meta.env.MODE !== "production")
  useScriptTag(
    "//app.storyblok.com/f/storyblok-v2-latest.js",
    (el: HTMLScriptElement) => {
      //@ts-ignore
      const { StoryblokBridge, location } = window;
      const storyblokInstance = new StoryblokBridge();
      storyblokInstance.on(["published", "change"], async () => {
        // reload page if save or publish is clicked
        //story.value = await content.loadStory(route.fullPath, true);
        location.reload();
      });
      storyblokInstance.on("input", async (e: any) => {
        story.value = e.story;
        emit("update:modelValue", story.value);
      });
    }
  );
</script>

<template></template>