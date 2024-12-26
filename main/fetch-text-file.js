const fetchTextFile = (url) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log("fetch error:", error);
      throw error;
    });
};

module.exports = fetchTextFile;
