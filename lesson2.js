//Task 1
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2: сначала увеличили a до 2, только потом возвращаем
d = b++; alert(d); // 1: увеличили, но возвращаем старое значение
c = (2+ ++a); alert(c); // 2 + 3 = 5: сначала увеличили a до 3, потом использовали
d = (2+ b++); alert(d); // 2 + 2 = 4: увеличили b до 3, но в этом выражении возвращалось старое значение
alert(a); // после строки 5, а = 3
alert(b); // после строки 6, b = 3
      
//Task 2
var a = 2;
var x = 1 + (a *= 2); // x = 1 + (2 * 2) = 5

//Task 3
for (var i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    console.log('FizzBuzz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else if (i % 3 == 0) {
    console.log('Fizz');
  } else {
console.log(i);
  }
}
