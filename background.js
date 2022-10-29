chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    const main_heading = document.querySelector("#url");
    const target_url =  "https://leetcode.com/problems/"
    const sliced_url = url.slice(0, 30);
    const problem = url.slice(30, url.length - 1);
    if(sliced_url === target_url)
        main_heading.innerHTML = problem;
    else
        main_heading.innerHTML = "not valid url";
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${problem}&key=AIzaSyBfs5VOvZmFBUi6uhLJIHCMtWtC8FsT7_4`)
    .then((data) => {
        alert(data.json());
    })
    console.log("acha");
});
console.log("acha");