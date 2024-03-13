var i = 1;
var ses = 'b3cd870a-bde1-432c-8453-f0306de93f8b';

deal();
function deal() {
    i++;
fetch("https://rgs-cu2.hacksawgaming.com/api/play/bet", {
  "headers": {
    "accept": "*/*",
    "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
    "access-control-allow-origin": "*",
    "content-type": "application/json",
    "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://static-live.hacksawgaming.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"seq\":"+i+",\"sessionUuid\":\""+ses+"\",\"bets\":[{\"betAmount\":\"40\",\"customData\":{\"width\":9,\"height\":9,\"nbMines\":1}}],\"offerId\":null,\"promotionId\":null,\"autoplay\":false}",
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
}).then(r => r.json()).then(r => {
    i++;
fetch("https://rgs-cu2.hacksawgaming.com/api/play/bet", {
  "headers": {
    "accept": "*/*",
    "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
    "access-control-allow-origin": "*",
    "content-type": "application/json",
    "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://static-live.hacksawgaming.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"seq\":"+i+",\"sessionUuid\":\""+ses+"\",\"roundId\":\""+r.round.roundId+"\",\"continueInstructions\":{\"action\":\"pick\",\"gameSpecificData\":{\"pos\":10}}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
}).then(p => p.json()).then(p => {
    if(p.round && p.round.status !== 'completed') {
        i++;
    fetch("https://rgs-cu2.hacksawgaming.com/api/play/bet", {
  "headers": {
    "accept": "*/*",
    "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
    "access-control-allow-origin": "*",
    "content-type": "application/json",
    "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://static-live.hacksawgaming.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"seq\":"+i+",\"sessionUuid\":\""+ses+"\",\"roundId\":\""+r.round.roundId+"\",\"continueInstructions\":{\"action\":\"collect\"}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
}).then(s => {
        deal();
    });
} else if(p.round && p.round.status === 'completed') {
deal();
    };
});

});
};
