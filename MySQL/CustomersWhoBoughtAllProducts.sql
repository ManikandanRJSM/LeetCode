# Write your MySQL query statement below
select D.customer_id from (select group_concat(distinct(product_key) order by product_key) cnt, customer_id from Customer group by customer_id) D where D.cnt = (select group_concat(product_key order by product_key) from Product);
