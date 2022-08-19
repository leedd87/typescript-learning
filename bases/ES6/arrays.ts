(() => {

   type Avengers = {
      nick: string,
      ironman: string,
      vision: string,
      activo: boolean,
      poder: number
   }

   const avengers: Avengers = {
      nick: 'Samuel L. Jackson',
      ironman: 'Robert Downey Jr.',
      vision: 'Paul Bettany',
      activo: true,
      poder: 1500.12312333
   }

   const { poder, vision } = avengers

   //console.log(poder.toFixed(2), vision.toUpperCase())

   const printAvenger = ({ ironman, ...resto }: Avengers) => {
      console.log(ironman, resto)
   }

   const avengersArr: [string, boolean, number] = ['Cap. America', true, 123123]

   const [capitan, ironman, serianUnNumero] = avengersArr
   console.log({ ironman, capitan })


})()