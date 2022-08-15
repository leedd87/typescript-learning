(() => {

   const fullName = (firstName: string, lastname?: string): string => { //el ? significa que puede o no estar, es opcional
      return `${firstName} ${lastname || ''}`
   }

   let noName: string;

   const name = fullName('Tony', 'Stark')

   console.log({ name })


})()