const delay = () => {
  setTimeout(() => {
    console.log("this is shown after 2 seconds");
  }, 2000);
};

delay();

module.exports = delay;
