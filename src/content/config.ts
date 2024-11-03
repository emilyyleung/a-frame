import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    pubDate: z.date(),
  }),
});

export const collections = {
  posts: postsCollection,
};
