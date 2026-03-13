import { createRouter, createWebHistory } from "vue-router"
import MainLayout from "../layouts/MainLayout.vue"
import Home from "../views/Home.vue"
import Articles from "../views/Articles.vue"
import CompanyDetails from "../views/CompanyDetails.vue"
import ArticleCategories from "../views/ArticleCategories.vue"
import Orders from "../views/Articles.vue"
import Sales from "../views/Sales.vue"
import Purchases from "../views/Purchases.vue"
import Customers from "../views/Customers.vue"
import CompanyDetailsForm from "../components/CompanyDetailsForm.vue"

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      { path: "", component: Home },
      { path: "articles", component: Articles },
      { path: "companyDetails", component: CompanyDetails },
      { path: "customers", component: Customers },
      { path: "articleCategories", component: ArticleCategories },
      { path: "orders", component: Orders },
      { path: "sales", component: Sales },
      { path: "purchases", component: Purchases },
      { path: "company-details-form", component: CompanyDetailsForm },
     
    ]
  }
]


export default createRouter({
  history: createWebHistory(),
  routes
})