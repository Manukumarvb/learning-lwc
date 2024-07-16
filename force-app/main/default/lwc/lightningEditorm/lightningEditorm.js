import { LightningElement } from 'lwc';
import OBJECT_NAME from '@salesforce/schema/Contact'
import NAME_FIELD from '@salesforce/schema/Contact.Name'
import TITLE_FIELD from '@salesforce/schema/Contact.Title'
import PHONE_FIELD from '@salesforce/schema/Contact.Phone'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId'

export default class LightningEditorm extends LightningElement {
   objectName= OBJECT_NAME
   fields={
    accountField:ACCOUNT_FIELD,
    nameFiled:NAME_FIELD,
    titleField: TITLE_FIELD,
    phoneField:PHONE_FIELD,
    emailField:EMAIL_FIELD

   }
   handleReset(){
    const inputFields = this.template.querySelectorAll('lightning-input-field')
      if(inputFields){
        Array.from(inputFields).forEach(field=>{
            field.reset()
        })
      }
   }

}