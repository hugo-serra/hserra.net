import type { CollectionEntry } from "astro:content";

const postFilter = ({ data }: CollectionEntry<"blog">) => {
  return (
    !data.draft &&
    (import.meta.env.DEV || Date.now() > new Date(data.pubDatetime).getTime())
  );
};

export default postFilter;
