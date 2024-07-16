import { LightningElement,api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import OBJECT_NAME from '@salesforce/schema/Account'
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'
import ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
export default class LightningBaseComponent extends LightningElement {
    @api recordId
    @api objectApiName
    fieldList =[ANNUAL_REVENUE,ACCOUNT_NAME,TYPE_FIELD,INDUSTRY_FIELD]
    objectName = OBJECT_NAME 

    successHandler(event){ 
     const toastEvent =   new ShowToastEvent({
            title:"Success Message",
            message :"Account Succesfully created with Account ID : " +  event.detail.id,
            variant:"success"
            
        })
        this.dispatchEvent(toastEvent)
    }
    
}