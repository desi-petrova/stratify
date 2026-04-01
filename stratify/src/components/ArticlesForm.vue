<script setup lang="ts">
import { reactive } from "vue"
import { createArticle, type Article } from "../services/articleService.ts"


const article = reactive<Article>({
  nomenclatureNumber: "", 
  name: "",
  category: "",
  unit: "",
  note: "",
})

const saveArticle = async () => {
  try {
    await createArticle(article)

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
         <input type="text" 
         class="input input-primary" 
         placeholder="Category" 
         v-model="article.category"/>

         <label class="label text-black">Unit</label>
         <input type="text" 
         class="input input-primary" 
         placeholder="Unit"
         v-model="article.unit" />

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