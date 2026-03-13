<template>
  <div class="w-82 p-5 min-h-screen bg-[#009bd6] overflow-hidden">
   
    <nav class="flex flex-col gap-4 p-4 h-full text-white">
      
      <!-- Лого като линк към Home -->
      <router-link
        to="/"
        class="flex items-center justify-center mb-6 text-xl font-bold hover:text-[#00b8ff]"
      >
        Stratify
      </router-link>

      <!-- Меню линкове -->
      <router-link
        to="/orders"
        class="p-2 rounded hover:bg-[#00b8ff]"
        active-class="bg-[#00719c]"
      >
        Orders
      </router-link>

      <router-link
        to="/sales"
        class="p-2 rounded hover:bg-[#00b8ff]"
        active-class="bg-[#00719c]"
      >
        Sales
      </router-link>

      <router-link
        to="/purchases"
        class="p-2 rounded hover:bg-[#00b8ff]"
        active-class="bg-[#00719c]"
      >
        Purchases
      </router-link>

      <router-link
        to="/companyDetails"
        class="p-2 rounded hover:bg-[#00b8ff]"
        active-class="bg-[#00719c]"
      >
        Company
      </router-link>

      <router-link
        to="/articleCategories"
        class="p-2 rounded hover:bg-[#00b8ff]"
        active-class="bg-[#00719c]"
      >
        Categories
      </router-link>

      <router-link
        to="/articles"
        class="p-2 rounded hover:bg-[#00b8ff]"
        active-class="bg-[#00719c]"
      >
        Articles
      </router-link>

      <router-link
        to="/customers"
        class="p-2 rounded hover:bg-[#00b8ff]"
        active-class="bg-[#00719c]"
      >
        Customers
      </router-link>

    </nav>
    
  </div>
</template>