/**
 * <div
  id="bias-c"
  dir="ltr"
  data-orientation="horizontal"
  class="flex-1 flex flex-col"
>
  <div class="flex-1 p-3" id="harbor-tab-scroll-element">
    <div
      data-state="inactive"
      data-orientation="horizontal"
      role="tabpanel"
      aria-labelledby="radix-:ro:-trigger-signpost"
      hidden=""
      id="radix-:ro:-content-signpost"
      tabindex="0"
      class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-full"
    ></div>
    <div
      data-state="active"
      data-orientation="horizontal"
      role="tabpanel"
      aria-labelledby="radix-:ro:-trigger-shipyard"
      id="radix-:ro:-content-shipyard"
      tabindex="0"
      class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-full"
      style=""
    >
      <div class="min-h-screen">
        <div class="text-center text-white pt-6">
          <h1
            class="font-heading text-5xl mb-6 text-center relative w-fit mx-auto"
          >
            Config Bias
          </h1>
        </div>
        <div class="mt-6">
          <div class="w-fit mx-auto mb-0 mt-3" style="transform: none">
            <button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition duration-150 active:scale-90 bg-[#9AD9EE] h-10 px-4 py-2 text-xl text-white bg-blend-color-burn"
              id="start-ship-draft"
              style="background: rgb(210, 54, 226)"
              onclick="updateUsers()"
            >
              Update
            </button>
          </div>
          <div class="w-full mt-8">
            <h2 class="text-center text-2xl mb-2 text-blue-500">
              Current Users Added
            </h2>
            <p class="text-center text-xl mb-2 text-white">
              it will check for this username in the repo url for each matchup
              so if you want a regex such as *a* just type <code>a</code> !
            </p>
            <div id="staged-ships-container" class="space-y-4"></div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="config-for-bias"
      data-state="inactive"
      data-orientation="horizontal"
      role="tabpanel"
      aria-labelledby="radix-:ro:-trigger-wonderdome"
      hidden=""
      id="radix-:ro:-content-wonderdome"
      tabindex="0"
      class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-full"
    ></div>
    <div
      data-state="inactive"
      data-orientation="horizontal"
      role="tabpanel"
      aria-labelledby="radix-:ro:-trigger-shop"
      hidden=""
      id="radix-:ro:-content-shop"
      tabindex="0"
      class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-full"
    >
      <div
        id="voting-reason-container-parent"
        class="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
      >
        <div id="voting-reason-container">
          <h3
            class="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mb-4"
          >
            Why are you voting for Lucid (web proxy / unblocker) over the other?
          </h3>
          <textarea
            placeholder="Provide your reason here (minimum 10 words)"
            class="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-md mb-4 text-gray-900 dark:text-white bg-white dark:bg-gray-700 min-h-[150px]"
            rows="6"
          ></textarea>
        </div>
        <button
          id="submit-vote"
          disabled=""
          class="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-lg w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit here
        </button>
      </div>
    </div>
  </div>
</div>

 */
function startup() {
  const div = document.createElement("div");
  div.id = "bias-c";
  div.setAttribute("dir", "ltr");
  div.setAttribute("data-orientation", "horizontal");
  div.className = "flex-1 flex flex-col";
  const scrollElement = document.createElement("div");
  scrollElement.className = "flex-1 p-3";
  scrollElement.id = "harbor-tab-scroll-element";
  div.appendChild(scrollElement);

  const shipyardContent = document.createElement("div");
  shipyardContent.setAttribute("data-state", "active");
  shipyardContent.setAttribute("data-orientation", "horizontal");
  shipyardContent.setAttribute("role", "tabpanel");
  shipyardContent.setAttribute(
    "aria-labelledby",
    "radix-:ro:-trigger-shipyard",
  );
  shipyardContent.id = "radix-:ro:-content-shipyard--bias";
  shipyardContent.setAttribute("tabindex", "0");
  shipyardContent.className =
    "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-full";
  const minScreen = document.createElement("div");
  minScreen.className = "min-h-full";
  const textCenter = document.createElement("div");
  textCenter.className = "text-center text-white pt-6";
  const h1 = document.createElement("h1");
  h1.className =
    "font-heading text-5xl mb-6 text-center relative w-fit mx-auto";
  h1.innerText = "Config Bias";
  textCenter.appendChild(h1);
  minScreen.appendChild(textCenter);
  const mt6 = document.createElement("div");
  mt6.className = "mt-6";
  const wFit = document.createElement("div");
  wFit.className = "w-fit mx-auto mb-0 mt-3";
  wFit.style.transform = "none";
  const button = document.createElement("button");
  button.className =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition duration-150 active:scale-90 bg-[#9AD9EE] h-10 px-4 py-2 text-xl text-white bg-blend-color-burn";
  button.id = "start-ship-draft";
  button.style.background = "rgb(210, 54, 226)";
  button.innerText = "Add username";
  button.onclick = updateUsers;
  wFit.appendChild(button);
  mt6.appendChild(wFit);
  const wFull = document.createElement("div");
  wFull.className = "w-full mt-8";
  const h2 = document.createElement("h2");
  h2.className = "text-center text-2xl mb-2 text-blue-500";
  h2.innerText = "Current Users Added";
  const p = document.createElement("p");
  p.className = "text-center text-xl mb-2 text-white";
  p.innerText =
    "it will check for this username in the repo url for each matchup so if you want a regex such as *a* just type a !";
  const divStagedShips = document.createElement("div");
  divStagedShips.id = "staged-ships-container-bias";
  divStagedShips.className = "space-y-4";
  const ul = document.createElement("ul");
  ul.className = "list-disc list-inside text-center text-white ";
  const biasedGitUsers = localStorage.getItem("biasedGitUsers") || "[]";
  const users = JSON.parse(biasedGitUsers);
  for (const user of users) {
    const li = document.createElement("li");
    li.innerText = user;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.className = "ml-2 text-red-500";
    deleteBtn.onclick = () => {
      const index = users.indexOf(user);
      users.splice(index, 1);
      localStorage.setItem("biasedGitUsers", JSON.stringify(users));
      li.remove();
    };
    li.appendChild(deleteBtn);
    ul.appendChild(li);
  }
  divStagedShips.appendChild(ul);
  wFull.appendChild(h2);
  wFull.appendChild(p);
  wFull.appendChild(divStagedShips);
  mt6.appendChild(wFull);
  minScreen.appendChild(mt6);
  shipyardContent.appendChild(minScreen);
  div.appendChild(shipyardContent);
  if (
    document.getElementsByClassName(
      "rounded-lg bg-card text-card-foreground shadow-sm bg-blend-color-burn w-full max-w-4xl flex flex-col mx-auto mt-20 overflow-x-hidden mb-14",
    ).length > 0
  ) {
    document
      .getElementsByClassName(
        "rounded-lg bg-card text-card-foreground shadow-sm bg-blend-color-burn w-full max-w-4xl flex flex-col mx-auto mt-20 overflow-x-hidden mb-14",
      )[0]
      .parentElement.insertBefore(
        div,
        document.getElementsByClassName(
          "rounded-lg bg-card text-card-foreground shadow-sm bg-blend-color-burn w-full max-w-4xl flex flex-col mx-auto mt-20 overflow-x-hidden mb-14",
        )[0],
      );
  } else {
    document.body.appendChild(div);
  }
}
const updateUsers = () => {
  const biasedGitUsers = localStorage.getItem("biasedGitUsers") || "[]";
  const users = JSON.parse(biasedGitUsers);
  const userToAdd = prompt("Enter the username or word you want to add?");
  if (userToAdd) {
    if (users.includes(userToAdd)) {
      alert("User already added!");
      return;
    }
    users.push(userToAdd);
    localStorage.setItem("biasedGitUsers", JSON.stringify(users));
    alert("User added!");
  }
};
startup();
window.addEventListener("load", () => {
  console.log("#load");
  console.log(document.querySelector("#config-for-bias"));
});
setInterval(() => {
  if (
    !window.location.pathname.includes("/shipyard") &&
    document.getElementById("bias-c")
  ) {
    document.getElementById("bias-c").remove();
  } else if (
    !document.getElementById("bias-c") &&
    window.location.pathname.includes("/shipyard")
  ) {
    startup();
  }
}, 50);
