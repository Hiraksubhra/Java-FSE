declare
begin
    for loan_rec in(
        select c.cust_id, l.loan_id, l.interest_rate
        from Customers c
        join Loans l on c.cust_id = l.cust_id
        where c.age > 60
    ) loop
        Update Loans
        set interest_rate = interest_rate-1
        where loan_id =  loan_rec.loan_id;
    end loop;

    commit;

    DBMS_OUTPUT.PUT_LINE('Discounts applied to senior citizen loans successfully.');

exception
    when others then
        rollback;
        DBMS_OUTPUT.PUT_LINE('Error occured: ' || SQLLERM);
end;
/
