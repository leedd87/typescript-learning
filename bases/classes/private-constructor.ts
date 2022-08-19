(() => {

   class Apocalipsis {

      static instance: Apocalipsis;

      private constructor(
         public name: string
      ) { }

      static callApocalipsis(): Apocalipsis {
         if (!Apocalipsis.instance) {
            Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis el unico')
         }

         return Apocalipsis.instance
      }
   }

   const apocalip1 = Apocalipsis.callApocalipsis()

   // const apocalipsis = new Apocalipsis('Soy apocalipsis... el unico')
   // console.log(apocalipsis)


})()