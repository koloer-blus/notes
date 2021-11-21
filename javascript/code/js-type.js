function typeOf (obj) {
  const type =  Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  console.log(type);
  return type;
};

typeOf('test');
typeOf(1);
typeOf(() => {});
typeOf({a: 2});
typeOf(null);
typeOf(undefined);