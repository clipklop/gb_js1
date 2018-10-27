// Homework#4 GB_JS1
/*
  Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
  Продолжаем работу с нашим интернет-магазином 2.1. В прошлом ДЗ Вы реализовали корзину на базе массивов. Какими объектами можно заменить элементы данных массивов? 2.2. Реализуйте такие объекты 2.3. Перенесите функционал подсчета корзины на объектно-ориентированную базу
  * Подготовить макет страницы интернет-магазина по подобию приложенной к уроку картинки.
  * Подумайте над глобальными сущностями. К примеру, сущность “Продукт” в интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект “Продукт” имел единую структуру для различных модулей нашего сайта, но в разных местах давал возможность вызывать разные методы.
*/

/*
  Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
  мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
  десятки и сотни. Например, для числа 245 мы должны получить следующий объект: 
  {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать 
  соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/
const numbToObj = (number) => {
  let output = {};
  
  if (!Number.isInteger(number)) {
    console.log('Please provide three-digit number.');
    return output;
  }

  let parseNumb = number.toString().split('');
  

  if (parseNumb.length > 3 || parseNumb.length < 3) { 
    console.log('Please provide three-digit number.');
    return output;
  }

  for (let i = 0; i < parseNumb.length; i++) {
    i === 0 ? output['сотни'] = parseNumb[i] :
     i === 1 ? output['десятки'] = parseNumb[i] :
      output['единицы'] = parseNumb[i];
  }

  return output;
};

console.log(numbToObj(403))