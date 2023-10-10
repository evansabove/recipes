<script lang="ts" setup>
import { computed } from "vue";
import { PropType } from "vue";
import { RecipeStoryblok } from "../../types/component-types-sb";
import Image from "./Imagery/Image.vue";

const props = defineProps({
    blok: {
        type: Object as PropType<RecipeStoryblok>,
        required: true,
    },
});

</script>

<template>
    <div>
        <p class="text-2xl mb-5">{{blok.title}}</p>
        <p class="mb-5">{{blok.description}}</p>
        <UAlert class="mb-5" :description="blok.ingredients"></UAlert>
        <p class="mb-5">{{blok.method}}</p>
        <p>{{blok.conclusion}}</p>
    </div>
</template>

<style lang="postcss">
</style>
