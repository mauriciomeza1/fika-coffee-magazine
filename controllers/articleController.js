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



exports.newArticleForm = async (req, res) => {

	const { title, markdown} = req.body

	console.log(req.body)


	const newArticle = await Article.create({title,  markdown})

	console.log(newArticle)

	res.redirect("/articles/all")

}

exports.getSingleArticle = async (req, res) => {

	try {

		const { id } = req.params
		const singleArticle = await Article.findById(id)
		return res.render("articles/details", {
			singleArticle
		})


	} catch (error) {
		
		console.log(error)
		return res.render(`/articles`, {
			errorMsg: "Hubo un problema en la muestra de los detalles."
		})

	}
}


exports.deleteArticle = async (req, res) => {

	const { id } = req.params

	try {
		const deletedArticle = await Article.findByIdAndRemove(id)
		res.redirect("/articles/all")

	} catch (error) {
		console.log(error)
		res.render(`articles/${id}`)

	}
}



exports.editArticle = async (req, res) => {

	const { id } = req.params

	const singleArticle = await Article.findById(id)

	res.render("articles/edit", {
		singleArticle
	})


}


exports.editArticleForm = async (req, res) => {

	const { title, markdown } = req.body

	const { id } = req.params

	await Article.findByIdAndUpdate(
		id,
		{ title, markdown },
		{ new: true }
	)

	res.redirect(`/articles/${id}`)


}



