import axios from "axios";
import { defineStore } from "pinia";
import { StoryblokTypes } from "../types/StoryblokTypes";

interface ContentState {
    stories: Record<string, StoryblokTypes.Story<any>>;
}

const version = import.meta.env.MODE !== "production" ? "draft" : "published";

export const useContentStore = defineStore({
    id: "Content",
    state: (): ContentState => ({
        stories: {},
    }),
    actions: {
        async loadStory<T>(
            routePath: string,
            force = false
        ): Promise<StoryblokTypes.Story<T> | null> {
            if (!this.stories[routePath] || force) {
                const path = routePath === "/" ? "/home" : routePath;
                const queryToken = path.includes("_storyblok_tk") ? "&" : "?";

                const storyblokKey = useNuxtApp().$config.public.storyblok.accessToken
                const cv = new Date().getTime();

                const apiPath = `https://api.storyblok.com/v1/cdn/stories${path}${queryToken}token=${storyblokKey}&cv=${cv}&version=${version}&resolve_links&resolve_relations=author`;

                const data: StoryblokTypes.Story<T> | null = await axios
                    .get<StoryblokTypes.StoryResponse<T>>(apiPath)
                    .then((res) => {
                        return res?.data.story ?? null;
                    })
                    .catch((err) => {
                        console.log("Error getting Story", routePath, err);
                        return null;
                    });

                if (data) {
                    this.stories[routePath] = data;
                }
            }
            return new Promise((resolve) => resolve(this.stories[routePath]));
        },
    },
});
