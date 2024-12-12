const checkShoeValid = (obj) => {
  const keys = {
    name: true,
    price: true,
    discount: true,
    description: true,
    rating: true,
    prod_date: true,
    status: true,
    brand: true,
    category: true,
    image: true,
    sizes: {
      size: true,
      quantity: true
    }
  }

  for(const key in keys) {
    if(!obj.hasOwnProperty(key))
      return false;

    if(key == 'sizes')
      for(const size of obj['sizes']) {
        if(!size.hasOwnProperty('size') || !size.hasOwnProperty('quantity'))
          return false;
      }
  }

  return true;
}

module.exports = {
  checkShoeValid
};