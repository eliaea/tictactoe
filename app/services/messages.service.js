const express = require('express')
const messageModel = require('../models/messageModel')

const getMessages = async (req, res) => {
    messages = await messageModel.find({})
    console.log(messages)

    return res.status(200).json(messages)
}

const addMessage = async (req, res) => {
    const { message } = req.body

    const messageObj = new messageModel(message)
    await messageObj.save()
    return res.status(200).json(messageObj)

}


const editMessage = async (req, res) => {
    const { name } = req.params
    let body = req.body

    console.log(name, body)
    message = await messageModel.findOne({ name: name })

    messageModel.where({ name: name }).update({ $set: { name: body.name } }).exec();

    messages = await messageModel.find({})

    return res.status(200).json({ message: "updated field", messages })
}

module.exports = {
    getMessages,
    addMessage,
    editMessage
}