const Task = require('../models/task')


module.exports = {
    async alltask(req, res) {
        try {

          const tasks = await Task.findAll()
          console.log(tasks)
          
          res.status(200).json(tasks)
        } catch (error) {
          res.status(400).json({ error })
        }
      },
      async gettask(req, res) {
        try {
          const id = req.params.id;
          const task = await Task.findOne({ where: { id } })
          if (!task) {
            return res.status(400).json("task not found");
          }
          
          res.status(200).json(task)

        } catch (error) {
          console.log(error)
          res.status(400).json({ error })
        }
      },
      async createtask(req, res) {
        try {
          
          const tasks = await Task.create(req.body)
          console.log(tasks)
          
          res.status(201).json("product inserted!!")
        } catch (error) {
          console.log(error)
          res.status(400).json({ error })
        }
      },
      async updatetask(req, res) {
        try {
          const { title } = req.body
          const id = req.params.id;
          const task = await Task.update(
            { title: title }, {
            where: { 'id':id }
          })
          
          res.status(200).json("task updated!!")
        } catch (error) {
          console.log(error)
          res.status(400).json({ error })
        }
      },
      async deletetask(req, res) {
        try {
          const id = req.params.id;
          await Task.destroy({ where: { 'id':id } })
          
          res.status(200).json("task delete!!")
        } catch (error) {
          console.log(error)
          res.status(400).json({ error })
        }
      }
}