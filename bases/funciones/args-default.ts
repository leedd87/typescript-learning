(() => {

   const fullName = (firstName: string, lastname?: string, upper: boolean = false): string => { //el ? significa que puede o no estar, es opcional
      if (upper) {

         return `${firstName} ${lastname || ''}`.toUpperCase();
      } else {
         return `${firstName} ${lastname || ''}`;

      }

   }

   let noName: string;

   const name = fullName('Tony', "Stark")

   console.log({ name })


})()