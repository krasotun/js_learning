// Суть в том, что на каждом шаге мы берем элемент из середины отсортированного массива
//  и проверяем, равен ли он искомому.
//  Если он больше, продолжаем искать в левой части.
//  Если меньше – в правой. И так до тех пор, пока не найдём

const myArr = [1, 2, 3, 4, 5];

export default function (path1, path2, cb) {
  fs.readFile(path1, "utf-8", (error1, data1) => {
    if (error1) {
      cb(error1);
      return;
    }
    fs.readFile(path2, "utf-8", (error2, data2) => {
      if (error2) {
        cb(error2);
        return;
      }
      console.log(data1, data2);
    });
    cb(compare(data1, data2));
  });
}
