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
    name: "BlocksMC",
    creator: "qloha",
    tags: ["Blatant", "BlocksMC", "recommended"],
    server: "BlocksMC.com",
    description: "Config for BlocksMC",
    cover: "https://raw.githubusercontent.com/Project-XD/project-xd.github.io/master/resources/icons/blocksmc.png",
    screenshots: ["https://github.com/user-attachments/assets/36e8920e-336e-4b62-ae3f-6b9962920812", "https://github.com/user-attachments/assets/85637f18-9d6b-47d9-9dc2-cb8594aff585"],
    downloadLink: "https://raw.githubusercontent.com/Project-XD/project-xd.github.io/master/resources/configs/BlocksMC-qloha.json",
    otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"]],
    colors: {
        text: "#000000", // Text
        accent: "#36fff5", // Accent
        header: "#f70cf0" // Header
    }
},
{
    id: 2,
    name: "100%Legit",
    creator: "qloha",
    tags: ["Multi-Server", "recommended"],
    server: "Multi-Server",
    description: "A legit config that works on any server",
    cover: "https://raw.githubusercontent.com/Project-XD/project-xd.github.io/master/resources/icons/multi-server.png",
    screenshots: ["https://spezz.exchange/uploads/monthly_2023_09/menu.webp.8e9432567dc1832cbfc1aabbc28d21e8.webp", "https://spezz.exchange/uploads/monthly_2023_09/screenshot.webp.4d44057d55f05dfcf4dba55600a6e894.webp"],
    downloadLink: "https://raw.githubusercontent.com/Project-XD/project-xd.github.io/master/resources/configs/100%Legit-qloha.json",
    otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"]],
    colors: {
        text: "#000000", // Text
        accent: "#007BFF", // Accent
        header: presetColors.lightGray // Header
    }
}
];
// Boolean flag to hide configs with "outdated" tag
let hideOutdated = true;

// Populate configs and filter options
document.addEventListener("DOMContentLoaded", () => {
populateConfigs();
populateTagFilter();
populateServerFilter();
});

// Function to populate configs
function populateConfigs(filteredTag = "all") {
const selectedTag = document.getElementById('tagFilter').value;
const selectedServer = document.getElementById('serverFilter').value;
const configList = document.getElementById('configList');
configList.innerHTML = '';

configs.forEach(config => {
    // Skip configs with "hidden" tag
    if (config.tags.includes("hidden")) {
        return;
    }

    // Skip configs with "outdated" tag if hideOutdated is true
    if (hideOutdated && config.tags.includes("outdated")) {
        return;
    }

    if ((selectedTag === "all" || config.tags.includes(selectedTag)) &&
        (selectedServer === "all" || config.server === selectedServer)) {
        const configDiv = document.createElement('div');
        configDiv.className = 'config';

        // Apply rainbow border if config is recommended
        if (config.tags.includes("recommended")) {
            configDiv.classList.add('recommended');
        }

        configDiv.innerHTML = `
            <img src="${config.cover}" alt="qloha did an oopsie sorry -> ${config.name}">
            <h2>${config.name}</h2>
            <p>${config.server}</p>
            <p>${config.creator}</p>
            <a href="config?id=${config.id}">View Config</a>
        `;
        configList.appendChild(configDiv);
    }
});
}


// Function to populate tag filter options
function populateTagFilter() {
const tagFilter = document.getElementById('tagFilter');
let allTags = new Set();
configs.forEach(config => {
    config.tags.forEach(tag => {
        if (tag !== 'hidden') {
            allTags.add(tag);
        }
    });
});

allTags.forEach(tag => {
    const option = document.createElement('option');
    option.value = tag;
    option.textContent = tag;
    tagFilter.appendChild(option);
});
}

// Function to populate server filter options
function populateServerFilter() {
const serverFilter = document.getElementById('serverFilter');
let allServers = new Set();
configs.forEach(config => {
    allServers.add(config.server);
});

allServers.forEach(server => {
    const option = document.createElement('option');
    option.value = server;
    option.textContent = server;
    serverFilter.appendChild(option);
});
}

// Function to toggle outdated configs visibility
function toggleOutdatedConfigs() {
hideOutdated = !hideOutdated;
document.getElementById('toggleOutdated').textContent = hideOutdated ? "Hide Outdated" : "Show Outdated";
filterConfigs();
}

// Function to filter configs based on selected tag and game
function filterConfigs() {
populateConfigs();
}