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
    otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://github.com/xia-mc/Raven-XD/releases", "Download Raven XD"]],
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
    otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://github.com/xia-mc/Raven-XD/releases", "Download Raven XD"]],
    colors: {
        text: white, // Text
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
    otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://github.com/xia-mc/Raven-XD/releases", "Download Raven XD"]],
    colors: {
        text: lime, // Text
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
    otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://github.com/xia-mc/Raven-XD/releases", "Download Raven XD"]],
    colors: {
        text: pink, // Text
        accent: "#36fff5", // Accent
        header: "#f70cf0" // Header
    }
},
{
    id: 5,
    name: "clk BMC",
    creator: "celakk",
    updated: "10/7/2024",
    tags: ["Blatant", "recommended"],
    anticheat: ["Verus", "Updated NCP"],
    description: ["Fine tuned config for flag less gameplay. Made for skywars.<b><br />GUI - RShift<br />Killaura - Q<br />Scaffold - V<br />ChestStealer - B<br />InvManager - B<br />BedAura - H<br />Speed - Z</b>"],
    cover: "https://raw.githubusercontent.com/Project-XD/project-xd.github.io/master/resources/icons/BlocksMC.png",
    ip: "BlocksMC.com",
    downloadLink: "https://github.com/user-attachments/files/17348120/BlocksMC-clk.json",
    otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://github.com/xia-mc/Raven-XD/releases", "Download Raven XD"]],
    colors: {
        text: purple, // Text
        accent: "#36fff5", // Accent
        header: "#f70cf0" // Header
    }
},
{
    id: 6,
    name: "VimeMC - Pit",
    creator: "pzuo",
    updated: "10/11/2024",
    tags: ["Ghost", "Blatant", "reccomended"],
    anticheat: ["Grim"],
    description: ["Mainly for 150~ ping with staff on. Has four block long reach.<b><br />Killaura - R<br />Speed - X<br />GUI - RShift</b>"],
    cover: "https://raw.githubusercontent.com/Project-XD/project-xd.github.io/master/resources/icons/VimeMC.png",
    ip: "mc.vimemc.net",
    downloadLink: "https://github.com/user-attachments/files/17348121/VimeMCPit-under.json",
    otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://github.com/xia-mc/Raven-XD/releases", "Download Raven XD"]],
    colors: {
        text: lightgray, // Text
        accent: "#36fff5", // Accent
        header: "#f70cf0" // Header
    }
}
];
// Boolean flag to hide configs with "outdated" tag
let hideOutdated = true;

// Populate configs and filter options
document.addEventListener("DOMContentLoaded", () => {
populateConfigs();
populateTagFilter();
populateAnticheatFilter();
});

function populateConfigs(filteredTag = "all") {
    const selectedTag = document.getElementById('tagFilter').value;
    const selectedAnticheat = document.getElementById('serverFilter').value;
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
            (selectedAnticheat === "all" || (Array.isArray(config.anticheat) && config.anticheat.includes(selectedAnticheat)) || config.anticheat === selectedAnticheat)) {
            const configDiv = document.createElement('div');
            configDiv.className = 'config';

            // Apply rainbow border if config is recommended
            if (config.tags.includes("recommended")) {
                configDiv.classList.add('recommended');
            }

            let anticheatText = '';
            if (Array.isArray(config.anticheat)) {
                anticheatText = config.anticheat.join('<br />');
            } else {
                anticheatText = config.anticheat;
            }

            configDiv.innerHTML = `
                <img src="${config.cover}" alt="qloha did an oopsie sorry -> ${config.name}">
                <h2>${config.name}</h2>
                <p>${anticheatText}</p>
                <p>${config.creator}</p>
                <a href="config?id=${config.id}">View Config</a>
                `;
            configList.appendChild(configDiv);
        }
    });
}


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

// Function to populate anticheat filter options
function populateAnticheatFilter() {
    const serverFilter = document.getElementById('serverFilter');
    let allAnticheats = new Set();
    configs.forEach(config => {
        if (Array.isArray(config.anticheat)) {
            config.anticheat.forEach(anticheat => {
                allAnticheats.add(anticheat);
            });
        } else {
            allAnticheats.add(config.anticheat);
        }
    });

    allAnticheats.forEach(anticheat => {
        const option = document.createElement('option');
        option.value = anticheat;
        option.textContent = anticheat;
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

