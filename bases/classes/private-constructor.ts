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

      changeName(newName: string): void {
         this.name = newName;
      }
   }

   const apocalip1 = Apocalipsis.callApocalipsis()

   apocalip1.changeName('Xavier')

   // const apocalipsis = new Apocalipsis('Soy apocalipsis... el unico')
   // console.log(apocalipsis)


})()