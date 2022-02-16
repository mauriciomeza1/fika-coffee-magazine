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

/*
exports.getSingleArticle = async (req, res) => {

	try {

		const { id } = req.params

		console.log(id)
		console.log(typeof id)

		const singleArticle = await Article.findById(id)

		return res.render("articles/all", {
			singleArticle
		})


	} catch (error) {
		
		console.log(error)

		return res.render(`articles/new`, {
			errorMsg: "Hubo un problema en la muestra de los detalles del cuarto."
		})

	}
}*/


exports.newArticleForm = async (req, res) => {

	const { title, markdown} = req.body

	console.log(req.body)


	const newArticle = await Article.create({title,  markdown})

	console.log(newArticle)

	res.redirect("/articles")

}


exports.deleteArticle = async (req, res) => {

	const { id } = req.params

	try {
		
		const deletedArticle = await Article.findByIdAndRemove(id)
		res.redirect("/articles")

	} catch (error) {
		console.log(error)
		res.render(`articles/${id}`)

	}
}






