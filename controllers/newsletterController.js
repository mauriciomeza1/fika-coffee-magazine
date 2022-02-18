const mongoose		= require("mongoose")
const Newsletter	= require("./../models/Newsletter")


/*
exports.send = async (req, res) => {
    const theNewsletter = await Newsletter.find({})

	res.render("layout", {
		newsletter: theNewsletter
	})

}*/

exports.receive = async (req, res) => {
    const subscribe = await Newsletter.create({
        newsname: req.body.newsname,
        newsemail: req.body.newsemail
    })
    res.render("index") 
    //Newsletter.insertOne(subscribe)
}