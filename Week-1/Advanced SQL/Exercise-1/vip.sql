declare
begin
    for cust_rec in(
        select cust_id
        from Customers
        where balance>10000
    )loop
        Update Customers
        set is_vip = 'TRUE'
        where cust_id = cust_rec.cust_id;
    end loop;
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('VIP statuses updated for high-balance customers.');
exception
    when others then
        rollback;
        DBMS_OUTPUT.PUT_LINE('Error occured: ' || SQLLERM);
end;
/