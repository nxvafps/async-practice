const promiseChain = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved value");
    }, 1000);
  })
    .then((value) => {
      console.log("start");
      return value;
    })
    .then((value) => {
      console.log(value);
      console.log("end");
    })
    .catch((error) => {
      console.error(`an error has occurred: ${error}`);
    });
};

module.exports = promiseChain;
