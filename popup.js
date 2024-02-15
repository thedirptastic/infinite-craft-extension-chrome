document.addEventListener('DOMContentLoaded', function() {
  var addItemBtn = document.getElementById('addItemBtn');
  addItemBtn.addEventListener('click', function() {
    var itemInput = document.getElementById('itemInput').value;
    var emojiInput = document.getElementById('emojiInput').value
    addItem(itemInput, emojiInput);
  });
});

function addItem(item, emoji) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "addItem", item: item, emoji: emoji});
  });
}
