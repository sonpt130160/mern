const   router = require('express').Router()

const todoController = require('../controller/todoController')

router.get('/',todoController.listTodo)
router.post('/',todoController.createTodo)


module.exports = router