const sequentialTimeout = () => {
  setTimeout(() => {
    console.log("hello");
    setTimeout(() => {
      console.log("world");
    }, 1000);
  }, 1000);
};

module.exports = sequentialTimeout;
