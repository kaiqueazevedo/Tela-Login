const bcrypt = require ('bcryptjs');

const password = "Meu Password"

const salt = bcrypt.genSaltSync(14);

const cryptPassword = bcrypt.hashSync(password, salt);

const dbSavedPassword = "$2a$14$56kmf62Pwp4UscDFbulwIeIVm9mh7uYEqWS6ojf0HfmwJ9ReYQ03C"



console.log(bcrypt.compareSync(password, dbSavedPassword));