(() => {

   class Avenger {
      constructor(
         public name: string,
         public realName: string
      ) {
         console.log('Constructor Avenger llamado!')
      }

      protected getFullName() { //protected funciona dentro de la clase y las extendidas
         return `${this.name} ${this.realName}`
      }
   }

   class Xmen extends Avenger {
      constructor(
         name: string,
         realName: string,
         public inMutant: boolean
      ) {
         super(name, realName)
         console.log('Constructor Xmen llamado')

      }

      get fullname() {//los getters solo se mandan a llamar, no es necesario ejecutarlos
         return `${this.name} - ${this.realName}`
      }

      set fullname(name: string) { //set solo recibe un argumento
         this.name = name;
      }

      getFullnameDesdeXmen() {
         console.log(super.getFullName())
      }
   }

   const wolverine = new Xmen('Wolverine', 'Logan', true)

   console.log(wolverine.fullname)
   wolverine.getFullnameDesdeXmen();

   const nuevoAvenger = new Avenger('Hola', 'Mundo')
   nuevoAvenger.name //solo tengo acceso al name y realName ya que el metodo esta protected y solo puedo acceder dentro de la clase

})()