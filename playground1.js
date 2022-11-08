const jwt = require('jsonwebtoken');

const user = {
    id:"20",
    name:"Joao",
    username:"joao@gmail.com",
    password: "123457"
}

 const secret = 'huahuahua';

 function createToken(){
  const token = jwt.sign({id:user.id, username:user.username}, secret,{expiresIn:60})
  console.log(token)
 }
 function testToken (token){

    try{

const validData = jwt.verify(token,secret)
console.log(validData);

}catch (error){
    console.log(error)
}}

//createToken()
testToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwidXNlcm5hbWUiOiJqb2FvQGdtYWlsLmNvbSIsImlhdCI6MTY2NTQxNjA0NCwiZXhwIjoxNjY1NDE2MTA0fQ.BsftTFvYoKpnuaE9EhWh2K3f2yMuka6p8Pl3plRETVs");


 //console.log(token)
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwidXNlcm5hbWUiOiJqb2FvQGdtYWlsLmNvbSIsImlhdCI6MTY2NTQxMzE5MH0.nnbA7zcr3O_CP-XvvNO4P6jWduKTa--7Eyh0cLO_Yeo"
