chrome.runtime.onMessage.addListener(function(message) {
  if (message.action === "addItem") {
    addItemToStorage(message.item);
  }
});

function addItemToStorage(item, emoji) {
  chrome.storage.local.get('elements', function(data) {
    var elements = data.elements || [];
    elements.push({text: item, emoji: emoji, discovered: false});
    chrome.storage.local.set({elements: elements});
  });
}
