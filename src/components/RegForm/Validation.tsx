
export const Email_validation = (email: string): boolean => {

    const email_expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const valid_email: boolean = email_expression.test(email);
    return (
        valid_email
    )
}

export const User_Name_validation = (name:string):boolean => {
    const len:number = name.length
    if(len >8)
    return true
     else return false
}

  export const Mobile_validation = (num:number):boolean => {
    const mob= String(num);
   if (mob.length === 10){
    return true
   }
   else return false
  }

