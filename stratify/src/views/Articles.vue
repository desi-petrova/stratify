<script setup lang="ts">
import ArticlesForm from '../components/ArticlesForm.vue';
import {getArticles, type Article} from '../services/articleService.ts'
import { ref, onMounted } from 'vue'

const articles = ref<Article[]>([])

onMounted(async () => {
  try {
    articles.value = await getArticles()
  } catch (err) {
    console.error(err)
  }
})

const handleArticleAdded = (article: Article) => {
  articles.value.push(article)
}
</script>

<template>
  <h3 class="text-2xl font-bold m-5"> Articles </h3>
  <div class="flex justify-end">
  <ArticlesForm @article-added="handleArticleAdded"/>
  
  </div>
  <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>Nomenclature number</th>
          <th>Name</th>
          <th>Category</th>
          <th>unit</th>
          <th>Note</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(article, index) in articles" :key="article._id">
          <th>{{ index + 1 }}</th>
          <td>{{ article.nomenclatureNumber }}</td>
          <td>{{ article.name }}</td>
          <td>{{ article.category }}</td>
          <td>{{ article.unit }}</td>
          <td>{{ article.note }}</td>
          <td>
            <v-icon name="ri-edit-2-fill" fill="orange" />
            <v-icon name="md-deleteforever" fill="red"/>          
          </td>
        </tr>
      </tbody>
    </table>
  </div> 
</template>
