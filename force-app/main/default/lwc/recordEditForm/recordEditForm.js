import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import PHONE_FIELD from '@salesforce/schema/contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import ACCOUNT_ID from '@salesforce/schema/Contact.AccountId';


export default class RecordEditForm extends LightningElement {

objectName=CONTACT_OBJECT



fieldList = [NAME_FIELD, TITLE_FIELD, PHONE_FIELD, EMAIL_FIELD,ACCOUNT_ID]

fields ={
        
    nameField:NAME_FIELD,

    titleField:TITLE_FIELD,
    
    phoneField:PHONE_FIELD,
    
    emailField:EMAIL_FIELD,
    
    accountIdField:ACCOUNT_ID
}

handleReset(){

    const inputFields= this.template.querySelectorAll('lightning-input-field')
         if(inputFields){
       Array.from(inputFields).forEach(field => {
        field.reset()

       })
    }
}

}