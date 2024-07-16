import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    fullname= "Zero to Hero"
    title = "Aura"

   address ={ city: "Banglore",
                postcode:560066,
                country:'India'
            }

    changeHandler(event){
        this.title= event.target.value

    }

    trackHandler(event){
        this.address = { ... this.address, "city":event.target.value}

    }

      /**Getter Metter**/
      users =["John","Manu","Vinay"]
      get firstUser(){
        return this.users[0]
      }
      num1=10
      num2 =20

      get multiplyier (){
        return this.num1 * this.num2

      }
}