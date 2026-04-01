const Categories = require("../models/categories.js")

exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body
    const category = new Categories({ name })
    await category.save()
    res.status(201).json(category)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// GET ALL
exports.getCategories = async (req, res) => {
  try {
    const categories = await Categories.find()

    res.json(categories)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// UPDATE
exports.updateCategory = async (req, res) => {
  try {
    const category = await Categories.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    res.json(category)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// DELETE
exports.deleteCategory = async (req, res) => {
  try {
    await Categories.findByIdAndDelete(req.params.id)

    res.json({ message: "Category deleted" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}