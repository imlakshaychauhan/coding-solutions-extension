let nextPT = "";
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    function doSomething(ques) {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${ques}&key=dummy_api_key`)
        .then((result) => {
            return (result.json());
        }).then((data) => {
            let videos = data.items;
            nextPT = data.nextPageToken;
            let videoContainer = document.querySelector(".main-div");
            for(video of videos) {
                videoContainer.innerHTML += `<div class="card text-center" style="width: 18rem; margin: 20px; padding: 5px;"><img src=${video.snippet.thumbnails.default.url} alt="" style="width: 100%; margin: 0%;"/> <div class="card-body"> <h5 class="card-title">${video.snippet.title} By ${video.snippet.channelTitle}</h5> <a href="https://www.youtube.com/watch?v=${video.id.videoId}"> <button type="button" class="btn btn-outline-primary">Watch Solution Video</button> </a> </div>`
            }
        })
    }
    let url = tabs[0].url;
    const main_heading = document.querySelector("#alert");


    const target_url_gfg =  "https://practice.geeksforgeeks.org/problems/"
    const target_url_lc = "https://leetcode.com/problems/";
    const target_url_interviewbit = "https://www.interviewbit.com/problems/";
    const target_url_codestudio = "https://www.codingninjas.com/codestudio/problems/";
    const target_url_cf = "https://codeforces.com/problemset/problem/";

    const gfg_len = 44;
    const lc_len = 30;
    const ib_len = 38;
    const cs_len = 49;
    const cf_len = 42;

    const sliced_url_gfg = url.slice(0, gfg_len);
    const sliced_url_lc = url.slice(0, lc_len);
    const sliced_url_ib = url.slice(0, ib_len);
    const sliced_url_cs = url.slice(0, cs_len);
    const sliced_url_cf = url.slice(0, cf_len);

    if(sliced_url_gfg === target_url_gfg) {
        const problem = url.slice(gfg_len, url.length - 1);
        let ques = "";
        for(var i = 0; i < problem.length; i++) {
            if(problem[i] == "/") break;
            ques += problem[i];
        }
        ques += " gfg problem";
        doSomething(ques);
    }
    else if(sliced_url_lc === target_url_lc) {
        const problem = url.slice(lc_len, url.length - 1);
        let ques = "";
        for(var i = 0; i < problem.length; i++) {
            if(problem[i] == "/") break;
            ques += problem[i];
        }
        ques += " leetcode problem";
        doSomething(ques);
    }
    else if(sliced_url_ib === target_url_interviewbit) {
        const problem = url.slice(ib_len, url.length - 1);
        let ques = "";
        for(var i = 0; i < problem.length; i++) {
            if(problem[i] == "/") break;
            ques += problem[i];
        }
        ques += " interviewbit problem";
        doSomething(ques);
    }
    else if(sliced_url_cs === target_url_codestudio) {
        const problem = url.slice(cs_len, url.length - 1);
        let ques = "";
        for(var i = 0; i < problem.length; i++) {
            if(problem[i] == "/") break;
            ques += problem[i];
        }
        ques += " codestudio problem";
        doSomething(ques);
    }
    // else if(sliced_url_cf === target_url_cf) {
    //     const problem = url.slice(cf_len, url.length - 1);
    //     let ques = "";
    //     ques += "codeforces ";
    //     for(var i = 0; i < problem.length; i++) {
    //         if(problem[i] == "/") break;
    //         ques += problem[i];
    //     }
    //     ques += " A B C D problems";
    //     doSomething(ques);
    // }
    else {
        main_heading.innerHTML = "This is not a coding problem!";
    }
});

