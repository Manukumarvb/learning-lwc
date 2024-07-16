import { LightningElement } from 'lwc';

export default class ShadowDomStyling extends LightningElement {
 isLoaded =false
    renderedCallback(){
        if(this.isLoaded) return
        const style =document.createElement('style')
        style.innerText =`c-shadow-dom-styling .slds-button{
            color: antiquewhite;
            background: red;
        } `
        this.template.querySelector('lightning-button').appendChild(style)
        this.isLoaded =true
    }



}
