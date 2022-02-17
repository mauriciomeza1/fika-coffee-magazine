const mongoose		= require("mongoose")
const Newsletter	= require("./../models/Newsletter")



exports.send = async (req, res) => {
    const { newsname, newsemail } = req.body

	const subscribe = await Newsletter.create({newsname,  newsemail})

	console.log(subscribe)

	res.redirect("/")

}