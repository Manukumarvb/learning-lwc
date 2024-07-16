import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import OBJECT_NAME from '@salesforce/schema/Account'

export default class RecordEditCustom extends LightningElement {
    objectName=OBJECT_NAME
    inputValue =''
    handleChange(event){

        console.log(event.target.value)
        this.inputValue =event.target.value

    }

    handleSubmit(event){
        event.preventDefault()
        const inputCmp =this.template.querySelector('lightning-input')
        const value = inputCmp.value

        if(!value.includes('Australia')){
            inputCmp.setCustomValidity("The account name must include 'Australia'")
        }
        else{
            inputCmp.setCustomValidity("")
            const fields =event.detail.fields
            fields.Name = value //inputValue both are same
            //fields.AnnualRevenue = value
            this.template.querySelector('lightning-record-edit-form').submit(fields)
        }
        inputCmp.reportValidity()
    }

    sucessHandler(event){

        const toastEvent = new ShowToastEvent({
            title:"Account Created",
            message:"Record Created Id : " +event.detail.id,
            variant :"success"
        })
        this.dispatchEvent(toastEvent)
    } 
        
    handleError(event){

            const toastEventEr = new ShowToastEvent({
                title:"Error creating Account",
                message:"Record creation failed "+ event.detail.message ,
                variant :"error"
            })
            this.dispatchEvent(toastEventEr)
    }

}