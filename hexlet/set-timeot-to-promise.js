const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

wait(5000).then((res) => console.log(res));
