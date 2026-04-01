<script setup lang="ts">
import ArticleCategoryForm from '../components/ArticleCategoryForm.vue';
import {getCategories, type Category} from '../services/categoryService.ts'
import { ref, onMounted } from 'vue'

const categories = ref<Category[]>([])

onMounted(async () => {
  try {
    categories.value = await getCategories()
  } catch (err) {
    console.error(err)
  }
})
</script>

<template>
    <h3 class="text-2xl font-bold m-5">Categories</h3>
    <div class="flex justify-end">
    <ArticleCategoryForm />
    </div>
     <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table class="table">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
  <tr v-for="(category, index) in categories" :key="category._id">
    <th>{{ index + 1 }}</th>
    <td>{{ category.name }}</td>
    <td>
      <v-icon name="ri-edit-2-fill" fill="orange" />
      <v-icon name="md-deleteforever" fill="red"/>          
    </td>
  </tr>
</tbody>
  </table>
</div> 
</template>

