// Client data
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

const clients = [
{
    id: 1,
    name: "BlocksMC",
    creator: "qloha",
    tags: ["Blatant", "BlocksMC", "recommended"],
    server: "BlocksMC.com",
    description: "Config for BlocksMC",
    cover: "https://raw.githubusercontent.com/Project-XD/project-xd.github.io/master/assets/icons/blocksmc.png",
    screenshots: ["https://github.com/user-attachments/assets/36e8920e-336e-4b62-ae3f-6b9962920812", "https://github.com/user-attachments/assets/85637f18-9d6b-47d9-9dc2-cb8594aff585"],
    downloadLink: "https://lootdest.org/s?abc853f3",
    otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Get Forge"]],
    colors: {
        text: "#000000", // Text
        accent: "#36fff5", // Accent
        header: "#f70cf0" // Header
    }
},
{
    id: 2,
    name: "Legit",
    creator: "qloha",
    tags: ["Multi-Server", "recommended"],
    server: "Any",
    description: "A legit config that ", // Stolen from Spezz.exchange
    cover: "https://raw.githubusercontent.com/Project-XD/project-xd.github.io/master/assets/icons/any.png",
    screenshots: ["https://spezz.exchange/uploads/monthly_2023_09/menu.webp.8e9432567dc1832cbfc1aabbc28d21e8.webp", "https://spezz.exchange/uploads/monthly_2023_09/screenshot.webp.4d44057d55f05dfcf4dba55600a6e894.webp"],
    downloadLink: "https://spezz.exchange/store/product/191-augustus-client-lifetime/",
    otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Get Forge"]],
    colors: {
        text: "#000000", // Text
        accent: "#007BFF", // Accent
        header: presetColors.lightGray // Header
    }
}
];
// Boolean flag to hide clients with "outdated" tag
let hideOutdated = true;

// Populate clients and filter options
document.addEventListener("DOMContentLoaded", () => {
populateClients();
populateTagFilter();
populateServerFilter();
});

// Function to populate clients
function populateClients(filteredTag = "all") {
const selectedTag = document.getElementById('tagFilter').value;
const selectedServer = document.getElementById('serverFilter').value;
const clientList = document.getElementById('clientList');
clientList.innerHTML = '';

clients.forEach(client => {
    // Skip clients with "hidden" tag
    if (client.tags.includes("hidden")) {
        return;
    }

    // Skip clients with "outdated" tag if hideOutdated is true
    if (hideOutdated && client.tags.includes("outdated")) {
        return;
    }

    if ((selectedTag === "all" || client.tags.includes(selectedTag)) &&
        (selectedServer === "all" || client.server === selectedServer)) {
        const clientDiv = document.createElement('div');
        clientDiv.className = 'client';

        // Apply rainbow border if client is recommended
        if (client.tags.includes("recommended")) {
            clientDiv.classList.add('recommended');
        }

        clientDiv.innerHTML = `
            <img src="${client.cover}" alt="if you see this, firefox messed up (or bipas did lol)${client.name}">
            <h2>${client.name}</h2>
            <p>${client.server}</p>
            <p>${client.creator}</p>
            <a href="client.html?id=${client.id}">View Client</a>
        `;
        clientList.appendChild(clientDiv);
    }
});
}


// Function to populate tag filter options
function populateTagFilter() {
const tagFilter = document.getElementById('tagFilter');
let allTags = new Set();
clients.forEach(client => {
    client.tags.forEach(tag => {
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
clients.forEach(client => {
    allServers.add(client.server);
});

allServers.forEach(server => {
    const option = document.createElement('option');
    option.value = server;
    option.textContent = server;
    serverFilter.appendChild(option);
});
}

// Function to toggle outdated clients visibility
function toggleOutdatedClients() {
hideOutdated = !hideOutdated;
document.getElementById('toggleOutdated').textContent = hideOutdated ? "Hide Outdated" : "Show Outdated";
filterClients();
}

// Function to filter clients based on selected tag and game
function filterClients() {
populateClients();
}