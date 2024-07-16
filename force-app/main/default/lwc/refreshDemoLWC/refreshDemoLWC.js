import { LightningElement ,wire} from 'lwc';
import getContactList from  '@salesforce/apex/refreshContactController.getContactList';
import { updateRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {refreshApex} from '@salesforce/apex'

const columns =[
    {label:'First Name',fieldName:'FirstName', editable:true},
    {label:'Last Name',fieldName:'LastName', editable:true},
    {label:'Email',fieldName:'Email', editable:true}
 
]

export default class RefreshDemoLWC extends LightningElement {
    
    columns=columns

    draftValues=[]

    @wire(getContactList)
    contact;


//    get  isContactAvailable(){
//     console.log(JSON.stringify(this.contact))

//     return this.contact.data && this.contact && this.contact.data.length >0 ? 'Yes':'No'
//    }

   handleSave(event){

    console.log(event.detail.draftValues)
     const recordInputs =    event.detail.draftValues.slice().map(draft=>{
            const fields= Object.assign({},draft)
            return {fields}
        })

        console.log("recordInputs",recordInputs)

        const promises = recordInputs.map(recordInput=> updateRecord(recordInput))

        Promise.all(promises).then(result=> {
            this.showToast('Sucess','Contacts updated')
            this.draftValues=[]

            return refreshApex(this.contact)

        }).catch(error=>{
            this.showToast('Error Updating Contacts record',error.body.message, error)
        })
   }

    showToast(title, message, variant){
        this.dispatchEvent(
            new ShowToastEvent({
            title,
            message,
            variant:variant|| 'success'
        })
        )
        
    }


}