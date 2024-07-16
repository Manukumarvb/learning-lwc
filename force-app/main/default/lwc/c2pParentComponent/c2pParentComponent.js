import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {

    showModel =false
    msg

    clickHandler(){
        this.showModel=true
    }

    closeEvent(event){
        this.showModel=false
        this.msg = event.detail.msg
    }

    // closeHandler(event){
    //     this.showModel=false
    //     this.msg = event.target.value
    // }

    
}