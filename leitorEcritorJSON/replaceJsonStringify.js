const obj = { name: 'John', password: '123456' };
const jsonString = JSON.stringify(obj, (key, value) => {
  if (key === 'password') {
    return undefined;
  }
  return value;
});
console.log(jsonString); // Output: '{"name":"John"}'
