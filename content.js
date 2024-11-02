const biasedGitUsers = localStorage.getItem("biasedGitUsers") || "[]";
const users = JSON.parse(biasedGitUsers);
setInterval(() => {
  if (document.querySelectorAll("#repository-link").length !== 2) return;
  const urls = Array.from(document.querySelectorAll("#repository-link")).filter(
    (e) =>
      !e.parentElement.parentElement.parentElement.classList.contains(
        "bias-select-me",
      ),
  );
  for (const url of urls) {
    if (users.some((u) => url.href.includes(u))) {
      url.parentElement.parentElement.parentElement.classList.add(
        "bias-select-me",
      );
    }
  }
}, 50);
