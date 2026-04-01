import type { st } from "vue-router/dist/index-DFCq6eJK.js"
import { api } from "./api.ts"

export interface Article {
  _id?: string,
  nomenclatureNumber: string,
  name: string,
  category: string,
  unit: string,
  note: string,
}

// CREATE artile
export const createArticle = async (article: Article) => {
  const response = await api.post("/articles", article)
  return response.data
}

// GET all articles
export const getArticles = async () => {
  const response = await api.get("/articles")
  return response.data
}

// GET single article
export const getArticleById = async (id: string) => {
  const response = await api.get(`/articles/${id}`)
  return response.data
}