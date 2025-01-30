import { defineStore } from 'pinia';
import { useStrapi } from '#imports';

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [] as Array<{
      id: number;
      name: string;
      slug: string;
      description: string;
    }>,
    isLoading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchCategories() {
      this.isLoading = true;
      this.error = null;

      try {
        const strapi = useStrapi();
        const response = await strapi.find('categories'); // No `populate` needed

        // Ensure response structure matches expected data
        this.categories =
          response?.data?.map((category: any) => ({
            id: category.id,
            name: category.name,
            slug: category.slug,
            description: category.description || '', // Default to empty string if missing
          })) || [];
      } catch (error: any) {
        this.error = error.message || 'Failed to fetch categories';
        console.error('Error fetching categories:', error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
