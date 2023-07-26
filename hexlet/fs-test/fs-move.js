const fs = require("fs");

const move = (filePath1, filePath2, callBack) => {
  fs.readFile(filePath1, (_readError, fileContent) => {
    console.log(fileContent);
    if (_readError) {
      callBack(_readError);
      return;
    }
    fs.writeFile(filePath2, fileContent.toString(), (_writeError) => {
      if (_writeError) {
        callBack(_writeError);
        return;
      }
      fs.unlink(filePath1, (_error) => callBack(_error));
    });
  });
};

move("from/file.txt", "to/file.txt", (error) => console.log(error));
