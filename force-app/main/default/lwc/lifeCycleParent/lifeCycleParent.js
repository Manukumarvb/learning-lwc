import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {

    constructor(){
        super()
        console.log("Parent constructor called")

    }

    connectedCallback(){
        console.log("parent connectedCalback Called")
        
    }
    renderedCallback(){
      
            
        console.log("Parent renderedCallback called");
        
    }

    
    changeHandler(event){

        
        console.log("Parent renderedCallback called in event")
    }

    isChildVisible =false
    handleClick(event){

        this.isChildVisible =! this.isChildVisible


    }

    errorCallback(error,stack){
        console.log(error.message)
        console.log(stack)
    }
}