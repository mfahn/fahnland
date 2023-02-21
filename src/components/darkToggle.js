// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

let colorScheme = "system";
if (colorScheme === "system") {
let media = window.matchMedia("(prefers-color-scheme: dark)")
if (media.matches) document.documentElement.classList.add("dark");
}

function toggle(){
    if(localStorage.theme){
        // Whenever the user explicitly chooses light mode
        localStorage.theme = 'light'
    } else {
        // Whenever the user explicitly chooses dark mode
        localStorage.theme = 'dark'
    }
}
const checkbox = document.querySelector("#checkbox");
const html = document.querySelector("html");

const toggleDarkMode = function () {
  checkbox.checked
  ? html.classList.add("dark")
  : html.classList.remove("dark");
}

//calling the function directly

toggleDarkMode();
checkbox.addEventListener("click",toggleDarkMode);

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')