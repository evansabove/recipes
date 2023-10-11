import {StoryblokStory} from 'storyblok-generate-ts'

export interface PageStoryblok {
  body?: any[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface RecipeStoryblok {
  title?: string;
  description?: string;
  ingredients?: RichtextStoryblok;
  method?: RichtextStoryblok;
  conclusion?: string;
  image?: AssetStoryblok;
  toptips?: RichtextStoryblok;
  seo_description?: string;
  _uid: string;
  component: "Recipe";
  [k: string]: any;
}
