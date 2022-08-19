(() => {

   class Avenger {

      //  private name?: string;
      // public team?: string;
      // public realName?: string;
      static avgAge: number = 35; //los metodos statics solo son accesibles desde las Class
      static getAvgAge() {
         return this.name;
      }

      constructor(
         private name: string,
         private team: string,
         public realName?: string

      ) { }

      public bio() {
         return `${this.name} (${this.team})`
      }

   }


   const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
   console.log(antman)

   console.log(Avenger.avgAge)

   console.log(antman.bio())

})()