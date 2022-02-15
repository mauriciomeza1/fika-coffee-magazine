const mongoose		= require("mongoose")
const Article			= require("./../models/Article")


exports.article = async (req, res) => {

	const allArticles = await Article.find({}).populate("title")

	res.render("articles/all", {
		articles: allArticles
	})

}


exports.newArticle = async (req, res) => {

	const allArticles = await Article.find({})

	res.render('articles/new')
}


exports.getSingleArticle = async (req, res) => {

	const { id } = req.params

	console.log(id)

	const singleArticle = await Article.findById(id).populate("title")

	console.log(singleArticle)

	res.render("articles/details", {

		articles: singleArticle

	})

}


exports.newArticleForm = async (req, res) => {

	const { title, description, markdown} = req.body

	console.log(req.body)


	const newArticle = await Article.create({title, description, markdown})

	console.log(newArticle)

	res.redirect("/articles/all")

}







