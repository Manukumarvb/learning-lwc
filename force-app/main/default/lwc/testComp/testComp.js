import { LightningElement } from 'lwc';
import {exportCSVFile} from 'c/utils'

export default class TestComp extends LightningElement {

    accountHeaders={
        Id:"Record Id",
        Name:"Name",
        AnnualRevenue:"Annual Revenue",
        Industry:"Industry",
        Phone:"Phone"
    }
    accountData =[
    {Id: '001Hy00001DnH1XIAV', Name: 'Test Base form1', AnnualRevenue: 25000, Industry: 'Chemicals'},
        
        {Id: '001Hy00001ADEkDIAX', Name: 'GenePoint', Phone: '(650) 867-3450', AnnualRevenue: 30000000, Industry: 'Biotechnology'},
         
        {Id: '001Hy00001ADEkFIAX', Name: 'Sample Account for Entitlements'},
        
        {Id: '001Hy00001ADEk3IAH', Name: 'Edge Communications', Phone: '(512) 757-6000', AnnualRevenue: 139000000, Industry: 'Electronics'},
       
        {Id: '001Hy00001ADEk4IAH', Name: 'Burlington Textiles Corp of America', Phone: '(336) 222-7000', AnnualRevenue: 350000000, Industry: 'Apparel'},
        
        {Id: '001Hy00001ADEk5IAH', Name: 'Pyramid Construction Inc.', Phone: '(014) 427-4427', AnnualRevenue: 950000000, Industry: 'Construction'}]

    csvGenerator(){
        //headers, totalData, fileTitle
        exportCSVFile(this.accountHeaders, this.accountData, "test_account_records")
    }
}