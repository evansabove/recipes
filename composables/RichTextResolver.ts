//@ts-ignore
import RichTextResolver from "storyblok-js-client/dist/rich-text-resolver.cjs.js";
import { computed, ComputedRef } from "vue";
const resolver = new RichTextResolver();

const defaultMapper = (val: any) => val;

export function useRichText(
    richTextField: ComputedRef,
    mapContent: Function = defaultMapper
) {
    return computed(() =>
        richTextField.value
            ? resolver.render(mapContent(richTextField.value))
            : null
    );
}
