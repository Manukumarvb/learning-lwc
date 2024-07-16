import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import NAME_FIELDS from '@salesforce/schema/User.Name'
import EMAIL_FIELDS from '@salesforce/schema/User.Email'



const fields =[NAME_FIELDS,EMAIL_FIELDS]
export default class WiredDemoUserDetail extends LightningElement {
    userId =Id//0056D0000066miTQAQ
    userDetail
    

// @wire(adaptor,{adaptorConfig})
// propertyFunctiom

    @wire(getRecord,{recordId:'$userId',fields:fields})
    userDetailHandler({data,error}){
        if(data){
            this.userDetail =data.fields
        }
        if(error){
        console.error(error)
         }
    }
    @wire(getRecord,{recordId:'$userId',fields})
    userDetailProperty
}

