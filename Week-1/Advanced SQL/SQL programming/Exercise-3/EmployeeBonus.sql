create or replace procedure UpdateEmployeeBonus(
    p_department_id in Number,
    p_bonus_percent in Number
)
is 
Begin

    if p_bonus_percent <= 0 THEN
        DBMS_OUTPUT.PUT_LINE('Bonus percentage must be greater than zero.');
        return;
    END if;

    update employees
    set salary = salary + (salary * (p_bonus_percentage / 100))
    where department_id = p_department_id;

    if SQL%ROWCOUNT = 0 then
        DBMS_OUTPUT.PUT_LINE('No employees found in Department ' || p_department_id);
    else
        commit;
        DBMS_OUTPUT.PUT_LINE('Bonus of ' || p_bonus_percentage || '% applied to department ' || p_department_id);
    end if;
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error updating bonuses: ' || SQLERRM);
END UpdateEmployeeBonus;
/