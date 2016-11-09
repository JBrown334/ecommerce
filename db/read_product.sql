select productname, productprice, productimage, productdescription
from products
where productid = $1;
