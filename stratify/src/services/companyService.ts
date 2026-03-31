import { api } from "./api.ts"

export interface Company {
  _id?: string
  name: string
  address: string
  crn: string
  vatNumber: string
  owner: string
  note: string
}

// GET all companies
export const getCompanies = async () => {
  const response = await api.get("/companies")
  return response.data
}

// GET single company
export const getCompanyById = async (id: string) => {
  const response = await api.get(`/companies/${id}`)
  return response.data
}

// CREATE company
export const createCompany = async (company: Company) => {
  const response = await api.post("/companies", company)
  return response.data
}

// UPDATE company
export const updateCompany = async (id: string, company: Company) => {
  const response = await api.put(`/companies/${id}`, company)
  return response.data
}

// DELETE company
export const deleteCompany = async (id: string) => {
  const response = await api.delete(`/companies/${id}`)
  return response.data
}