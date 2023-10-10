import {StoryblokStory} from 'storyblok-generate-ts'

export interface PageStoryblok {
  body?: any[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface RecipeStoryblok {
  conclusion?: string;
  title?: string;
  description?: string;
  ingredients?: string;
  method?: string;
  _uid: string;
  component: "Recipe";
  [k: string]: any;
}
