<script setup lang="ts">
import { reactive, ref, onMounted } from "vue"
import { createArticle, type Article } from "../services/articleService.ts"
import { getCategories, type Category } from "../services/categoryService.ts"


const article = reactive<Article>({
  nomenclatureNumber: "", 
  name: "",
  category: "",
  unit: "",
  note: "",
})

const categories = ref<Category[]>([])
const emit = defineEmits<{
  (e: 'article-added', article: Article): void
}>()

onMounted(async () => {
  try {
    const res = await getCategories()
    categories.value = res
  } catch (err) {
    console.error(err)
  }
})

const saveArticle = async () => {
  try {
    const newArticle = await createArticle(article)
    emit('article-added', newArticle)
    const modal = document.getElementById("my_modal_5") as HTMLDialogElement
    modal.close()
    Object.assign(article, {
       nomenclatureNumber: "", 
       name: "",
       category: "",
       unit: "",
       note: "",
    })

  } catch (err) {
    console.error(err)
  }
}
</script>

<template>
    <div class="m-5">
<button class="btn btn-primary" onclick="my_modal_5.showModal()">New article</button>
<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h2 class="flex justify-center text-lg font-bold">Article Form</h2>
    <div class="modal-action justify-center">
      <form  @submit.prevent="saveArticle">
        <fieldset class="fieldset rounded-box w-xs p-4">
         <label class="label text-black">Nomenclature number</label>
         <input type="text" 
         class="input input-primary" 
         placeholder="Nomenclature number" 
         v-model="article.nomenclatureNumber" />
         
         <label class="label text-black">Name</label>
         <input type="text" 
         class="input input-primary" 
         placeholder="Article name" 
         v-model="article.name"/>

         <label class="label text-black">Category</label>
          <select class="select select-primary"
            placeholder="Choose category"
            v-model="article.category">
          <option disabled selected>Choose category</option>
          <option 
           v-for="category in categories" 
           :key="category._id" 
           :value="category._id">{{category.name}}</option>
          </select>

         <label class="label text-black">Unit</label>
         <select class="select select-primary"
         placeholder="Choose unit"
         v-model="article.unit">
          <option disabled selected>Choose unit</option>
           <option value="Pcs">Pcs</option>
           <option value="Package">Package</option>
           <option value="Box">Box</option>
           <option value="Carton">Carton</option>
        </select>

         <label class="label text-black">Note</label>
         <input type="text" 
         class="input input-primary" 
         placeholder="Note"
         v-model="article.note" />
        </fieldset>

        <div class="flex justify-end">
         <button 
         class="btn btn-outline btn-primary m-2" 
         type="button"
         onclick="document.getElementById('my_modal_5').close()"
         >Close</button>
         <button class="btn btn-primary m-2" type="submit" >Save</button>
        </div>
      </form>
    </div>
  </div>
</dialog>
</div>
</template>

<style>

</style>