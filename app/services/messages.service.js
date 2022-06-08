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

module.exports = {
    getMessages,
    addMessage
}