const express = require('express');
const app = express();
const port = 3001;

const animeData = {
  jjk: [
    "http://tinyurl.com/28fou6r2",
    "http://tinyurl.com/26bsvhzy",
    "http://tinyurl.com/25bbrly4",
    "http://tinyurl.com/24juf4og",
    "http://tinyurl.com/2a5kenx8",
    "http://tinyurl.com/295k466u",
    "http://tinyurl.com/24srx9qz",
    "http://tinyurl.com/287duq7l",
    "http://tinyurl.com/2b7etakl",
    "http://tinyurl.com/29n2kbpm",
    "http://tinyurl.com/2y4zon55",
    "http://tinyurl.com/29c6lxkc",
    "http://tinyurl.com/2c72rb3z",
    "http://tinyurl.com/26nvnt9n",
    "http://tinyurl.com/24yarg7f",
    "http://tinyurl.com/259yqach",
    "http://tinyurl.com/2987pldt",
    "http://tinyurl.com/2a9ok4fu",
    "http://tinyurl.com/2b76yhrb",
    "http://tinyurl.com/26f8j93k",
    "http://tinyurl.com/2ddk7edx",
    "http://tinyurl.com/2c4cokw8",
    "http://tinyurl.com/26ekbwwt",
    "http://tinyurl.com/2ceblu7h",
    "http://tinyurl.com/29ay7t2m",
    "http://tinyurl.com/2dox9znp",
    "http://tinyurl.com/27k3ys8d",
    "http://tinyurl.com/25sgypt8",
    "http://tinyurl.com/26kpnwas",
    "http://tinyurl.com/252z5aau",
    "http://tinyurl.com/245wxk4f",
    "http://tinyurl.com/24ybuvr8",
    "http://tinyurl.com/2bf4sor3",
    "http://tinyurl.com/248zptfd",
    "http://tinyurl.com/2xt73ddf",
    "http://tinyurl.com/293c2hy4",
    "http://tinyurl.com/24hy66ew",
    "http://tinyurl.com/27yyd5ps",
    "http://tinyurl.com/27okfvuh",
    "http://tinyurl.com/2ay9e473",
    "http://tinyurl.com/2b58kx6u",
    "http://tinyurl.com/24vwzkat",
    "http://tinyurl.com/294jongh",
    "http://tinyurl.com/2y6kk45o",







  ],
  naruto: [
    "http://tinyurl.com/23qp5wlx",
    "http://tinyurl.com/238asdd5",
    "http://tinyurl.com/2c9u7vrs",
    "http://tinyurl.com/295jqunx",
    "http://tinyurl.com/27adaweq",
    "http://tinyurl.com/22vq2w7c",
    "http://tinyurl.com/29qgftsl",
    "http://tinyurl.com/2bw3xwek",
    "http://tinyurl.com/2ygd86fl",
    "http://tinyurl.com/29jfr7cn",
    "http://tinyurl.com/25lc7xhz",
    "http://tinyurl.com/2bk4mh33",
    "http://tinyurl.com/2dz43wrf",
    "http://tinyurl.com/25vb49pr",
    "http://tinyurl.com/2yulkwfp",
    "http://tinyurl.com/27fnd8kq",
    "http://tinyurl.com/27szq3ak",
    "http://tinyurl.com/22sh6zav",
    "http://tinyurl.com/2cvdb5qe",
    "http://tinyurl.com/25rtuqk7",
    "http://tinyurl.com/275aaeoa",
    "http://tinyurl.com/2y7d4lao",
    "http://tinyurl.com/2bol6paf",
    "http://tinyurl.com/27tvpc26",
    "http://tinyurl.com/2ca9jpjz",
    "http://tinyurl.com/2y65fesb",
    "http://tinyurl.com/2bkdgkam",
    "http://tinyurl.com/2b3fnxbh",
    "http://tinyurl.com/29mahe26",
    "http://tinyurl.com/288jgmsb",
    "http://tinyurl.com/2yh6os9r",
    "http://tinyurl.com/2a7scnr5",
    "http://tinyurl.com/29p7xm2f",
    "http://tinyurl.com/23r76bxq",
    "http://tinyurl.com/259eoygb",
    "http://tinyurl.com/2djclmk5",
    "http://tinyurl.com/22tm7758",
    "http://tinyurl.com/2y3v2lrr",
    "http://tinyurl.com/25uzfen7",
    "http://tinyurl.com/2cxrftys",
    "http://tinyurl.com/29ncxccc",
    "http://tinyurl.com/2bbqmduv",
    "http://tinyurl.com/22v7gz6x",
    "http://tinyurl.com/24ehdcrp",






  ],
  ds: [

    "http://tinyurl.com/276j5kz5",
    "http://tinyurl.com/2y7krquy",
    "http://tinyurl.com/26y87jpe",
    "http://tinyurl.com/2cjof7q9",
    "http://tinyurl.com/29y9645e",
    "http://tinyurl.com/25mblg5w",
    "http://tinyurl.com/24uyw9oc",
    "http://tinyurl.com/22mhpcr7",
    "http://tinyurl.com/2yzm47bh",
    "http://tinyurl.com/2xm2wh52",
    "http://tinyurl.com/22g27scd",
    "http://tinyurl.com/29879uc5",
    "http://tinyurl.com/22k8ntdh",
    "http://tinyurl.com/29jmo5t4",
    "http://tinyurl.com/29q3uvxd",
    "http://tinyurl.com/27dutyxw",
    "http://tinyurl.com/22ljuqdy",
    "http://tinyurl.com/27uxcus5",
    "http://tinyurl.com/24t44na6",
    "http://tinyurl.com/26pcwpok",
    "http://tinyurl.com/2afpvm8y",
    "http://tinyurl.com/27cow6al",
"http://tinyurl.com/29y6l7t7",
"http://tinyurl.com/2b4zqhem",
"http://tinyurl.com/2b4zqhem",
"http://tinyurl.com/2956cpvo",
"http://tinyurl.com/2dnlwdcu",
"http://tinyurl.com/29o5cuq6",
"http://tinyurl.com/24x3zojc",
"http://tinyurl.com/26q237oc",
"http://tinyurl.com/2c7mmn9h",
"http://tinyurl.com/233j6d4w",
"http://tinyurl.com/2y94fehk",
"http://tinyurl.com/2xubeyf9",
"http://tinyurl.com/2bgo7dre",
"http://tinyurl.com/2yb5lwcu",
"http://tinyurl.com/2dpeb5eu",
"http://tinyurl.com/22p3p4lx",
"http://tinyurl.com/276j5kz5",









  ],
  aot: [
"http://tinyurl.com/294k487s",
"http://tinyurl.com/25y2xsqz",
"http://tinyurl.com/2cedqqnu",
"http://tinyurl.com/289ludn8",
"http://tinyurl.com/2ap3s2xc",
"http://tinyurl.com/2cf2y2rl",
"http://tinyurl.com/289xn4jh",
"http://tinyurl.com/2b3yjouo",
"http://tinyurl.com/2xhv7uqy",
"http://tinyurl.com/2b3ttf2n",
"http://tinyurl.com/2bysmu7d",
"http://tinyurl.com/2dytaur2",
"http://tinyurl.com/24z3ymgg",
"http://tinyurl.com/224bnega",
"http://tinyurl.com/2a9jxnpq",
"http://tinyurl.com/28ubgvrl",
"http://tinyurl.com/2coco2w6",
"http://tinyurl.com/2yazh8qx",
"http://tinyurl.com/28s6pnf7",
"http://tinyurl.com/225s7dpx",
"http://tinyurl.com/27rkx9a7",
"http://tinyurl.com/279jrz4s",
"http://tinyurl.com/2arkvqn7",
"http://tinyurl.com/22gdjkbv",
"http://tinyurl.com/268v9p7q",
"http://tinyurl.com/2ym68jj5",
"http://tinyurl.com/26fcghc2",







  ],
  bleach: [
"http://tinyurl.com/22rw3wvh",
"http://tinyurl.com/2689ktmz",
"http://tinyurl.com/2adtqws6",
"http://tinyurl.com/2y4qsz3x",
"http://tinyurl.com/26ccxwd5",
"http://tinyurl.com/24fpzpdc",
"http://tinyurl.com/2by8qde7",
"http://tinyurl.com/2ckzo6kc",
"http://tinyurl.com/259kh9so",
"http://tinyurl.com/2chrzxt9",
"http://tinyurl.com/226jhqvb",
"http://tinyurl.com/2dl9yb9g",
"http://tinyurl.com/23atargh",
"http://tinyurl.com/228vbgcx",
"http://tinyurl.com/25dmucjb",
"http://tinyurl.com/25e427lr",
"http://tinyurl.com/28wfqkpz",
"http://tinyurl.com/25677m4t",
  ],

  deathnote: [
"http://tinyurl.com/285x6yws",
"http://tinyurl.com/28gwvvxq",
"http://tinyurl.com/23jh8ggy",
"http://tinyurl.com/2b9hbj3a",
"http://tinyurl.com/2yrx6c6s",
"http://tinyurl.com/2byg3467",




  ]


};

let sentLinks = {
  jjk: [],
  naruto: [],
  ds: [],
  aot: [],
  bleach: [],
  deathnote: []
};

function resetSentLinks() {
  sentLinks = {
     jjk: [],
    naruto: [],
    ds: [],
    aot: [],
    bleach: [],
    deathnote: []
  };
}

app.get('/anime/:category', (req, res) => {
  const { category } = req.params;

  if (!animeData[category]) {
    return res.status(400).json({ error: 'Invalid category' });
  }

  let links = animeData[category].filter(link => !sentLinks[category].includes(link));


  if (links.length === 0) {
    resetSentLinks();
    links = animeData[category];
  }


  const randomIndex = Math.floor(Math.random() * links.length);
  const linkToSend = links[randomIndex];


  sentLinks[category].push(linkToSend);

  res.json(linkToSend);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
