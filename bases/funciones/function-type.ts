(() => {

   const addNumbers = (a: number, b: number): number => a + b
   const greet = (name: string): string => `Hola ${name}`
   const saveTheWorld = (): string => `El mundo esta salvado`;

   //let myFunction: (x: number, b: number) => number;
   //let myFunction: (name: string) => string;
   let myFunction: () => string;
   //myFunction = 10;

   //  myFunction = addNumbers
   // console.log(myFunction(10, 8))

   //myFunction = greet
   //console.log(myFunction('David'))

   myFunction = saveTheWorld
   console.log(myFunction())

})()