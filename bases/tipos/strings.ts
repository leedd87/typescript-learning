(() => {
   //4 formas de crear strings
   //con typescript me habilita los poderes de los tipos de objetos ejemplo string.toUpperCase()

   const batman: string = 'Batman';
   const linternaVerde: string = "Linterna Verde"
   const volcanNegro: string = `Hero: Volcan Negrop`

   const abc = 123

   console.log(`I'm ${batman}`)

   console.log(batman.toUpperCase())

   console.log(batman[10]?.toUpperCase() || 'No esta presente')


})()