import { LightningElement,wire,api } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi';

export default class GetRecordUIDemo extends LightningElement {
    @api recordId
    formFields =[{fieldName:"AccountNumber", label:"Account Number"},
                    {fieldName:"AnnualRevenue", label:"Annual Revenue"},
                    {fieldName:"Name", label:"Account Number"},
                    {fieldName:"Phone", label:"Phone Number"}]
        
    @wire(getRecordUi,{recordIds: '$recordId' ,
         layoutTypes: 'Full' ,
          modes: 'Edit'   })
          objectRecordUiHander({data,error}){
            if(data){
                console.log(data)
                this.formFields = this.formFields.map(item=>{
                    return {...item, value:data.records[this.recordId].fields[item.fieldName].value}})
               
            }
            if(error){
                console.log(error)
            }
          }
}