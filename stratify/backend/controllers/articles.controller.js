const Articles = require("../models/articles.js")

// CREATE
exports.createArticle = async (req, res) => {
  try {
    const article = new Articles(req.body)

    await article.save()

    res.status(201).json(article)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// GET ALL
exports.getArticles = async (req, res) => {
  try {
    const articles = await Articles.find()

    res.json(articles)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// UPDATE
exports.updateArticle = async (req, res) => {
  try {
    const company = await Articles.findByIdAndUpdate(
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
exports.deleteArticle = async (req, res) => {
  try {
    await Articles.findByIdAndDelete(req.params.id)

    res.json({ message: "Article deleted" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}