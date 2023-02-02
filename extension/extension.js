chrome.omnibox.setDefaultSuggestion({
    description: '[aka.ms] Enter a shortcut (e.g. learn) to be transported',
});

// TODO: Show where you'll end up as a "suggestion" with chrome.omnibox.onInputChanged.addListener

chrome.omnibox.onInputEntered.addListener(text => {
    let cmd = '';
    if (text.length != 0) {
      cmd = text.trim();
    }
    let newURL = 'https://aka.ms/' + cmd;
    chrome.tabs.update({ url: newURL });
})
