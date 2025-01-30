<template>
  <form @submit.prevent="registerFarmer" class="space-y-4">
    <div class="flex flex-col md:flex-row gap-4">
      <input v-model="farmer.first_name" type="text" placeholder="First Name" class="w-full md:w-1/2 bg-green-100 text-green-950 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600" required>
      <input v-model="farmer.last_name" type="text" placeholder="Last Name" class="w-full md:w-1/2 bg-green-100 text-green-950 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600" required>
    </div>
    <input v-model="farmer.email" type="email" placeholder="Email" class="w-full bg-green-100 text-green-950 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600" required>
    
    <div>
      <label class="text-white">Select Season</label>
      <select v-model="farmer.season_id" class="w-full bg-green-100 text-green-950 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600" required>
        <option value="" disabled>Select a season</option>
        <option v-for="season in seasons" :key="season.id" :value="season.id">
          {{ season.name }} ({{ season.start_date }} - {{ season.end_date }})
        </option>
      </select>
    </div>
    
    <button type="submit" class="w-full border-2 border-green-800 text-green-900 rounded-lg p-3 hover:bg-green-800 hover:text-white transition-colors">
      Register Now
    </button>
  </form>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useFarmerStore } from '@/stores/farmers';

const farmerStore = useFarmerStore();
const farmer = ref({
  first_name: '',
  last_name: '',
  email: '',
  season_id: null,
});
const seasons = computed(() => farmerStore.seasons);

const fetchSeasons = async () => {
  try {
    await farmerStore.fetchSeasons();
  } catch (error) {
    console.error('Error fetching seasons:', error);
  }
};

const registerFarmer = async () => {
  if (!farmer.value.season_id) {
    alert('Please select a season before registering.');
    return;
  }

  try {
    await farmerStore.registerFarmer(farmer.value);
    alert('Farmer registered successfully!');
    Object.assign(farmer.value, { first_name: '', last_name: '', email: '', season_id: null });
  } catch (error) {
    console.error('Error registering farmer:', error);
    alert('Failed to register farmer. Please try again.');
  }
};

onMounted(fetchSeasons);
</script>
