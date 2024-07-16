import { LightningElement } from 'lwc';
import pubsub from 'c/pubSub';


export default class PubSubComponentB extends LightningElement {

    connectedCallback(){
        this.callSubscriber()
    }


    message
    callSubscriber(){
        pubsub.subscribe('componentA',(message)=>{
            this.message=message
        })
    }


    
}