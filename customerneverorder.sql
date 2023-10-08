# Write your MySQL query statement below

SELECT NAME AS
    Customers
FROM
    `Customers`
WHERE
    id NOT IN(
SELECT
    customerId
FROM
    `Orders`
)
