import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';


export default class NavigateToRelatedRelationship extends NavigationMixin(LightningElement) {

    navigateToRelatedContacts(){

        this[NavigationMixin.Navigate]({

            type:'standard__recordRelationshipPage',
            attributes:{
                recordId: '001Hy00001ADEk4IAH',
                relationshipApiName: 'Contacts',
                actionName: 'view',
                objectApiName:'Account'
            } 
        })
    }

}