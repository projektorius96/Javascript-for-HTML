// Code is from unless modified by this github user: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
// Also https://stackoverflow.com/questions/5203407/how-to-detect-if-multiple-keys-are-pressed-at-once-using-javascript | keyCode is deprec

// keydown is fired whenever keyboard button is initially pressed but not released
// Hereby Variable is any variable that was referenced to specific HTML [or HTMLCollection | Nodelist if iterated over]
Variable.addEventListener('keydown', (e) => {
  if (!e.repeat)
    console.log(`Key "${e.key}" pressed  [event: keydown]`);
  else
    console.log(`Key "${e.key}" repeating  [event: keydown]`);
});

// keyup is fired whenever keyboard button is releasing
// Notice: within keyup event fired e.g SHIFT + a gives  SHIFT + capital A
var toArr = new Array();
this.addEventListener('keyup', (e) => {
var that = this;
that.toArr.push(e.key)
return `Key "${toArr}" pressed  [event: keydown]`;
});
