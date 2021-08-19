let users = []
const bcrypt = require('bcryptjs')

module.exports = {
    login: (req, res) => {
      console.log(users);
      console.log("YYYYYYYYYYYYY 1")

      salt = bcrypt.genSaltSync(10);

      console.log('Logging In User')
      //console.log(req.body)
      const { username, password } = req.body
      

      for (let i = 0; i < users.length; i++) {

        if (users[i].username === username && bcrypt.compareSync(password,users[i].passHash)) {
          console.log("YYYYYYYYYYYYY 1")

          let returningValues = {...users[i]}
          delete returningValues.passHash
          res.status(200).send(returningValues)
          return;
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      salt = bcrypt.genSaltSync(10);

      const {username, password, firstName,lastName, email} = req.body

      const passHash = bcrypt.hashSync(password,salt);



        let userObj = {
          username,
          passHash,
          firstName,
          lastName,
          email,
        }
        console.log(userObj)




        console.log('Registering User')
        users.push(userObj)
        let sendingValue = {...userObj}
        delete sendingValue.passHash;
        res.status(200)
    }
}