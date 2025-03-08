import jwt from "jsonwebtoken"
// package that  will  allow us to handle the authentication
export const generateToken =  (userId,res) => {
    // through jwt yo will crate token 
const token = jwt.sign({userId}, process.env.JWT_SECRET,{
    expiresIn:"7d",
}
);
// we havve to send jwt  tokwn in cookies
res.cookie("jwt",token, {
maxAge: 7 * 24 * 60 * 60 * 1000,
httponly: true, // prevent xss attacks croess-site scripting attacks
sameSite: "strict",
secure: process.env.NODE_ENV !== "development",
})
return token; 
};