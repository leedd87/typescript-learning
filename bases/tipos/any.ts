(() => {
   //constantes tienen que estar inicializadas
   //any no te ayuda a mostrar los 'poderes'
   //casteo => avenger as string
   let avenger: any = 123;
   let exists;
   let power;

   avenger = 'Dr Strange'

   console.log((avenger as string).charAt(0))


})()