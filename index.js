function geekFunc() {
  let a = 10;
  try {
    console.log('try');
  } catch (e) {
    console.log('catch');
  } finally {
    console.log('finally');
  }
  
}
geekFunc();