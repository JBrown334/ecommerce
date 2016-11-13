update products
  set productdescription = $1, productname = $2, productimage = $3
  where productid = $4;
