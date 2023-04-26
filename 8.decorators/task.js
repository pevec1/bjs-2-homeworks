//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(args); // получаем правильный хеш c помощью функции md5
    let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хеш которого равен нашему хешу
    let index = cache.findIndex((arr) => arr.hash === hash);
    if (objectInCache) {
      // если элемент найден
      console.log(`Из кэша: ${cache[index].result}`); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
      return `Из кэша: ${cache[index].result}`;
    }

    let result = func(...args); // в кеше результата нет — придётся считать
    cache.push({ hash, result }); // добавляем элемент с правильной структурой
    if (cache.length > 5) {
      cache.shift(); // если слишком много элементов в кеше, надо удалить самый старый (первый)
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  //let args = [];
  let timeoutId = null;
  function wrapper(...args) {
    if (timeoutId === null) {
      console.log(func.call(this, ...args));
      console.log("вызвали first колбек");
      wrapper.count++;
    }
    if (timeoutId) {
      console.log("удалили текущий таймаут");
      clearTimeout(timeoutId);
    }
    console.log("создаем новый таймаут");
    timeoutId = setTimeout(
      () => {
        timeoutId = true;
        console.log(func(...args));
        wrapper.count++;
        console.log("вызвали колбек");
      },
      delay,
      wrapper.allCount++
    );
    // return function (...args) {
    // }
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}
