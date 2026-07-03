create or replace procedure TransferFunds(
    p_from_account in number,
    p_to_account in number,
    p_amount in number,
)
is 
    v_source_balance number;
    e_insufficient_funds exception;

    Begin
        if p_amount <= 0 then
        DBMS_OUTPUT.PUT_LINE('Transfer amount must be greater than zero.');
        RETURN;
    END IF;

    select balance into v_source_balance
    from Accounts
    WHERE account_id = p_from_account
    for update;

    if v_source_balance<p.amount then
        raise e_insufficient_funds;
    end if;

    update accounts
    set balance = balance-p.amount
    where account_id = p_from_account;

    update accounts
    set balance = balance + p_amount;
    where account_id = p_to_account;

    commit;

    DBMS_OUTPUT.PUT_LINE('Successfully transferred $' || p_amount || ' from account ' || p_from_account || ' to ' || p_to_account);

    EN e_insufficient_funds THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient funds in source account.');
    WHEN NO_DATA_FOUND THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Transfer failed: One or both account IDs do not exist.');
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('An unexpected error occurred: ' || SQLERRM);
END TransferFunds;
/


