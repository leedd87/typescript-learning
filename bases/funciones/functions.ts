(() => {

   const hero: string = 'Flash';

   function returnName(): string { //:type => regresar el tipo de dato
      return hero
   }

   const activateBatiSignal = (): string => {
      return 'Batisenal activada!'
   }

   console.log(typeof activateBatiSignal)

   const heroName = returnName()
})()