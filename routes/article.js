// ./routes/index.js

// 1. IMPORTACIONES
const express			= require("express")
const router			= express.Router()
const Article           = require('./../models/Article')
const articleController = require("./../controllers/articleController")


// 2. ROUTER



router.get ("/all", articleController.article)
router.get("/new", articleController.newArticle)
router.post("/new", articleController.newArticleForm)

//router.get("/:id", articleController.getSingleArticle)

router.post("/:id/delete", articleController.deleteArticle)
/*
router.get("/:id/edit", articleController.editBlog)

router.post("/:id/edit", articleController.editBlogForm)*/

// 3. EXPORTACIÓN
module.exports = router