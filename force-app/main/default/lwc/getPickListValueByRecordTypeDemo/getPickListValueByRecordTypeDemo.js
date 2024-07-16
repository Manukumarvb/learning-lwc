import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class GetPickListValueByRecordTypeDemo extends LightningElement {
    industryOptions=[]
    ratingOptions=[]
    selectedRating
    selectedIndustry
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfo
   
    @wire(getPicklistValuesByRecordType,{objectApiName:ACCOUNT_OBJECT,
        recordTypeId:'$objectInfo.data.defaultRecordTypeId'})
    picklistHandler({data,error}){
        if(data){
            console.log(data)
            this.industryOptions = this.generatePickList(data.picklistFieldValues.Industry)
            this.ratingOptions =this.generatePickList(data.picklistFieldValues.Rating)

        }if(error){
            console.error(error)
        }
    }

    generatePickList(data){
        return data.values.map(item=>({"label":item.label,"value":item.value}))
    }
    handleChange(event) {
        const {name,value} = event.target
        console.log(name +' ==> '+value)
        if(name ==='Industry'){
            this.selectedIndustry = value
        }
        if(name ==='Rating'){
            this.selectedRating =value
        }
    }
   


}