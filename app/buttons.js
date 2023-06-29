document.addEventListener('DOMContentLoaded', function() {
  var copyButton = document.querySelector('.copy-button');
  var codeSnippet = document.querySelector('.highlight');
  var copyIcon = document.querySelector('.octicon-copy');
  var checkIcon = document.querySelector('.octicon-check');

  copyButton.addEventListener('click', function() {
    var range = document.createRange();
    range.selectNode(codeSnippet);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    copyIcon.style.display = 'none';
    checkIcon.style.display = 'inline';

    setTimeout(function() {
      copyIcon.style.display = 'inline';
      checkIcon.style.display = 'none';
    }, 1500);
  });
});
