// Config data
const presetColors = {
    white: "#ffffff",
    black: "#000000",
    lime: "#00ff04",
    pink: "#ff00f2",
    purple: "#7700ff",
    lightGray: "#b5b5b5",
    gray: "#808080",
    darkGray: "#3b3b3b",
    red: "#ff0000",
    orange: "#ff8400",
    yellow: "#ffe600",
    lightGreen: "#91ff00",
    green: "#1aff00",
    darkGreen: "#0e8a00",
    turquoise: "#00ff8c",
    lightBlue: "#00ffd9",
    blue: "#0084ff",
    darkBlue: "#0800ff",
    darkPurple: "#2f0080",
    darkRed: "#800000"
}

const configs = [
{
    id: 1,
    name: "under BMC",
    creator: "pzuo",
    updated: "10/6/2024",
    tags: ["Blatant", "BlocksMC", "recommended"],
    anticheat: ["Verus", "Updated NCP"],
    description: ["Semi blatant, everything bypasses, low/high ping support, and lasts 25-40mins!<b><br />BedAura - V<br />ChestStealer - P<br />Gui - END<br />InvManager - P<br />KillAura - R<br />Scaffold - LALT<br />Speed - X<br />Antivoid : U</b>"],
    cover: "https://raw.githubusercontent.com/Project-XD/project-xd.github.io/master/resources/icons/BlocksMC.png",
    ip: "play.BlocksMC.com",
    downloadLink: "https://github.com/user-attachments/files/17270291/BlocksMC-under.json",
    otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://bstlar.com/3AL/Raven-XD", "Download Raven XD"]],
    colors: {
        text: "#000000", // Text
        accent: "#36fff5", // Accent
        header: "#f70cf0" // Header
    }
},
{
    id: 2,
    name: "100% Legit",
    creator: "qloha",
    updated: "9/27/2024",
    tags: ["Ghost"],
    anticheat: "Any",
    description: ["100% legit, with nothing enabled.<b><br />No binds</b>"],
    cover: "https://raw.githubusercontent.com/Project-XD/project-xd.github.io/master/resources/icons/any.png",
    ip: "Any",
    downloadLink: "https://github.com/user-attachments/files/17238894/Legit-qloha.json",
    otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://bstlar.com/3AL/Raven-XD", "Download Raven XD"]],
    colors: {
        text: "#000000", // Text
        accent: "#36fff5", // Accent
        header: "#f70cf0" // Header
    }
},
{
    id: 3,
    name: "VimeMC Pit",
    creator: "qloha",
    updated: "10/4/2024",
    tags: ["Blatant", "Ghost", "recommended"],
    anticheat: "Grim",
    description: ["Bypasses fully, no flags.<b><br />Killaura - R<br />Speed - G<br />Gui - RShift<br />All Visuals - - (minus)</b>"],
    cover: "https://raw.githubusercontent.com/Project-XD/project-xd.github.io/master/resources/icons/VimeMC.png",
    ip: "mc.vimemc.net",
    downloadLink: "https://github.com/user-attachments/files/17251234/VMCPit-qloha.json",
    otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://bstlar.com/3AL/Raven-XD", "Download Raven XD"]],
    colors: {
        text: "#000000", // Text
        accent: "#36fff5", // Accent
        header: "#f70cf0" // Header
    }
},
{
    id: 4,
    name: "HylexMC",
    creator: "qloha",
    updated: "10/5/2024",
    tags: ["Blatant", "Ghost", "recommended"],
    anticheat: "Grim",
    description: ["Bypasses fully, no flags.<b><br />Killaura - R<br />Speed - G<br />Velocity - V<br />Scaffold - H<br /> Bedaura - X<br />All Visuals - - (minus)</b>"],
    cover: "https://raw.githubusercontent.com/Project-XD/project-xd.github.io/master/resources/icons/HylexMC.png",
    ip: "play.hylexmc.com",
    downloadLink: "https://github.com/user-attachments/files/17266882/HylexMC-qloha.json",
    otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://bstlar.com/3AL/Raven-XD", "Download Raven XD"]],
    colors: {
        text: "#000000", // Text
        accent: "#36fff5", // Accent
        header: "#f70cf0" // Header
    }
},
{
    id: 5,
    name: "clk BMC",
    creator: "celakk",
    updated: "10/16/2024",
    tags: ["Blatant", "recommended"],
    anticheat: ["Verus", "Updated NCP"],
    description: ["Fine tuned config for flag less gameplay. Made for skywars.<b><br />GUI - RShift<br />Killaura - Q<br />Scaffold - V<br />ChestStealer - B<br />InvManager - B<br />BedAura - H<br />Speed - Z</b>"],
    cover: "https://raw.githubusercontent.com/Project-XD/project-xd.github.io/master/resources/icons/BlocksMC.png",
    ip: "BlocksMC.com",
    downloadLink: "https://github.com/user-attachments/files/17402408/BlocksMC-clk.json",
    otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://bstlar.com/3AL/Raven-XD", "Download Raven XD"]],
    colors: {
        text: "#000000", // Text
        accent: "#36fff5", // Accent
        header: "#f70cf0" // Header
    }
},
{
    id: 6,
    name: "VimeMC - Pit",
    creator: "pzuo",
    updated: "10/11/2024",
    tags: ["Ghost", "Blatant", "recommended"],
    anticheat: ["Grim"],
    description: ["Mainly for 150~ ping with staff on. Has four block long reach.<b><br />Killaura - R<br />Speed - X<br />GUI - RShift</b>"],
    cover: "https://raw.githubusercontent.com/Project-XD/project-xd.github.io/master/resources/icons/VimeMC.png",
    ip: "mc.vimemc.net",
    downloadLink: "https://github.com/user-attachments/files/17348121/VimeMCPit-under.json",
    otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://bstlar.com/3AL/Raven-XD", "Download Raven XD"]],
    colors: {
        text: "#000000", // Text
        accent: "#36fff5", // Accent
        header: "#f70cf0" // Header
    }
}
];
// Config data remains the same

// Global variables for search functionality
const searchFields = ["creator", "name", "anticheat", "ip", "tag"];
let hideOutdated = true;  // Ensure this is defined
let currentField = null;
let searchCriteria = {};

// Add event listeners after declaring global variables
document.addEventListener("DOMContentLoaded", () => {
    populateConfigs();
    setupSearchBar();
    setupScrollAnimations();
});

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
}

// Function to populate configs based on search criteria
function populateConfigs() {
    const configList = document.getElementById("configList");
    configList.innerHTML = '';

    configs.forEach(config => {
        if (hideOutdated && config.tags.includes("outdated")) {  // Use hideOutdated here
            return;
        }

        if (matchesSearchCriteria(config, searchCriteria)) {
            const configDiv = document.createElement('div');
            configDiv.className = 'config hidden';
            configDiv.innerHTML = `
                <img src="${config.cover}" alt="${config.name}">
                <h2>${config.name}</h2>
                <p>Anticheat: ${Array.isArray(config.anticheat) ? config.anticheat.join(", ") : config.anticheat}</p>
                <p>Creator: ${config.creator}</p>
                <p>IP: ${config.ip}</p>
                <a href="config?id=${config.id}">View Config</a>
            `;
            configList.appendChild(configDiv);
        }
    });
}

// Other functions like setupSearchBar(), handleInput(), handleKeyDown(), etc., follow here...


// Setup the search bar with event listeners
function setupSearchBar() {
    const searchBar = document.getElementById("searchBar");
    searchBar.addEventListener("input", handleInput);
    searchBar.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keydown", handleGlobalKeyDown);
}

// Handle input for text changes in the search bar
function handleInput(event) {
    const input = event.target.value.trim();

    // Update the search criteria based on input
    if (currentField && input.startsWith(currentField + ":")) {
        searchCriteria[currentField] = input.substring(currentField.length + 1).trim();
    } else {
        currentField = null;
        searchCriteria = {}; // Clear previous criteria if general input
        if (input) {
            searchCriteria["name"] = input;
        }
    }
    populateConfigs();
}

// Handle key down events for special cases like space, arrow keys, and escape
function handleKeyDown(event) {
    const input = event.target.value.trim();

    if (event.key === " " && input.includes(":") && searchFields.some(field => input.startsWith(field + ":"))) {
        currentField = input.split(":")[0];
        event.preventDefault(); // Prevent default space behavior
    }

    if (event.key === "ArrowRight" && currentField) {
        currentField = null;
        event.preventDefault();
    }
}

// Handle global key down events
function handleGlobalKeyDown(event) {
    if (event.key === "Escape") {
        currentField = null;
        searchCriteria = {};
        document.getElementById("searchBar").value = "";
        populateConfigs();
    }
}

// Check if a config matches the current search criteria
function matchesSearchCriteria(config, criteria) {
    for (const field in criteria) {
        const value = criteria[field].toLowerCase();
        if (!value) continue;

        if (field === "tag") {
            if (!config.tags.some(tag => tag.toLowerCase().includes(value))) {
                return false;
            }
        } else if (field === "anticheat") {
            const anticheats = Array.isArray(config.anticheat) ? config.anticheat : [config.anticheat];
            if (!anticheats.some(anticheat => anticheat.toLowerCase().includes(value))) {
                return false;
            }
        } else if (!config[field].toLowerCase().includes(value)) {
            return false;
        }
    }
    return true;
}