// creating nasted loop

var n = 20
for(var i = 1;i<=n;i++){
  var result = ''
for(var j=1;j<=i;j++){
 result += j + ' '
}
console.log(result)
}


// creating ster
var n =5
for (var i = 1; i<=n;i++){
  var result = ' '
  for(var j = 1; j<=n; j++){
    result += ' * '
  }
  console.log(result)
}

// loop break in while loop

while (true) {
  var rand = Math.floor(Math.random() * 10 + 1);
  if (rand === 9) {
    console.log("Winner Winner Chicken Dinner");
    break;
  } else {
    console.log("You have got " + rand);
  }
}

// loop break in for loop

for (var i = 1; i < 10; i++) {
  if (i % 5 === 0) {
    break;
  } else {
    console.log(i);
  }
}


// Continue Statement

for (var i = 0; i < 10; i++){
  if(i=== 3 || i === 7){
    continue
  }
  console.log(i)
}

// Infinity for loop

for(; ;){
  var rand = Math.floor(Math.random()* 10 + 1)
  if(rand === 9){
    console.log('Winner Winner Chicken Dinner')
    break
  }else{
    console.log('You have got ' + rand)
  }
}

// String added
var n = 10
// var str = n + ''
// var str = n.toString()
var str = String(n)
console.log(str)


// Escape Notation

// duble coder vitore single code
var str = " this is a 'String'"

// single coder vitore single code
var str = 'this is a \'String\' '

// new line
var str = 'this is a \nString '

// liner vito re tab
var str = 'this is a \tString '

// backslash er jonno
var str = 'this is a \\tString '

console.log(str)

// String Comparision

var a = 'acLK'
var b = 'HOns'
console.log(a>b)


console.log('1' == 1)

// String Method

var a = "I am";
var b = "polash ahmed";

var c = a.concat(' ',b);
// var d = c.substring(11)
// console.log(d)

// console.log(c.charAt(10))

console.log(c.startsWith('I'))
console.log(c.endsWith('ahmed'))
console.log('abc'.toUpperCase())
console.log('ABC'.toLowerCase())
console.log('    kjhgsa  '.trim()) 
console.log(c.split(' '))


// How to find String Length

var str = 'some string'

var length = 0

while(true){
  if(str.charAt(length) == ''){
    break
  }else{
    length++
  }
}

console.log(length)
console.log(str.length)
