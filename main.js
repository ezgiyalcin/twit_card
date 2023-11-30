const placeHolder = document.querySelector(".placeHolder");
const editableInput = document.querySelector(".editable");
const tweetBtn = document.querySelector(".button");
const counter = document.querySelector("#counter");
const readOnly = document.querySelector(".readonly");

editableInput.addEventListener("click", () => {
  placeHolder.style.color = "#98a5b1";
});

editableInput.onblur = () => {
  placeHolder.style.color = "#333";
};

editableInput.onkeypress = (e) => {
  placeHolder.style.display = "none";
  inputValidate(e.target.innerText);
};

editableInput.onkeyup = (e) => {
  placeHolder.style.display = "none";
  inputValidate(e.target.innerText);
};

const inputValidate = (tweet) => {
  const tweetLength = tweet.length;

  const tweetLimit = 5;
  const currentLimit = tweetLimit - tweetLength;

  if (tweetLength <= 0) {
    placeHolder.style.display = "block";
    tweetBtn.classList.remove("active");
    counter.style.display = "none";
  } else {
    tweetBtn.classList.add("active");
    counter.style.display = "block";
    counter.innerText = currentLimit;
  }
  let newTweet;
  if (tweetLength > tweetLimit) {
    let overTweet = tweet.substr(tweetLimit, tweetLength);
    let OverTweetChr = `<span class='overTweet'>${overTweet}<span>`;
    newTweet = tweet.substr(0, tweetLimit) + OverTweetChr;
    readOnly.style.zIndex = "1";

    counter.style.color = "red";
    tweetBtn.classList.remove("active");
  } else {
    counter.style.color = "#333";
    readOnly.style.zIndex = "-5";
  }
  readOnly.innerHTML = newTweet;
};
