const Companies = require("../models/companies.js")

// CREATE
exports.createCompany = async (req, res) => {
  try {
    const company = new Companies(req.body)

    await company.save()

    res.status(201).json(company)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// GET ALL
exports.getCompanies = async (req, res) => {
  try {
    const companies = await Companies.find()

    res.json(companies)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// UPDATE
exports.updateCompany = async (req, res) => {
  try {
    const company = await Companies.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    res.json(company)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// DELETE
exports.deleteCompany = async (req, res) => {
  try {
    await Companies.findByIdAndDelete(req.params.id)

    res.json({ message: "Company deleted" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}