/**
 * <div dir="ltr" data-orientation="horizontal" class="flex-1 flex flex-col"><div class="flex-1 p-3" id="harbor-tab-scroll-element"><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-:ro:-trigger-signpost" hidden="" id="radix-:ro:-content-signpost" tabindex="0" class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-full"></div><div data-state="active" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-:ro:-trigger-shipyard" id="radix-:ro:-content-shipyard" tabindex="0" class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-full" style=""><div class="min-h-screen"><div class="text-center text-white pt-6"><h1 class="font-heading text-5xl mb-6 text-center relative w-fit mx-auto">Config Bias</h1></div><div class="mt-6"><div class="w-fit mx-auto mb-0 mt-3" style="transform: none;"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition duration-150 active:scale-90 bg-[#9AD9EE] h-10 px-4 py-2 text-xl text-white bg-blend-color-burn" id="start-ship-draft" style="background: rgb(210, 54, 226);">Update</button></div><div class="w-full mt-8"><h2 class="text-center text-2xl mb-2 text-blue-500">Draft Ships</h2><div id="staged-ships-container" class="space-y-4"></div></div></div></div></div><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-:ro:-trigger-wonderdome" hidden="" id="radix-:ro:-content-wonderdome" tabindex="0" class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-full"></div><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-:ro:-trigger-shop" hidden="" id="radix-:ro:-content-shop" tabindex="0" class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-full"></div></div></div>
 */
function startup() {
  const div = document.createElement("div");
  div.innerHTML = `<div id="bias-c" dir="ltr" data-orientation="horizontal" class="flex-1 flex flex-col"><div class="flex-1 p-3" id="harbor-tab-scroll-element"><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-:ro:-trigger-signpost" hidden="" id="radix-:ro:-content-signpost" tabindex="0" class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-full"></div><div data-state="active" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-:ro:-trigger-shipyard" id="radix-:ro:-content-shipyard" tabindex="0" class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-full" style=""><div class="min-h-screen"><div class="text-center text-white pt-6"><h1 class="font-heading text-5xl mb-6 text-center relative w-fit mx-auto">Config Bias</h1></div><div class="mt-6"><div class="w-fit mx-auto mb-0 mt-3" style="transform: none;"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition duration-150 active:scale-90 bg-[#9AD9EE] h-10 px-4 py-2 text-xl text-white bg-blend-color-burn" id="start-ship-draft" style="background: rgb(210, 54, 226);" onclick="window._updateUsers()">Update</button></div><div class="w-full mt-8"><h2 class="text-center text-2xl mb-2 text-blue-500">Current Users Added</h2> <p class="text-center text-xl mb-2 text-white"> it will check for this username in the repo url for each matchup so if you want a regex such as *a* just type <code>a</code> ! </p><div id="staged-ships-container" class="space-y-4"></div></div></div></div></div><div id="config-for-bias" data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-:ro:-trigger-wonderdome" hidden="" id="radix-:ro:-content-wonderdome" tabindex="0" class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-full"></div><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-:ro:-trigger-shop" hidden="" id="radix-:ro:-content-shop" tabindex="0" class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-full"> <div id="voting-reason-container-parent" class="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"><div id="voting-reason-container"><h3 class="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mb-4">Why are you voting for Lucid (web proxy / unblocker) over the other?</h3><textarea placeholder="Provide your reason here (minimum 10 words)" class="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-md mb-4 text-gray-900 dark:text-white bg-white dark:bg-gray-700 min-h-[150px]" rows="6"></textarea></div><button id="submit-vote" disabled="" class="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-lg w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed ">Submit here</button></div></div></div></div>`;
  document.body.append(div);
}
window._updateUsers = () => {
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
