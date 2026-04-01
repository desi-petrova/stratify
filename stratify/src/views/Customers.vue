<script  setup lang="ts">
import CustomerForm from '../components/CustomerForm.vue';
import {getCustomers, type Customer} from '../services/customerService.ts'
import { ref, onMounted } from 'vue'

const customers = ref<Customer[]>([])

onMounted(async () => {
  try {
    customers.value = await getCustomers()
  } catch (err) {
    console.error(err)
  }
})

const handleCustomerAdded = (customer: Customer) => {
  customers.value.push(customer)
}

</script>

<template>
<h3 class="text-2xl font-bold m-5">Customers</h3>
<div class="flex justify-end">
  <CustomerForm @customer-added="handleCustomerAdded"/>
</div>

<div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table class="table">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>CRN</th>
        <th>Vat Number</th>
        <th>Address</th>
        <th>Owner</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
  <tr v-for="(customer, index) in customers" :key="customer._id">
    <th>{{ index + 1 }}</th>
    <td>{{ customer.name }}</td>
    <td>{{ customer.crn }}</td>
    <td>{{ customer.vatNumber }}</td>
    <td>{{ customer.address }}</td>
    <td>{{ customer.owner }}</td>
    <td>
      <v-icon name="ri-edit-2-fill" fill="orange" />
      <v-icon name="md-deleteforever" fill="red"/>          
    </td>
  </tr>
</tbody>
  </table>
</div>    
</template>