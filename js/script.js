
//===ОБЪЕКТЫ OBJECTS=====================================================================================================================================================

//===Доcтуп к значению свойства с использованием точки============================//

// const myCity = {
// 	city: 'New York',
// 	popular: 'true',
// 	country: 'USA',
// };

// console.log(myCity.city);

// console.log(myCity.popular);

//===Доcтуп к значению свойства с использованием точки============================//

// const myCity = {
// 	city: 'New York',
// }

// myCity.popular = true;

// console.log(myCity);

// const countryPropertyName = 'country';

// myCity[countryPropertyName] = 'USA';

// console.log(myCity);




//===Добавление свойств============================//

// const myCity = {
// 	city: 'Las Vegas',
// };

// myCity.city = 'Kharkov';

// console.log(myCity);

//===Добавление свойств и использование переменных============================//

// const myCity = {
// 	city: 'New York',
// };

// myCity.popular = true;

// console.log(myCity);

// myCity.country = 'USA';

// console.log(myCity);

// const name = 'Vova';
// const postsQty = 23;

// const userProfile = {
//    name: name,
//    postsQty: postsQty,
//    hasSignedAgreement: false,
// }

// console.log(userProfile);

// const name = 'Vova';
// const postsQty = 23;

// const userProfile = {
//    name,
//    postsQty,
//    hasSignedAgreement: false,
// }

// console.log(userProfile);

//===Удаление свойств============================//

// const myCity = {
// 	city: 'New York',
// 	popular: true,
// 	country: 'USA',
// };

// delete myCity.country;

// console.log(myCity);

//===Вложенные свойства============================//

// const myCity = {
// 	city: 'New York',
// 	info: {
// 		isPopular: true,
// 		country: 'USA',
// 	}
// }

// console.log(myCity.info.isPopular);

// delete myCity.info['isPopular'];

// console.log(myCity);

//===ГЛОБАЛЬНЫЕ ОБЪЕКТЫ=====================================================================================================================================================

// window - в браузере

// global - в node

// globalThis - браузер + node


//===СВОЙСТВА ГЛОБАЛЬНЫX ОБЪЕКТОВ=====================================================================================================================================================

// console 

// window.console

// global.console


//===МЕТОДЫ =====================================================================================================================================================

// Это свойство объекта, значение которого функция

// const myCity = {
//    city: 'New York',
//    cityGreeting: function () {
//       console.log('Greetings');
//    }
// }

// myCity.cityGreeting();

//======Сокращенный формат записи методов===========

// const myCity = {
//    city: 'New York',
//    cityGreeting() {
//       console.log('Greetings');
//    }
// };

// myCity.cityGreeting();

//===JSON =Javascript Oject Notation====================================================================================================================================================

// Это формат обмена данными между компьютерами в интернете. Он передается в виде строки 

// { 
// 	"userId": 1,
// 	"id": 1,
// 	"title": "Test title",
// 	"status": {
// 		"completed": false
// 	}
// }

//===Конвертация JSON в объект происходит с помощью метода JSON.parse()

//===Конвертация  ОБЪЕКТА в JSON происходит с помощью метода JSON.stringify()


// const post = {
//    title: 'My post',
//    likesQty: 5,
// }

// post

// JSON.stringify(post);
// const postStringified = JSON.stringify(post);

// JSON.parse(postStringified);


//===Мутации в JAVASCRIPT =====================================================================================================================================================//

// const person = {
//    name: 'Bob',
//    age: 25,
// }

// const person2 = person;

// person2.age = 26;
// person2.isAdult = true;

// console.log(person.age);
// console.log(person2.isAdult)

//===Как избежать мутаций 1-й вариант

// const person = {
//    name: 'Bob',
//    age: 25,
// };


// const person2 = Object.assign({}, person);

// person2.age = 26;

// console.log(person2.age);
// console.log(person.age);

//===Как избежать мутаций 2-й вариант

// const person = {
// 	name: 'Bob',
// 	age: 25,
// };

// //... оператор разделения объекта на свойства (оператор спрэд). Ссылки на вложенные объекты сохраняются . Аналог Object.Assign- это в том случае, если в объекте нет вложенных объектов
// const person2 = {...person}

// person2.name = 'Alice';

// console.log(person2.name);
// console.log(person.name);


// //===Как избежать мутаций 3-й вариант. Полностью избежать мутаций

// const person = {
//    name: 'Bob',
//    age: 25,
// };

// //JSON.stringify конвертируем обект person в строку а потом передаем ее аргументов JSON.parse - конвертация в объект. Получается двойная конвертация . В итоге мы получим новый обект и в этом объекте мы можем менять любые свойства 
// const person2 = JSON.parse(JSON.stringify(person));


// person2.name = 'Alice';

// console.log(person2.name);
// console.log(person.name);

// ФУНКЦИИ  Это блок кода, который можно выполнять многократно========================================================================================================================================================//


// let a = 5;
// let b = 3;

// function sum(a,b) {
//    const c = a + b;
//    console.log(c);
// }

// sum(a, b);

// a = 8;
// b =12;

// sum(a, b);

//============================

// Функция может быть: именованной, присвоена переменной, анонимной, аргументом при вызове другой функции(callback функции), значением свойства (метода) объекта. Функция это объект, соответственно у функции есть свойства

// Чтобы отобразить свойства объекта используем console.dir(myFn);
// function myFn(a, b) {
//    let с
//    a = a + 1;
//    с = a + b;
//    return c
// }

//===Вызов функции

// function myFn(a, b) {
//    let с
//    a = a + 1;
//    с = a + b;
//    return c;
// }

// myFn(10, 3);

//===Передача значения по ссылке

// const personOne = {
//    name: 'Bob',
//    age: 21,
// };

// function increasePersoneAge (person) {
//    person.age += 1;
//    return person
// };

// increasePersoneAge(personOne);
// console.log(personOne.age);

//===Создание копии объекта

// const personOne = {
//    name: 'Bob',
//    age: 21,
// };

// function increasePersonAge(person) {
//    const updatePerson = Object.assign({}, person);
//    updatePerson.age += 1;
//    return updatePerson;
// };

// const updatePersonOne = increasePersonAge(personOne);
// console.log(personOne.age);
// console.log(updatePersonOne.age);

// console.log(updatePersonOne);

//===CALLBACK функции

// function anotherCallback() {
//    //Действия
// };

// function fnWidthCallback(callbackFunction) {
//    callbackFunction()
// };


// fnWidthCallback(anotherCallback);


// function printName() {
//    console.log('Bogdan');
// };

// console.log('Start');

// setTimeout(printName, 1000);

//===Правила работы с функциями

/*
1.называть функции исходя из выполняемых задач
2.одна функция должна выполнять одну задачу
3.не рекомендуется изменять внешние относительно функции переменные
 */

// ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ========================================================================================================================================================//

// Объявленная функция

// function myFn(a, b) {
// 	let с
// 	a = a + 1;
// 	c = a + b;
// 	return c;
// };

// Функциональное выражение - всегда аононимные

// function (a, b) {
// 	let с
// 	a = a + 1;
// 	c = a + b;
// 	return c;
// };

// присваивание функционального выражения переменной
// const myFunction = function(a, b) {
//    let c;
//    a = a + 1;
//    с = a + b;
//    return c;
// };

// myFunction(5, 3);


// Функциональное выражение в вызове другой функции

// setTimeout(function() {
//    console.log('отложенное сообщение')
// }, 3000);

//===СТРЕЛОЧНЫЕ ФУНКЦИИ это выражение и они всегда анонимные

// (a, b) => {
//    let c;
//    a = a + 1;
//    с = a + b;
//    return c;
// };

// const myFunction = (a, b) => {
//    let c;
//    a = a + 1;
//    с = a + b;
//    return c;
// };


// myFunction(5, 3);


//===Стрелочная функция в вызове другой функции
// setTimeout(() => {
//    console.log('Отложенное сообщение'), 3000
// });

//===Скоращения в стрелочных функциях

/*
1.Если один параметр, то круглые скобки можно опустить
a => {
	// Телофункции
};

2. Фигурные скобки можно опуститьесли тело функции состоит из одного выражения
(a, b) => a + b;
В этом случае стрелочная функция неявно возвращает результат выражения  
*/

// значения параметров функции по умолчанию
// function multByFactor(value, multiplier = 1) {
//    return value * multiplier
// };

// multByFactor(10, 2);
// multByFactor(5);


// const newPost = (post, addeAt = Date()) => ({
//    ...post,
//    addeAt,
// });

// const firstPost = {
//    id: 1,
//    author: 'Bogdan',
// };


// newPost(firstPost);


//========================================================================================================================================================


// ОБЛАСТИ ВИДИМОСТИ========================================================================================================================================================//

// определяет границы видимости переменной

// let a;
// let b;

// function myFn() {
//    let b;
//    a = true;
//    b = 10;
//    console.log(b);
// }

// myFn();

// console.log(a);
// console.log(b);

// const a = 5;

// function myFn() {
//    function innerFn() {
//       console.log(a);
//    }
//    innerFn();
// }

// myFn();


// Здесь показана ситуация для переменной a, так лучше не делать совсем, не трогать глобальные переменные, то есть не присваивать им другие значения в локальных областях

// let a;
// let b;

// function myFn() {
//    let b;
//    a = true;
//    b = 10;
//    console.log(a);
// }

// myFn();

// console.log(a);


//===Типы областей видимости

/*
1. Глобальная область видимости
2. Область видимости функции 
3. Область видимости блока - переменные, объявленные с помощью let и const внутри блока имеют область видимости, ограниченную этим блоком
 */ 

//===Правила работы с переменными

/*
1. Все переменные объявлять перед их использованием
2.Стараться использовать const везде, где это возможно
3.Внутри функции не изменять переменные с внешних областей видимости
 */ 




//ОПЕРАТОРЫ========================================================================================================================================================//

// оператор это встроенная функция

// операторы бывают

/* Символьные
1. Арифмитические + = * /
2. Сравнения === !== <= >=
3. Логические ! && ||
4. Присванивания = 
 */ 

/* Текстовые
1. typeof
2. instanceof (принадлежность объекта к тому или иному классу)
3.new 
4.delete
 */ 

// оператор && - оператор короткого замыкания

// Выражение 1 && Выражение 2

/*
Если Выражение 1 ложно
1. Выражения 2 игнорируется
2. Возращается результат Выражения 1
3. Требует правдивости двух выражений
Если Выражение 1 истина мы оцениваем выражение 2
1. Если выражение 2 ложно то возращается результат этого выражения
2. Если выражение 2 истина то так же возрвращается выражение 2
*/


// оператор || 

// Выражение 1 && Выражение 2

/*
Если Выражения 1 истинно:
1.Выражение 2 игнорируется
2. Возвращается результат Выражения 1
*/

// оператор ю... - оператор разделения объекта на свойства


// const button = {
//    width: 200,
//    text: 'Bye',
// };

// const redButton = {
//    ...button,
//    color: 'red',
// };
// если у объекта button есть свойсвто color его значение будет перезаписано

// console.table(redButton);

// const buttonInfo = {
//    text: 'Buy',
// };

// const buttonStyle = {
//    color: 'yellow', 
//    width: 200,
//    height: 300,
// };

// const button = {
//    ...buttonInfo,
//    ...buttonStyle,
// };

// console.table(button);


//КОНКАТЕНАЦИЯ СТРОК========================================================================================================================================================//

// 'Hello ' + 'world';

// const hello = 'Hello';
// const world = 'World';

// const greeting = hello + ' ' + world;

// console.log(greeting);

//===Шаблонные строки========

//

// ОБРАБОТКА ОШИБОК========================================================================================================================================================//

// const fnWidthError = () => {
//    throw new Error('Some error')
// };

// fnWidthError();
// console.log('Continue...');

// Непойманная ошибка в примере выше.

// TRY / CATCH

/*
try{
	Выполнение блока кода
} catch (error) {
	Этот блок выполняется в случае возникновения ошибок в блоке try
};
*/

// const fnWidthError = () => {
//    throw new Error('Some error')
// };

// try {
//    fnWidthError();
// } catch(error) {
//    console.error(error);
//    console.log(error.message);
// };

// console.log('Continue');

// Инструкции========================================================================================================================================================//

/*
1. Выражение - всегда возвращает выражение( например присваивание значения )
Выражение всегда возвращает значение
2. Инструкция ( например объявление переменной с помощью let). Инструкция выполняет определенное действие
3.Выражение - инструкция
 */


// Массивы========================================================================================================================================================//

// это объект с цифровыми именами свойств

/*
МЕТОДЫ МАССИВА
1. push
2. pop
3.shift
4.unshift
5.forEach
6.map
7. ruduce
8.filter
*/

//push добавляем элемент в конец массива

// const myArray = [1, 2, 3];
// console.log(myArray);

// myArray.push(4);
// console.log(myArray);


// myArray.push(true);
// console.log(myArray);

//push удаляет последний элемент в массиве

// const myArray = [1, 2, 3];
// console.log(myArray);

// myArray.pop();
// console.log(myArray);


// const removedElement = myArray.pop();
//возвращает удаленное значение
// console.log(myArray);
// console.log(removedElement);

//unshift добавляет элемент в начало массива


// const myArray = [1, 2, 3];
// console.log(myArray);

// myArray.unshift(true);
// console.log(myArray);


// myArray.unshift('abc');
// console.log(myArray);

//shift удаляет первый элемент массива

// const myArray = [1, 2, 3];
// console.log(myArray);

// myArray.shift();
// console.log(myArray);

// const removedElement = myArray.shift();
// console.log(myArray);
// console.log(removedElement);

// forEach в вызове этого метода передается функция. Этот метод будет перебирать все элементы массива и для каждого элемента массива метод forEach будет вызывать вот эту callback функцию и в эту callback функцию в качестве значений в качестве параметров el будет передаваться значение определенного элемента массива то есть в данном случае в методе forEach внутри него находится цикл, который перебирает все элементы массива и вызывает callback функцию столько раз сколько у нас есть элементов в массиве и в результате вызова этой функции мы получим в консоли три разных сообщения, важно что метод forEach не меняет оригинальный массив



// const myArray = [1, 2, 3];
// console.log(myArray);


// myArray.forEach(el => console.log(el * 2));
// console.log(myArray);
// //Оригинальный массив не изменился

// const myArray = [1, 2, 3];
// console.log(myArray);


// const result = myArray.forEach(el => console.log(el * 2));
// console.log(result); 
// console.log(myArray);
// //Он возвращает underfind всегда если его вызывать, его задача это перебор элементов 

// const myArray = ['first', 'second', 'third']

// myArray.forEach((element, index) => {
//    console.log(element, index)
// })

// метод массивов forEach

// const myArray = [true, 10, 'abc', null]

// myArray.forEach(element => {
//    console.log(element)
// })

// map метод также ожидает в качетсве аргумента callback функцию, но map возвращает новый массив, похожим образом как и forEach перебирает все элементы массива и то что возвращает эта callback функция создает новый массив и формирует его исходя из результатов callback функции

// const myArray = [1, 2, 3];
// console.log(myArray);

// const newArray = myArray.map(el => el * 3);

// console.log(newArray);
// console.log(myArray);
// // Оригинальный массив не изменился

// const myArray = [1, 2, 3];
// console.log(myArray);

// const newArray = myArray.map((el) => {
//    return el * 3;
// });

// console.log(newArray);
// console.log(myArray);

// const myArray = [1, 2, 3];
// console.log(myArray);

// const newArray = myArray.map(function (el) => {
//    return el * 3;
// });

// console.log(newArray);
// console.log(myArray);

// переводим объект в массив
// const myObject = {
//    x: 10,
//    y: true,
//    z: 'abc',
// }
// //keys -получение всех ключей объекта в виде массива
// Object.keys(myObject).forEach(key => {
//    console.log(key, myObject[key] )
// })

// const myObject = {
//    x: 10,
//    y: true,
//    z: 'abc',
// }

// Object.values(myObject).forEach(value => {
//    console.log(value)
// })

// Деструктуризация========================================================================================================================================================//

// деструктуризация объектов

// const userProfile = {
//    name: 'Bogdan',
//    commentsQty: 23,
//    hasSignedAgreement: false,
// };

// const { name, commentsQty } = userProfile;
// const { hasSignedAgreement } = userProfile;

// console.log(name);
// console.log(commentsQty);

// деструктуризация массивов
// const fruits = ['Apple', 'Banana'];

// const [fruitOne, fruitTwo] = fruits;

// console.log(fruitOne);
// console.log(fruitTwo);

// деструктуризация в функциях

// const userProfile = {
//    name: 'Bogdan',
//    commentsQty: 23,
//    hasSignedAgreement: false,
// };

// const userInfo = ({name, commentsQty}) => {
//    if (!commentsQty) {
//       return `User ${name} has no comments`;
//    }

//    return `User ${name} has ${commentsQty} comments`;
// }

// userInfo(userProfile);

// Условные инструкции========================================================================================================================================================//

/*
1. if
2. if...else
3.switch
4.тернарный оператор
*/

// инструкция if

// if (условие) {
// 	Блок кода, выполняемый однократно, если условие правдиво
// }

// let val = 10;

// if (val > 5) {
//    val += 20;
// }

// console.log(val)

// const person = {
//    age: 20,
// }

// if (!person.name) {
//    console.log('Имя не указано')
// }


// инструкция if...else

// if (условие) {
// 	блок кода, выполняемый однократно, если условие правдиво
// } else {
// 	блок кода, выполняемый однократно, если условие ложно

// }

// let val = 10;

// if (val < 5) {
//    val += 20
// } else {
//    val -= 20
// }

// console.log(val)


// инструкция if else if

// if (условие 1) {
// 	блок кода, выполняемый однократно, если условие 1 правдиво
// } else if (условие 2) {
// 	блок кода, выполняемый однократно, если условие 2 правдиво
// } else {
// 	блок кода, выполняемый однократно, если предыдущие условия ложны
// }

// const age = 25

// if (age > 18) {
//    console.log('Is asult')
// } else if (age >= 12) {
//    console.log('Is teenager')
// } else {
//    console.log('Is child')
// }

// const age = 25

// if (age >= 18) {
//    console.log('Is asult')
// }
// if (age >= 12 && age < 18) {
//    console.log('Is teenager')
// } 
// if (age < 12) {
//    console.log('Is child')
// }  

// const sumPositiveNumbers = (a, b) => {
//    if (typeof a !== 'number' || typeof b !== 'number') {
//       return 'One of the arguments is not a number'
//    }
//    if ( a <= 0 || b <= 0) {
//       return 'Numbers are not positive'
//    }
//    return a + b
// }

// инструкция if else if

// const age = 16 

// if (age > 18) {
//    console.log('Is asult')
// } else if (age >= 12) {
//    console.log('Is teenager')
// } else {
//    console.log('Is child')
// }



// switch (Выражение) {
// 	case A:
// 		Действия если Выражение === А
// 		break
// 	case B:
// 		Действия если Выражение === А
// 		break
// 	default:
// 		Действия по умолчанию

// }

// const month = 2

// switch (month) {
//    case 12:
//       console.log('Декабрь')
//       break
//    case 1:
//       console.log('Январь')
//       break
//    case 2:
//       console.log('Февраль')
//       break
//    default:
//       console.log('Это не зимний месяц')
// }

// ТЕРНАРНЫЙ ОПЕРАТОР - у него три операнда. Конструкция с тернарным оператором - выражение, а выражение возвращает всегда значение

// Условие ? Выражение 1 : Выражение 2

// Условие
// ? Выражение 1
// : Выражение 2


// const value = 11

// value
// ? console.log('Условие истинно')
// : console.log('Условие ложно')


// const value1 = 11
// const value2 = 25

// value1 && value2
// ? myFunction1(value1, value2)
// : myFunction2()

// let value = 11
// console.log(value >= 0 ? value : -value)

// value = -5
// const res = value >= 0 ? value : -value
// console.log(res)



// Циклы========================================================================================================================================================//

/*
Типы циклов
1. for
2. for...in
3.while
4.do...while
5.for...of
*/

// ===== цикл for можно использовать для массивов, но не рекомендуется

// for (Начальная инструкция; Условие; Итерационное действие) {
// 	Блок кода, выполняемый на каждой итерации
// }

// for (let i =0; i<5, i++) {
// 	console.log(i)
// }

// const myArray = ['first', 'second', 'third']

// for (let i = 0; i < myArray.length; i++) {
//    console.log(myArray[i])
// }

// ===== цикл while позволяет выполнять блок кода пока условие правдиво

// while (Условие) {
// 	Блок кода, выполняемый на каждой итерации
// }

// let i = 0

// while (i<5) {
//    console.log(i)
//    i++
// }


// ===== цикл do while выполнится как минимуи один раз

// do {
// 	блок кода, выполняемый на каждой итерации
// } while (Условие)

// let i = 0

// do {
//    console.log(i)
//    i++
// } while (i < 5)

// let i = 10

// do {
//    console.log(i)
//    i++
// } while (i < 5)

// ===== цикл for in

// for (key in Object) {
// 	Действия с каждым свойством объекта
// 	Значения свойства - Object[key]
// }

// const myObject = {
//    x: 10,
//    y: true,
//    z: 'abc',
// }

// for (const key in myObject) {
//    console.log(key, myObject[key])
// }
//myObject[key] дает значение по ключу


// ===== for in для массивов

// const myArray = [true, 'abc', null]

// for (const key in myArray) {
//    console.log(myArray[key])
// }

// ===== цикл for of цикл for of  Не для объектов

// for (Element of Iterable) {
// 	Действия с определенным элементом
// }
// Iterable любое значение либо переменная, которая содержит значение по которому можно итерироваться, элементы которого можно перебирать, например в любой строке можно перебирать символы, Element будет представлять символ в строке, то есть переменная которая доступна в каждом цикле итерации

//для строк
// const myString = 'Hey'

// for (const letter of myString) {
//    console.log(letter)
// }

// для массивов
// const myArray = [true, 10, 'abc', null]

// for (const element of myArray) {
//    console.log(element)
// }

/*
НУЖНО ЗНАТЬ КАК ПЕРЕБИРАТЬ ЭЛЕМЕНТЫ МАССИВОВ И ОБЪЕКТОВ
ДЛЯ МАСИИВОВ СООТВЕТСТВУЮЩИЕ МЕТОДЫ FOREACH MAP INDEXOF И ТД, А ДЛЯ ОБЪЕКТОВ ЕСТЬ ВОЗМОЖНОСТЬ КОНВЕРТАЦИИ ОБЪЕКТОВ В МАССИВЫ ИСПОЛЬЗУЯ Objects.keys либо же Object.Values
*/



// МОДУЛИ========================================================================================================================================================//

// позволяют структурировать код

/*
Синтаксис
1. export ...
2.import  ...
*/

//moduleOne.js
// const myName = () => {
//    console.log('Bogdan')
// }

// export default myName

//moduleTwo.js
// 

// КЛАССЫ И ПРОТОТИПЫ========================================================================================================================================================//

// классы позволяют создавать прототипы для объектов, на основании прототипов создаются экземпляры. Экземпляры могут иметь собственные свойства и методы которые привязаны к конкретному экземпляру. Экземпляры наследуют свойства и методы прототипов.

// class Comment {
//    constructor(text) {
//       this.text = text
//       this.votesQty = 0
//    }

//    upvote() {
//       this.votesQty += 1
//    }
// }

//===Создание экземпляра
// const firstComment = new Comment('First comment')

// console.log(firstComment)


// ПРОМИСЫ========================================================================================================================================================//

