update products
  set description = $1, name = $2, image = $3
  where id = $4;
