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
    name: "Raven XD",
    price: "Free",
    tags: ["Free", "Ghost", "Blatant", "Hypixel", "Forge", "recommended"],
    game: "Minecraft",
    description: "Raven XD is a forge mod based on Raven BS. It features multiple blatant features like Killaura or Scaffold but also less blatant ones.",
    cover: "https://raw.githubusercontent.com/xia-mc/Raven-XD/master/logo/logo.png",
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
    name: "Augustus",
    price: "80€",
    tags: ["Multi-Server", "Intave", "Polar", "Ghost", "Blatant", "recommended"],
    game: "Minecraft",
    description: "Introducing Augustus, a Minecraft 1.8 Client known for its extensive features. Boasting over 209 modules and a staggering 13,500+ customizable settings, Augustus is renowned for its unparalleled configurability. This client successfully bypasses popular servers like GommeHD, PikaNetwork, Mineblaze, and Gamster and outwits anti-cheats such as Intave, Polar, Grim, and Vulcan. Additionally, Augustus offers online configurations, allowing users to fine-tune their settings quickly. Elevate your Minecraft gameplay with Augustus – the ultimate choice for those seeking customization and performance.  ", // Stolen from Spezz.exchange
    cover: "https://spezz.exchange/uploads/monthly_2023_09/Augustus_Logo.webp.21990eea9fead38fbc9edfbc54b0a112.webp",
    screenshots: ["https://spezz.exchange/uploads/monthly_2023_09/menu.webp.8e9432567dc1832cbfc1aabbc28d21e8.webp", "https://spezz.exchange/uploads/monthly_2023_09/screenshot.webp.4d44057d55f05dfcf4dba55600a6e894.webp"],
    downloadLink: "https://spezz.exchange/store/product/191-augustus-client-lifetime/",
    otherButtons:[["https://luren.wiki/", "中国采购(Chinese Purchase)"]],
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
populateGameFilter();
});

// Function to populate clients
function populateClients(filteredTag = "all") {
const selectedTag = document.getElementById('tagFilter').value;
const selectedGame = document.getElementById('gameFilter').value;
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
        (selectedGame === "all" || client.game === selectedGame)) {
        const clientDiv = document.createElement('div');
        clientDiv.className = 'client';

        // Apply rainbow border if client is recommended
        if (client.tags.includes("recommended")) {
            clientDiv.classList.add('recommended');
        }

        clientDiv.innerHTML = `
            <img src="${client.cover}" alt="if you see this, firefox messed up (or bipas did lol)${client.name}">
            <h2>${client.name}</h2>
            <p>${client.game}</p>
            <p>${client.price}</p>
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

// Function to populate game filter options
function populateGameFilter() {
const gameFilter = document.getElementById('gameFilter');
let allGames = new Set();
clients.forEach(client => {
    allGames.add(client.game);
});

allGames.forEach(game => {
    const option = document.createElement('option');
    option.value = game;
    option.textContent = game;
    gameFilter.appendChild(option);
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