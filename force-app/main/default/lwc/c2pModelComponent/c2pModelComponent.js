import { LightningElement } from 'lwc';

export default class C2pModelComponent extends LightningElement {

    closeHandler(){
        const myEvent = new CustomEvent('close',{
            bubbles:true,
            detail:{msg:"Model Closed Successfuly"}
        })
        this.dispatchEvent(myEvent)


        // const  myEvent = new CustomEvent('close')
    
        // this.dispatchEvent(myEvent)
    

    }

    footerHandler(){
        console.log("Footer Handler Called")
    }
}