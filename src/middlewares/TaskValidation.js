const TaskModel = require('../model/TaskModel');
//const { isPast } = require('date-fns')

const TaskValidation = async (req, res, next) => {

    const { macaddress, cpf, type, name, email, fone, description /*when*/ } = req.body;

    if(!macaddress)
    return res.status(400).json({ error: 'macaddress é obrigatório'});
    else if(!cpf)
    return res.status(400).json({ error: 'cpf é obrigatório'});
    else if(!type)
    return res.status(400).json({ error: 'Tipo de cliente é obrigatório'});
    else if(!name)
    return res.status(400).json({ error: 'Nome é obrigatório'});
    else if(!email)
    return res.status(400).json({ error: 'Email é obrigatório'});
    else if(!fone)
    return res.status(400).json({ error: 'Telefone é obrigatório'});
    else if(!description)
    return res.status(400).json({ error: 'Descrição é obrigatório'});
    /*else if(!when)
    return res.status(400).json({ error: 'Data e hora são obrigatórios'});
    else if(isPast(new Date(when)))
    return res.status(400).json({ error: 'Escolha uma data e hora futura'});*/
    else{
        let exist;

        if(req.params.id){
            exist = await TaskModel.findOne(
                { 
                  '_id': {'$ne': req.params.id},
                  //'when': {'$eq': new Date(when)},
                  'cpf': {'$in': cpf }
                });
        }else{

        exist = await TaskModel.findOne(
                { 
                  //'when': {'$eq': new Date(when)},
                  'cpf': {'$in': cpf }
                });
        }

        if(exist){
            return res.status(400).json({ error: 'cliente já Cadastrado em nossa Base de dados!'});
        }
        
        next();
    }
}

module.exports = TaskValidation;