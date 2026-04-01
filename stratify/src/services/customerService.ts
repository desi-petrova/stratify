import { api } from "./api.ts"

export interface Customer {
  _id?: string
  name: string
  address: string
  crn: string
  vatNumber: string
  owner: string
  note: string
}

// GET all customers
export const getCustomers = async () => {
  const response = await api.get("/customers")
  return response.data
}

// GET single customer
export const getCustomerById = async (id: string) => {
  const response = await api.get(`/customers/${id}`)
  return response.data
}

// CREATE customer
export const createCustomer = async (customer: Customer) => {
  const response = await api.post("/customers", customer)
  return response.data
}

// UPDATE customer
export const updateCustomer = async (id: string, customer: Customer) => {
  const response = await api.put(`/customers/${id}`, customer)
  return response.data
}

// DELETE customer
export const deleteCustomer = async (id: string) => {
  const response = await api.delete(`/customers/${id}`)
  return response.data
}