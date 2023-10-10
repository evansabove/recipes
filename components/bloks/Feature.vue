<script lang="ts" setup>
import { computed } from "vue";
import { PropType } from "vue";
import { FeatureStoryblok } from "../../types/component-types-sb";
import Image from "./Imagery/Image.vue";

const props = defineProps({
    blok: {
        type: Object as PropType<FeatureStoryblok>,
        required: true,
    },
});

</script>

<template>
    <div>
        <p>{{blok.name}}</p>
    </div>
</template>

<style lang="postcss"></style>
