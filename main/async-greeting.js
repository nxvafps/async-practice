const delayedGreeting = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`this is displayed after 1 second`), 1000);
  });
};

getGreeting = async () => {
  const message = await delayedGreeting();
  return message;
};

// getGreeting().then((message) => console.log(message));

module.exports = getGreeting;
