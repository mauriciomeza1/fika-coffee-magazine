const mongoose = require('mongoose')

const newsletterSchema = new mongoose.Schema({
    newsname: {
        type: String,
    },
    newsemail: {
        type: String
    }
})

module.exports = mongoose.model('Newsletter', newsletterSchema)