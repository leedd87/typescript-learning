(() => {

   const fullName = (firstName: string, lastname: string): string => {
      return `${firstName} ${lastname}`
   }

   let noName: string;

   const name = fullName('Tony', 'Stark')

   console.log({ name })


})()