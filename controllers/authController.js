const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
    const token = req.header('authorization-token');
    if(!token) return res.status(401).send('Acess Denied')
    
    
    try{
        const userVerfied = jwt.verify(token,process.env.TOKEN_SECRET)
        req.user = userVerfied;
        next()
    }catch(error){
        res.status(401).send('Acess Denied');

    }

    res.send("token recebido")


}