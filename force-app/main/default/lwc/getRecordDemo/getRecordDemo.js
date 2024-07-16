import { LightningElement,wire,api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { getFieldValue,getFieldDisplayValue } from 'lightning/uiRecordApi';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_OWNER_NAME from '@salesforce/schema/Account.Owner.Name';
import ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue';

export default class GetRecordDemo extends LightningElement {
    name
    owner
    annualRevenue
    @api recordId
    // @wire(getRecord,{recordId:'$recordId',
    // fields:[ACCOUNT_NAME,ACCOUNT_OWNER_NAME,ANNUAL_REVENUE]})
    // accountHandler({data}){
    //     if(data){
    //         console.log(data);// display value if not normal value
    //         this.name = data.fields.Name.displayValue ? data.fields.Name.displayValue:
    //         data.fields.Name.value
    //         this.annualRevenue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue:
    //         data.fields.AnnualRevenue.value
    //         this.owner = data.fields.Owner.displayValue ? data.fields.Owner.displayValue:
    //         data.fields.Owner.value
    
    // ****** with layout and mode ******

    // // @wire(getRecord,{recordId:'$recordId',
    // // layoutType:['full'],mode:['view']})
    // accountHandler({data}){
    //     if(data){
    //         console.log(data);// display value if not normal value
    //         this.name = data.fields.Name.displayValue ? data.fields.Name.displayValue:
    //         data.fields.Name.value
    //         this.annualRevenue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue:
    //         data.fields.AnnualRevenue.value
    //         this.owner = data.fields.Owner.displayValue ? data.fields.Owner.displayValue:
    //         data.fields.Owner.value

    //**** to get Display value using getFieldValue or getFieldDisplayValue */

  @wire(getRecord,{recordId:'$recordId',
    fields:[ACCOUNT_NAME,ACCOUNT_OWNER_NAME,ANNUAL_REVENUE]})
      accountHandler({data}){
        if(data){
            console.log(data);
            this.name = getFieldValue(data,ACCOUNT_NAME)//data.fields.Name.value
            this.owner =  getFieldValue(data,ACCOUNT_OWNER_NAME)
            this.annualRevenue =  getFieldDisplayValue(data,ANNUAL_REVENUE)


        }
    }



}