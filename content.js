
chrome.runtime.onMessage.addListener(function(message) {
    if (message.action === "addItem") {
        addItemToGameStorage(message.item, message.emoji);
    }
});

function addItemToGameStorage(item, emoji) {
    var gameStorage = JSON.parse(localStorage.getItem('infinite-craft-data'));
    gameStorage.elements.push({text: item, emoji: emoji, discovered: false});
    localStorage.setItem('infinite-craft-data', JSON.stringify(gameStorage));
}

