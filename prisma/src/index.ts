import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//created insertUser function
async function insertUser(username: string, password: string, firstName: string, lastName: string) {
 const res = await prisma.user.create({
   data :{
    email:username,
    password,
    firstName,
    lastName
   },
   select :{
    id:true,
    password : true
   }

  })
  console.log(res)
}

interface UpdateParamas{
    firstName : string;
    lastName : string
}
//update user data using prisma
async function updateUser(username: string,{firstName, lastName}:UpdateParamas) {
 const res = await prisma.user.update({
    where : {email : username},
   data :{
    firstName,
    lastName
   }

  })
  console.log(res)
}
// insertUser("harshu@gmail.com","123456","harshu","pahade")
// insertUser("harsh12u@gmail.com","1234556","harsh1u","pahaade")
// updateUser("harshu1@gmail.com" , {
//     firstName: "Harshittcoder",
//     lastName:"pahadeee"
// })