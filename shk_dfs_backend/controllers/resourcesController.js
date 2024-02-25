const {Folder, Managers, subSection, SPK} = require('../models/models')

class resourcesController{

    async getAll(req, res) {
        const {id} = req.params
        const resources = await SPK.findAll({where: {subSectionId: id},
        include: [
            {
                model: subSection,
                attributes: ['id', 'name']
            }, 
            {
                model: Folder,
                attributes: ['id','path'],
                include: [
                    {
                        model: Managers,
                        attributes: ['id', 'first_manager', 'second_manager', 'order_date', 'order_num']
                    }
                ]
            }
        ]
    })
        return res.json(resources)
    }

    async getSubSection(req, res){
        const subs = await subSection.findAll()
        return res.json(subs)
    }

    async createSubSection(req, res){
        const {full_name, name} = req.body
        const subs = await subSection.create({full_name, name})
        return res.json(subs)
    }
}



module.exports = new resourcesController()