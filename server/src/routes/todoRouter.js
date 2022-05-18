const   router = require('express').Router()

const todoController = require('../controller/todoController')

router.get('/',todoController.listTodo)
router.post('/',todoController.createTodo)
router.get('/:id',todoController.todoDetail)
router.put('/:id',todoController.updateTodo)
router.delete('/:id',todoController.deleteTodo)


module.exports = router