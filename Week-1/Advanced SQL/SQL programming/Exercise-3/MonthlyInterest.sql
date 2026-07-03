create or replace procedure ProcessMonthlyInterest
is 
Begin
    Update Accounts
        set balance = balance + (balance * 0.01)
        where account_type = 'SAVINGS';

        commit;

        DBMS_OUTPUT.PUT_LINE('Monthly interest of 1% applied to all savings accounts.');
exception
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error processing interest: ' || SQLERRM);
END ProcessMonthlyInterest;
/