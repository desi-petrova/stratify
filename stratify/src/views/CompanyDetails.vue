<script setup lang="ts">
import CompanyDetailsForm from '../components/CompanyDetailsForm.vue';
import {getCompanies, type Company} from '../services/companyService.ts'
import { ref, onMounted } from 'vue'

const companies = ref<Company[]>([])

onMounted(async () => {
  try {
    companies.value = await getCompanies()
  } catch (err) {
    console.error(err)
  }
})
</script>

<template>
  <h3 class="text-2xl font-bold m-5"> Company </h3>
  <div class="flex justify-end">
  <CompanyDetailsForm />
  
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
        <tr v-for="(compony, index) in companies" :key="compony._id">
          <th>{{ index + 1 }}</th>
          <td>{{ compony.name }}</td>
          <td>{{ compony.crn }}</td>
          <td>{{ compony.vatNumber }}</td>
          <td>{{ compony.address }}</td>
          <td>{{ compony.owner }}</td>
          <td>
            <v-icon name="ri-edit-2-fill" fill="orange" />
            <v-icon name="md-deleteforever" fill="red"/>          
          </td>
        </tr>
      </tbody>
    </table>
  </div> 
</template>
