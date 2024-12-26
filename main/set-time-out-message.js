const delay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("this is shown after 2 seconds");
      resolve();
    }, 2000);
  });
};

module.exports = delay;
