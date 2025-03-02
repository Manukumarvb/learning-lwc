import { LightningElement } from 'lwc';

import {NavigationMixin} from 'lightning/navigation';

export default class NavigateWebPage extends NavigationMixin(LightningElement) {


    navigateToWebPage(){
        this[NavigationMixin.Navigate]({

            type: 'standard__webPage',
            attributes: {
                url: "https://trailhead.salesforce.com/trails"
            }
        })
    }

}