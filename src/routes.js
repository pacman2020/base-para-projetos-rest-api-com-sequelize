const { Router } = require('express')

const task = require('./controller/task')

const router = Router()

router.get('/', task.alltask)
router.get('/:id', task.gettask)
router.put('/:id', task.updatetask)
router.delete('/:id', task.deletetask)
router.post('/', task.createtask)

module.exports = router