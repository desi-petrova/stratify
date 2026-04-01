const express = require("express")
const router = express.Router()

const articlesController = require("../controllers/articles.controller.js")

router.get("/", articlesController.getArticles)
router.post("/", articlesController.createArticle)
router.put("/:id", articlesController.updateArticle)
router.delete("/:id", articlesController.deleteArticle)

module.exports = router