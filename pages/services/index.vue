<template>
  <div class="bg-green-50 dark:bg-gray-900 dark:text-white ">
    <LandingSectionhead>
      <template v-slot:title>Our Services</template>
      <template v-slot:desc>Tailored Solutions for Every Agribusiness Need</template>
    </LandingSectionhead>
    <ServicesSection />
    <section class="w-full py-20">
  <!-- Title -->
  <!-- <div
    class="w-fit pb-1 px-2 mx-4 rounded-md text-2xl font-semibold border-b-2 border-blue-600 dark:border-b-2 dark:border-yellow-600">
    Services</div> -->

  <div class="w-full h-full flex flex-col items-center md:py-4">
    <!-- Col - 2 -->
    <div
      class="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">
      <!--  -->
      <img class="md:w-[50%] w-full md:rounded-t-lg rounded-sm" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxob21lfGVufDB8MHx8fDE3MTA0OTAwNjl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="billboard image" />

      <div class="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
        <h2 class="text-3xl font-semibold text-gray-900 dark:text-white">Ag-Tech Consulting</h2>
        <p class="text-md mt-4">Our Ag-Tech Consulting service equips you with cutting-edge platforms to enhance productivity and efficiency. 
          Whether you're looking to reduce operational costs, improve farming techniques, or maximize yields per acre, our team is here to guide you.</p>
      </div>

    </div>
    <!-- Col - 3 -->
    <div
      class="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col flex-col-reverse lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6">
      <!--  -->
      <div class="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
        <h2 class="text-3xl font-semibold text-gray-900 dark:text-white">Agribusiness Mapping</h2>

        <p class="text-md mt-4">We bring together all stakeholders in the agric ecosystem—smallholder farmers, 
          input suppliers, financial institutions, and buyers—for seamless collaboration. 
          Through our mapping service, we foster win-win partnerships that drive growth and sustainability.</p>
          
          <br><h6>How We help:</h6>
          <ul class="text-md mt-4">
            <li>Organizing farmer cooperatives for collective productivity.</li>
            <li>Linking farmers to quality inputs, financing, and guaranteed markets.</li>
            <li>Building a robust network for sustained success.</li>
          </ul>
      </div>
      <!--  -->
      <img class="md:w-[50%] w-full md:rounded-t-lg rounded-sm" src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="billboard image" />

    </div>
    <!-- Col - 3 -->
    <div
      class="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col flex-col-reverse lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6">
       <!--  -->
       <img class="md:w-[50%] w-full md:rounded-t-lg rounded-sm" src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="billboard image" />

      <!--  -->
      <div class="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
        <h2 class="text-3xl font-semibold text-gray-900 dark:text-white">Agribusiness Mapping</h2>

        <p class="text-md mt-4">We bring together all stakeholders in the agric ecosystem—smallholder farmers, 
          input suppliers, financial institutions, and buyers—for seamless collaboration. 
          Through our mapping service, we foster win-win partnerships that drive growth and sustainability.</p>
          
          <br><h6>How We help:</h6>
          <ul class="text-md mt-4">
            <li>Organizing farmer cooperatives for collective productivity.</li>
            <li>Linking farmers to quality inputs, financing, and guaranteed markets.</li>
            <li>Building a robust network for sustained success.</li>
          </ul>
      </div>
     
    </div>
    <!-- Col - 3 -->
    <div
      class="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col flex-col-reverse lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6">
      <!--  -->
      <div class="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
        <h2 class="text-3xl font-semibold text-gray-900 dark:text-white">Export Aggregator</h2>

        <p class="text-md mt-4">For businesses aiming to export agricultural commodities, we ensure compliance with global standards and protocols. 
          From Global-GAP certifications to traceability, we guide you through every step to access international markets with confidence.</p>
          
          <br><h6>How We help:</h6>
          <ul class="text-md mt-4">
            <li>Organizing farmer cooperatives for collective productivity.</li>
            <li>Linking farmers to quality inputs, financing, and guaranteed markets.</li>
            <li>Building a robust network for sustained success.</li>
          </ul>
      </div>
      <!--  -->
      <img class="md:w-[50%] w-full md:rounded-t-lg rounded-sm" src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="billboard image" />

    </div>
  </div>
</section>
  </div>
  
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'landing',
});
</script>