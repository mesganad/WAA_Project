package webshop.domain;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;

public class Account {
    private String cardType;
    private String accountNumber;
    private String expDate;
    private String codeValidation;

    public Account(){

    }

   // DateTimeFormatter formatter=DateTimeFormatter.ofPattern("d/MM/yyyy");
    public Account(String cardType, String accountNumber,String expDate,String codeValidation) {
        this.cardType = cardType;
        this.accountNumber = accountNumber;
        this.expDate =expDate;
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
