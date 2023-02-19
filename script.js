function sendData() {
  var inputElement = document.getElementById("input");
  var inputValue = inputElement.value;

  // Send the data to your GitHub repository using the GitHub API
  fetch("https://api.github.com/repos/your-username/your-repository/contents/data.txt", {
    method: "PUT",
    headers: {
      "Authorization": "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",
      "Content-Type": "application/json",
      "Accept": "application/vnd.github.v3+json"
    },
    body: JSON.stringify({
      message: "Add data from form",
      content: btoa(inputValue),
      sha: null,
      branch: "main"
    })
  })
  .then(response => {
    console.log("Data sent successfully!");
  })
  .catch(error => {
    console.error("Error sending data:", error);
  });
}
