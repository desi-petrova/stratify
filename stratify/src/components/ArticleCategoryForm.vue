<script setup lang="ts">
import { ref } from "vue"
import { createCategory } from "../services/categoryService.ts"

const category = ref<string>("")

const saveCategory = async () => {
  try {
    await createCategory(category.value)

    const modal = document.getElementById("my_modal_5") as HTMLDialogElement
    modal.close()
    category.value = ""

  } catch (err) {
    console.error(err)
  }
}
</script>

<template>
    <div class="m-5">
<button class="btn btn-primary" onclick="my_modal_5.showModal()">New category</button>
<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h2 class="flex justify-center text-lg font-bold">Category Form</h2>
    <div class="modal-action justify-center">
      <form  @submit.prevent="saveCategory">
        <fieldset class="fieldset rounded-box w-xs p-4">
         <label class="label text-black">Category name</label>
         <input type="text" 
         class="input input-primary" 
         placeholder="Category name" 
         v-model="category" />
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