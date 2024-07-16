public class EinsteinTesting {

    public static List<Account> getAccounts() {
        return [SELECT Id, Name, Type, Industry FROM Account LIMIT 10];
    }


    public static List<Account> getRecAccountsWithContacts() {
        List<Account> accountsWithContacts = [SELECT Id, Name, (SELECT Id FROM Contacts) FROM Account LIMIT 5];
        return accountsWithContacts;
    }
  


    public List<Account> getAccounts() {
        List<Account> accounts = [SELECT Id, Name, Industry, Type FROM Account LIMIT 10];
        return accounts;
    }
