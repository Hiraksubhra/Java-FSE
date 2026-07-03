begin
declare
for reminder_rec in (
    select c.cust_id, l.loan_id, l.due_date
    from Loans l
    join Customers c on c.cust_id = l.cust_id
    where l.due_date between sysdate and (sysdate + 30)
) loop
    DBMS_OUTPUT.PUT_LINE(
            'REMINDER: Customer ID ' || reminder_rec.customer_id || 
            ' - Loan ID ' || reminder_rec.loan_id || 
            ' is due soon on ' || TO_CHAR(reminder_rec.due_date, 'YYYY-MM-DD') || '.'
        );
    end loop;
end;
/