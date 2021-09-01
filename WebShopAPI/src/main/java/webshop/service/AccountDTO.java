package webshop.service;

import java.util.Date;

public class AccountDTO {
    private String cardType;
    private String accountNumber;
    private String expDate;
    private String codeValidation;
    

    public AccountDTO(){

    }
    public AccountDTO(String cardType, String accountNumber,String expDate, String codeValidation) {
        this.cardType = cardType;
        this.accountNumber = accountNumber;
        this.expDate = expDate;
        this.codeValidation = codeValidation;
    }

    public String getCardType() {
        return cardType;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public String getExpDate() {
        return expDate;
    }

    public String getCodeValidation() {
        return codeValidation;
    }

    public void setCardType(String cardType) {
        this.cardType = cardType;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public void setExpDate(String expDate) {
        this.expDate = expDate;
    }

    public void setCodeValidation(String codeValidation) {
        this.codeValidation = codeValidation;
    }
}
