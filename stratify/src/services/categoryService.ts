import type { st } from "vue-router/dist/index-DFCq6eJK.js"
import { api } from "./api.ts"

export interface Category {
  _id?: string,
  name: string,
  articlesId?: object,
  createOn: Date,
}

// CREATE category
export const createCategory = async (category: string) => {
  const response = await api.post("/categories", { name: category })
  return response.data
}

// GET all categories
export const getCategories = async () => {
  const response = await api.get("/categories")
  return response.data
}

// GET single category
export const getCategoryById = async (id: string) => {
  const response = await api.get(`/categories/${id}`)
  return response.data
}

// UPDATE category
export const updateCategory = async (id: string, category: Category) => {
  const response = await api.put(`/categories/${id}`, category)
  return response.data
}

// DELETE category
export const deleteCategory = async (id: string) => {
  const response = await api.delete(`/categories/${id}`)
  return response.data
}
