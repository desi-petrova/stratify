<script setup lang="ts">
import { reactive } from "vue"
import { createCustomer, type Customer } from "../services/customerService.ts"


const customer = reactive<Customer>({
  name: "",
  address: "",
  crn: "",
  vatNumber: "",
  owner: "",
  note: "",
})

const emit = defineEmits<{
  (e: 'customer-added', customer: Customer): void
}>()

const saveCustomer = async () => {
  try {
    const newCustomer = await createCustomer(customer)
    emit('customer-added', newCustomer)
    const modal = document.getElementById("my_modal_5") as HTMLDialogElement
    modal.close()
    Object.assign(customer, {
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
<button class="btn btn-primary" onclick="my_modal_5.showModal()">New customer</button>
<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h2 class="flex justify-center text-lg font-bold">Customer Form</h2>
    <div class="modal-action justify-center">
      <form  @submit.prevent="saveCustomer">
        <fieldset class="fieldset rounded-box w-xs p-4">
         <label class="label text-black">Company name</label>
         <input type="text" 
         class="input input-primary" 
         placeholder="Company name" 
         v-model="customer.name" />
         
         <label class="label text-black">Address</label>
         <input type="text" 
         class="input input-primary" 
         placeholder="Company address" 
         v-model="customer.address"/>

         <label class="label text-black">CRN</label>
         <input type="text" 
         class="input input-primary" 
         placeholder="Company Registration Number" 
         v-model="customer.crn"/>

         <label class="label text-black">VAT number</label>
         <input type="text" 
         class="input input-primary" 
         placeholder="VAT number"
         v-model="customer.vatNumber" />

         <label class="label text-black">Owner</label>
         <input type="text" 
         class="input input-primary" 
         placeholder="Owner"
         v-model="customer.owner" />

         <label class="label text-black">Note</label>
         <input type="text" 
         class="input input-primary" 
         placeholder="Note"
         v-model="customer.note" />
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