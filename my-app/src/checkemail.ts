export function validateEmail(mail:string) 
{
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!(mail.match(mailformat))){
    return false
  }
    
    return true
}