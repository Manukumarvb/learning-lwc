import { LightningElement, wire } from 'lwc';
import {IsConsoleNavigation, getFocusedTabInfo, closeTab} from 'lightning/platformWorkspaceApi'

export default class CloseSubtabs extends LightningElement {

    @wire(IsConsoleNavigation)
    isConsoleNavigation
    async closeAllSubtabsHandler(){
        if(this.isConsoleNavigation){
            const tabInfo = await getFocusedTabInfo()
            if(tabInfo.subtabs){
                tabInfo.subtabs.forEach(async tab=>{
                    await closeTab(tab.tabId)
                })
            }
        }
    }

    async closeAllOppSubtabs(){
        if(this.isConsoleNavigation){
            const tabInfo = await getFocusedTabInfo()
            if(tabInfo.subtabs){
                tabInfo.subtabs.forEach(async tab=>{
                    if(tab.iconAlt==="Opportunity"){
                       await q(tab.tabId)
                    }
                })
            }
        }
    }
}