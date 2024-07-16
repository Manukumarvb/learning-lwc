import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super()
        console.log("Child constructor called")

    }

interval 

    connectedCallback(){
        console.log("Child connectedCalback Called")
         window.addEventListener('click',this.handleClick)
    
     //   throw new Error('Loading of Child Component Failed') 
       
    }
    renderedCallback(){
        console.log("Child renderedCallback called")
    }

    disconnectedCallback(){
        alert("Child Disconnected callback Called !! ")
        window.removeEventListener('click',this.handleClick)
    }

    handleClick(event){

            }

}