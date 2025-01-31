export default (filepath, period, cb) => {
  // фиксируем время последней проверки - момент запуска функции
  let lastCheckTime = Date.now();
  // функция проверки файла
  const check = (timerId) => {
    fs.stat(filepath, (err, stats) => {
      // в случае ошибки отключаем таймер
      // и отдаем в колбэк ошибку
      if (err) {
        clearInterval(timerId);
        cb(err);
        return;
      }
      // извлекаем время последней модификации файла
      const { mtimeMs } = stats;
      // если файл был модифицирован после запуска функции,
      // вызываем колбэк и меняем время последней проверки
      if (mtimeMs > lastCheckTime) {
        cb(null);
        lastCheckTime = mtimeMs;
      }
    });
  };
  // создаем таймер и передаем его id в функцию проверки файла
  const timerId = setInterval(() => check(timerId), period);
  return timerId;
};

// END
