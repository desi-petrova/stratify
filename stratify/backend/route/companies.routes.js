const express = require("express")
const router = express.Router()

const companiesController = require("../controllers/companies.controller.js")

router.get("/", companiesController.getCompanies)
router.post("/", companiesController.createCompany)
router.put("/:id", companiesController.updateCompany)
router.delete("/:id", companiesController.deleteCompany)

module.exports = router