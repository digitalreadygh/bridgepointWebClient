import { defineStore } from 'pinia';
import { useStrapi } from '#imports';

export const useFarmerStore = defineStore('farmers', {
  state: () => ({
    farmers: [],
    seasons: [] as Array<{
      id: number;
      name: string;
      start_date: string;
      end_date: string;
      description: string;
      season_status: string;
    }>,
  }),
  actions: {
    async fetchSeasons() {
      try {
        const strapi = useStrapi();
        const response = await strapi.find('seasons', {
          populate: '*',
        });

        // Map the API payload to the expected seasons format
        this.seasons = response.data.map((season: any) => ({
          id: season.id,
          name: season.name,
          start_date: season.start_date,
          end_date: season.end_date,
          description: season.description,
          season_status: season.season_status,
        }));
      } catch (error) {
        console.error('Error fetching seasons:', error);
      }
    },
    async registerFarmer(farmer: any) {
      try {
        const strapi = useStrapi();
        const response = await strapi.create('farmers', farmer);
        this.farmers.push(response);
      } catch (error) {
        console.error('Error registering farmer:', error);
      }
    },
  },
});
