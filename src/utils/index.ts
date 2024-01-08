import { getCollection } from "astro:content";

export async function getSortedBlogPosts() {
  const articles = (await getCollection("blog")).sort((a, b) => {
    const byDate =
      b.data.publicationDate.valueOf() - a.data.publicationDate.valueOf();

    if (byDate === 0) {
      const byOrder = a.data.order.valueOf() - b.data.order.valueOf();
      return byOrder;
    }
    return byDate;
  });

  return articles;
}
