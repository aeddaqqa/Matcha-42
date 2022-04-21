const jwt = require('jsonwebtoken')


module.exports = {
    verifyToken: (req, res, next) =>  {
        const bearerHeader = req.headers['authorization']
    
        if (bearerHeader)
        {
            const token = bearerHeader.split(' ')[1]
            jwt.verify(token, 'hello', (err, authData) => {
                if (err)
                    res.sendStatus(401)
                else{
                    req.auth = authData
                    next()
                }
            })
        } else
            res.sendStatus(403)
    }
}
