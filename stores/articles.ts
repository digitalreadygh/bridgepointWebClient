import { defineStore } from 'pinia';
import { useStrapi } from '#imports';

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    articles: [] as Array<{
      id: number;
      name: string;
      slug: string;
      description: string;
      publishedAt: string;
      cover: {
        url: string;
        name: string;
      } | null;
      category: {
        name: string;
        slug: string;
      } | null;
      author: {
        name: string;
        avatar: {
          url: string;
        } | null;
      } | null;
    }>,
    isLoading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchArticles(categorySlug: string | null = null) {
      this.isLoading = true;
      this.error = null;

      try {
        const strapi = useStrapi();
        const query = categorySlug
          ? { filters: { category: { slug: categorySlug } }, populate: '*' }
          : { populate: '*' };

        const response = await strapi.find('articles', query);

        this.articles = response?.data?.map((article: any) => ({
          id: article.id,
          name: article.name,
          slug: article.slug,
          description: article.description,
          cover: article.cover
            ? {
                url: article.cover.url || '',
                name: article.cover.name || '',
              }
            : null,
          publishedAt: article.publishedAt,
          category: article.category
            ? {
                name: article.category.name || '',
                slug: article.category.slug || '',
              }
            : null,
          author: article.author
            ? {
                name: article.author.name || '',
                avatar: article.author.avatar
                  ? { url: article.author.avatar.url || '' }
                  : null,
              }
            : null,
        })) || [];
      } catch (error: any) {
        this.error = error.message || 'Failed to fetch articles';
        console.error('Error fetching articles:', error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});