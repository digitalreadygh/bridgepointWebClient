<script setup>
definePageMeta({
  layout: "landing",
});

const TeamImg3 = "../images/team/abraham.png";
const TeamImg2 = "https://rb.gy/t7rjfj";
const TeamImg1 = "https://rb.gy/mqystu";

const team = [
  {
    name: "Isaac Ampiaw",
    title: "Founding & Managing Director",
    avatar: {
      src: TeamImg1,
      width: 480,
      height: 560,
    },
    social_handles: [
      {
        url:"https://twitter.com/AbrahamKatsekpo",
        icon: "uil:twitter",
      },
      {
        url:"https://www.linkedin.com/in/abraham-katsekpor-aa2a1b1b2/",
        icon: "uil:linkedin",
      },
    ]
  },
  {
    name: "Gifty Addo",
    title: "Administrative Officer",
    avatar: {
      src: TeamImg2,
      width: 580,
      height: 580,
    },
    social_handles: [
      {
        url:"https://twitter.com/AbrahamKatsekpo",
        icon: "uil:twitter",
      },
      {
        url:"https://www.linkedin.com/in/abraham-katsekpor-aa2a1b1b2/",
        icon: "uil:linkedin",
      },
    ]
  },
  {
    name: "Abraham Katsekpor",
    title: "Operations Manager",
    avatar: {
      src: TeamImg3,
      width: 580,
      height: 580,
    },
    social_handles: [
      {
        url:"https://twitter.com/AbrahamKatsekpo",
        icon: "uil:twitter",
      },
      {
        url:"https://www.linkedin.com/in/abraham-katsekpor-aa2a1b1b2/",
        icon: "uil:linkedin",
      },
    ]   
  },
];
</script>

<template>
  <div>
  <LandingSectionhead>
    <template v-slot:title>Who We Are</template>
    <template v-slot:desc>Delve into Bridgepoint's genesis, our unwavering commitment to redefining the agricultural chain, and the vision that fuels our drive to connect Africa's agriculture community seamlessly.</template>
  </LandingSectionhead>
  <LandingContainer>
    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        We Will Improve Your Agric business beyond your imagination
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        BridgePoint is a consulting firm established with the mandate to carry out the business of Ag-Tech Consulting, Agribusiness Mapping, Export Aggregator, and Business Support Services to clients both in Ghana and abroad.
      </p>
    </div>

    <LandingHistorySteps></LandingHistorySteps>

     <!-- about us content-->
     <main class="max-width">
            <section class="my-20">
                <div class="my-20 max-w-5xl m-auto text-center">
                    <h1 class=" text-3xl lg:text-4xl font-bold">Our Story</h1>
                    <p class="my-5 leading-7">
                        In the bustling heart of Africa, healthcare has always been more than just a profession—it's a
                        calling, a duty, and most importantly, a bond that connects communities. Amidst this vast landscape,
                        a challenge persisted: the seamless flow of medical supplies between wholesalers and retailers. And
                        thus, Nnuro was born.
                    </p>
                </div>
            </section>

            <!-- mission -->
            <section class="my-28">
                <div class="flex justify-center gap-10 items-center flex-col md:flex-row">
                    <div class="md:w-1/2">
                        <!-- <img class="w-full lg:w-auto lg:max-w-xl box-shadow mx-auto" src="../assets/images/mission.svg" -->
                            alt="health dashboard">
                    </div>
                    <div class="md:w-1/2">
                        <div class="md:max-w-xl mx-auto">
                            <h2 class="font-bold text-3xl mb-5">Mission</h2>
                            <p class="mb-3">We are promoting an integrated Agric value chain in order to position
                                smallholder farming as a serious business to alleviate extreme poverty</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- vission -->
            <section class="my-28">
                <div class="flex justify-center gap-10 items-center flex-col md:flex-row-reverse">
                    <div class="md:w-1/2">
                        <!-- <img class="w-full lg:w-auto lg:max-w-xl box-shadow mx-auto" src="../assets/images/vision.svg" -->
                            alt="health dashboard">
                    </div>
                    <div class="md:w-1/2">
                        <div class="md:max-w-xl mx-auto">
                            <h2 class="font-bold text-3xl mb-5">Vision</h2>
                            <p class="mb-3">Is to transform the lives of 200,000 smallholder farmers from poverty by the
                                end of 2027.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Meet our Team</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div>
    <!-- text - end -->

    <div class="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
      <!-- person - start -->
      <div v-for="item of team" class="group">
        <div class="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
          <img 
            :src="item.avatar.src"
            :width="item.avatar.width"
            :height="item.avatar.height"
            alt="Team"
            loading="lazy"
            class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="font-bold text-green-700 md:text-lg">{{ item.name }}</div>
          <p class="mb-3 text-sm text-green-900 md:mb-4 md:text-base"> {{ item.title }}</p>

         <!-- social - start -->
        <div class="flex">
          <div class="flex gap-4">
            <span v-for="socialHandle in item.social_handles || []" :key="socialHandle.icon">
              <NuxtLink
                v-if="socialHandle.url"
                :to="socialHandle.url"
                target="_blank"
                class="text-green-700 transition duration-100 hover:text-green-900 active:text-gray-600"
              >
                <Icon
                  v-if="socialHandle.icon"
                  :name="socialHandle.icon"
                  class="h-5 w-5"
                />
              </NuxtLink>
            </span>
          </div>
        </div>
        <!-- social - end -->

        </div>
      </div>
      <!-- person - end -->
    </div>
  </div>
</div>
  </LandingContainer>
</div>
</template>
