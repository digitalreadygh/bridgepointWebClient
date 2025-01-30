<template>
  <div class="sm:flex bg-green-950 max-h-sm justify-between items-center px-4 py-2 lg:px-[40px] xl:px-[120px]">
       <!-- icons -->
  <div class="flex">
          <a href="https://www.instagram.com/litt_academy/"  
           target="_blank">
          <span class="mr-4 hover:text-litt-yellow transition-colors cursor-pointer">
                <Icon name="simple-icons:instagram" width="24" height="24" style="color: white" />
          </span></a>
           <a href="https://www.facebook.com/littacademy"
                  target="_blank">
          <span class="mr-4 hover:text-litt-yellow transition-colors cursor-pointer">
            <Icon name="simple-icons:facebook" width="24" height="24" style="color: white" />
          </span></a>
          <a href="https://x.com/LittAcademy" 
                  target="_blank" >
          <span class="mr-4 hover:text-litt-yellow transition-colors cursor-pointer">
            <Icon name="simple-icons:twitter" width="24" height="24" style="color: white"  />
          </span></a>
          <a href="https://www.linkedin.com/company/littdigital-academy/posts/?feedView=all"
                  target="_blank">
          <span class="mr-4 hover:text-litt-yellow transition-colors cursor-pointer">
            <Icon name="simple-icons:linkedin" width="24" height="24" style="color: white"  />
          </span></a>
          <a href="https://youtube.com/@littagiletransformation2552?si=UeuEJGoxjKs7eBqU"
                  target="_blank">
          <span class="mr-4 hover:text-litt-yellow transition-colors cursor-pointer">
            <Icon name="simple-icons:youtube" width="24" height="24" style="color: white"  />
          </span></a>
      </div>

      <div class="flex items-center space-x-6">
          <NuxtLink to="/contact">
          <div class="flex items-center space-x-2">
              <!-- <img src="/public/images/icons/email.png" alt="Email" class="w-5"> -->
              <p class="text-sm text-gray-100 hover:underline">info@bridgepointagri.com</p>
          </div>
          </NuxtLink>

          <div class="flex items-center space-x-2">
              <!-- <img src="/public/images/icons/phone.png" alt="Phone" class="w-4"> -->
              <p class="text-sm text-gray-100">
                +233 20 049 8247
              </p>
          </div>
      </div>
  </div>
</template>