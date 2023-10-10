import { ImageStoryblok } from "./component-types-sb";

export namespace StoryblokTypes {
  export interface Content {
    component: string;
    _uid: string;
    [k: string]: any;
  }
  export interface TranslatedSlug {
    path: string;
    name: string;
    lang: string;
  }

  export interface Alternate {
    id: number;
    name: string;
    slug: string;
    full_slug: string;
    is_folder: boolean;
    parent_id: number;
  }

  export interface Story<T> {
    id: number;
    uuid: string;
    name: string;
    slug: string;
    full_slug: string;
    default_full_slug?: any;
    created_at: Date;
    published_at: Date;
    first_published_at: Date;
    release_id?: any;
    lang: string;
    content: T | Content;
    position: number;
    is_startpage: boolean;
    parent_id: number;
    group_id: string;
    translated_slugs: TranslatedSlug[];
    alternates: Alternate[];
    tag_list: string[];
  }

  export interface StoryResponse<T = Content> {
    story: Story<T>;
  }

  export interface StoriesResponse<T = Content> {
    stories: Array<Story<T>>;
  }

  export interface ImageContent {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  }

  export interface PaginatedContent {
    uuid: string;
    name: string;
    author?: string;
    copy: string;
    image: string;
    logo: ImageContent;
    clientName: string;
    url: string;
    last_published: string;
    published_at?: string;
    role?: string;
    joined?: string;
    phone?: string;
    twitter?: string;
    linkedin?: string;
    tags: string[];
    companyName?: string;
    attestantName?: string;
    attestantPosition?: string;
    rating?: number;
    quote?: string;
    //TODO: Add custom content types here
    type: "content1" | "content2";
  }
}
