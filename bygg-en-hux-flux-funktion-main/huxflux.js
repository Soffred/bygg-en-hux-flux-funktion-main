
const huxflux = () => {
  let list = [];

  for (let i; i < 7; i++);
  let number = Math.floor (Math.random() * 35) +1;
  if(!list.includes(number)){
    list.push(number)
  }else {
    i-=1;
  }
  return list;
}

export {
  huxflux
}
