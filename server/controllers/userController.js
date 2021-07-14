const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Basket } = require('../models/model')
const generateJwt = (id, email, role) => {
     return jwt.sign(
        {id, email, role},
         process.env.SECRET_KEY,
        {expiresIn:'24h'}
         );
}

class UserController {
    async regisration(req, res, next) {
        const {email, name, role } = req.body;
        if(!email || !name){
            return next(ApiError.badReuest("Некорректный email или password"))
        }

        const candidate = await User.findOne({where:{email}})

        if(candidate) {
            return next(ApiError.badReuest('Пользователь с таким email уже есть '))
        }

        const hasPassword = await bcrypt.hash(name,5)
        const user = await User.create({email,role,name:hasPassword})
        const basket = await Basket.create({userId:user.id})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, name} = req.body;
        const user =  await User.findOne({where:{email}})
        
        if(!user){
            return next(ApiError.internal("Пользователь не найден!"))
        }

        let comPassword = bcrypt.compareSync(name, user.name)
        if(!comPassword){
            return next(ApiError.internal("Указан неверный пароль !"))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()