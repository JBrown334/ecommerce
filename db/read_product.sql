select productname, productprice, productimage, productdescription
from products
where id = $1;
