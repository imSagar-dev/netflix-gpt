
import { isStrongPassword  , isEmail} from "validator";
export const validateLogin =(email,password) => {
       if(!isEmail(email)) return {field:'email'  , msg:"Email is not a valid email"};
       if(!isStrongPassword(password)) return {field:'password' , msg: "Password is not a valid"};

       return null;
}