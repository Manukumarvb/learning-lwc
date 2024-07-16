public with sharing class refreshContactController {


@AuraEnabled(cacheable=true)
   public static List<Contact> getContactList() {

    return [SELECT ID,FirstName,LastName,Email FROM Contact LIMIT 10];

    }
}