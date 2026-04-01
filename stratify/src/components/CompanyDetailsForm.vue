<script setup lang="ts">
import { reactive } from "vue"
import { createCompany, type Company } from "../services/companyService.ts"


const company = reactive<Company>({
  name: "",
  address: "",
  crn: "",
  vatNumber: "",
  owner: "",
  note: "",
})

const emit = defineEmits<{
  (e: 'company-added', company: Company): void
}>()

const saveCompany = async () => {
  try {
    const newCompany = await createCompany(company)
    emit('company-added', newCompany)

    const modal = document.getElementById("my_modal_5") as HTMLDialogElement
    modal.close()
    Object.assign(company, {
      name: "",
      address: "",
      crn: "",
      vatNumber: "",
      owner: "",
      note: ""
    })

  } catch (err) {
    console.error(err)
  }
}
</script>

<template>
    <div class="m-5">
<button class="btn btn-primary" onclick="my_modal_5.showModal()">New company</button>
<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h2 class="flex justify-center text-lg font-bold">Compony Form</h2>
    <div class="modal-action justify-center">
      <form  @submit.prevent="saveCompany">
        <fieldset class="fieldset rounded-box w-xs p-4">
         <label class="label text-black">Company name</label>
         <input type="text" 
         class="input input-primary" 
         placeholder="Company name" 
         v-model="company.name" />
         
         <label class="label text-black">Address</label>
         <input type="text" 
         class="input input-primary" 
         placeholder="Company address" 
         v-model="company.address"/>

         <label class="label text-black">CRN</label>
         <input type="text" 
         class="input input-primary" 
         placeholder="Company Registration Number" 
         v-model="company.crn"/>

         <label class="label text-black">VAT number</label>
         <input type="text" 
         class="input input-primary" 
         placeholder="VAT number"
         v-model="company.vatNumber" />

         <label class="label text-black">Owner</label>
         <input type="text" 
         class="input input-primary" 
         placeholder="Owner"
         v-model="company.owner" />

         <label class="label text-black">Note</label>
         <input type="text" 
         class="input input-primary" 
         placeholder="Note"
         v-model="company.note" />
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