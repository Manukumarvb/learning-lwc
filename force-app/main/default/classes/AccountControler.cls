public with Sharing class AccountControler {
  
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Id, Name, Type, Industry from Account LIMIT 5];
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountByType(String type){
        return [SELECT Id, Name, Type, Industry from Account where Type=:type LIMIT 5];
    }

     @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey){
        String key ='%'+searchKey+'%' ;
        return [SELECT Id, Name, Type, Industry from Account where Name LIKE:key LIMIT 5];
    }

    

}