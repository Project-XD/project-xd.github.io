// Config data remains the same

// Additional setup for the search bar
document.addEventListener("DOMContentLoaded", () => {
    populateConfigs();
    setupSearchBar();
    setupScrollAnimations();
});

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

// Populate configs based on search criteria
function populateConfigs() {
    const configList = document.getElementById("configList");
    configList.innerHTML = '';

    configs.forEach(config => {
        if (hideOutdated && config.tags.includes("outdated")) {
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