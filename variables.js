const pp = [
  "8D",
  "8=D",
  "8==D",
  "8===D",
  "8====D",
  "8=====D",
  "8======D",
  "8=======D",
  "8========D",
  "8=========D",
  "8==========D",
  "8===========D",
  "8============D",
  "8=============D",
  "8==============D"
];

const future = [
  "An alien of some sort will be appearing to you shortly.",
  "A closed mouth gathers no feet.",
  "A conclusion is simply the place where you got tired of thinking.",
  "A cynic is only a frustrated optimist.",
  "A foolish man listens to his heart. A wise man listens to fortunes.",
  "You will die alone and poorly dressed.",
  "A fanatic is one who can't change his mind, and won't change the subject.",
  "If you look back, you’ll soon be going that way.",
  "Do not mistake temptation for opportunity.",
  "Flattery will go far tonight.",
  "He who laughs at himself never runs out of things to laugh at.",
  "He who laughs last is laughing at you.",
  "He who throws dirt is losing ground.",
  "The greatest danger could be your stupidity.",
  "The world may be your oyster, but it doesn't mean you'll get its pearl.",
  "The road to riches is paved with homework.",
  "You can always find happiness at work on Friday.",
  "Because of your melodic nature, the moonlight never misses an appointment.",
  "Don’t behave with cold manners.",
  " Don’t forget you are always on our minds.",
  "Fortune not found? Abort, Retry, Ignore.",
  "Never forget a friend. Especially if he owes you.",
  "Never wear your best pants when you go to fight for freedom.",
  "It is a good day to have a good day.",
  "All fortunes are wrong except this one.",
  "Someone will invite you to a Karaoke party.",
  "That wasn’t chicken.",
  "There is no mistake so great as that of being always right.",
  " You love Chinese food.",
  "I am worth a fortune.",
  "No snowflake feels responsible in an avalanche.",
  "Don’t let statistics do a number on you.",
  "You are not illiterate.",
  "May you someday be carbon neutral.",
  "You have rice in your teeth.",
  "Avoid taking unnecessary gambles.",
  " Lucky numbers: 12, 15, 23, 28, 37",
  "Ask your mom instead of a cookie",
  "Hard work pays off in the future.",
  "Laziness pays off now.",
  "If a turtle doesn’t have a shell, is it naked or homeless?",
  "Change is inevitable, except for vending machines."
];

const emoji = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "😂 ",
  "🤣",
  "😊 ",
  "😇 ",
  "🙂 ",
  "🙃 ",
  "😉 ",
  "😌 ",
  "😍 ",
  "🥰 ",
  "😘 ",
  "😗 ",
  "😙 ",
  "😚 ",
  "😋 ",
  "😛 ",
  "😝 ",
  "😜 ",
  "🤪 ",
  "🤨 ",
  "🧐 ",
  "🤓 ",
  "😎 ",
  "🤩 ",
  "🥳 ",
  "😏 ",
  "😒 ",
  "😞 ",
  "😔",
  "😟 ",
  "😕 ",
  "🙁 ",
  "😣 ",
  "😖 ",
  "😫 ",
  "😩 ",
  "🥺 ",
  "😢 ",
  "😭 ",
  "😤 ",
  "😠 ",
  "😡 ",
  "🤬 ",
  "🤯 ",
  "😳",
  "🥶 ",
  "😱 ",
  "😨 ",
  "😰 ",
  "😥 ",
  "😓 ",
  "🤗 ",
  "🤔 ",
  "🤭 ",
  "🤫 ",
  "🤥 ",
  "😶 ",
  "😐 ",
  "😑 ",
  "😬",
  "😯 ",
  "😦 ",
  "😧 ",
  "😮 ",
  "😲 ",
  "😴 ",
  "🤤 ",
  "😪 ",
  "😵 ",
  "🤐 ",
  "🥴 ",
  "🤢 ",
  "🤮 ",
  "🤧 ",
  "😷 ",
  "🤒 ",
  "🤕 ",
  "🤑 ",
  "🤠 ",
  "😈 ",
  "👿 ",
  "👹 ",
  "👺 ",
  "🤡",
  "👻 ",
  "💀",
  "👽 ",
  "👾 ",
  "🤖 ",
  "🎃 ",
  "😺 ",
  "😸 ",
  "😹 ",
  "😻 ",
  "😼 ",
  "😽 ",
  "🙀 ",
  "😿 ",
  "😾"
];

const riddle = [
  "What has to be broken before you can use it?",
  "I’m tall when I’m young, and I’m short when I’m old. What am I?",
  "What month of the year has 28 days?",
  "What is full of holes but still holds water?",
  "What question can you never answer yes to?",
  "What is always in front of you but can’t be seen?",
  "There’s a one-story house in which everything is yellow. Yellow walls,yellow doors, yellow furniture. What color are the stairs?",
  "What can you break, even if you never pick it up or touch it?",
  "What goes up but never comes down?",
  "A man who was outside in the rain without an umbrella or hat didn’t get a single hair on his head wet. Why?",
  "What gets wet while drying?",
  "What can you keep after giving to someone?",
  "I shave every day, but my beard stays the same. What am I?",
  "You see a boat filled with people, yet there isn’t a single person on board. How is that possible?",
  "You walk into a room that contains a match, a kerosene lamp, a candle and a fireplace. What would you light first?",
  "A man dies of old age on his 25 birthday. How is this possible?",
  "I have branches, but no fruit, trunk or leaves. What am I?",
  "What can’t talk but will reply when spoken to?",
  "The more of this there is, the less you see. What is it?",
  "I am the beginning of everything, the end of everywhere. I’m the beginning of eternity, the end of time and space. What am I?",
  "What 4-letter word can be written forward, backward or upside down, and can still be read from left to right?",
  "What is 3/7 chicken, 2/3 cat and 2/4 goat?",
  "What is so fragile that saying its name breaks it?",
  "What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?",
  "Speaking of rivers, a man calls his dog from the opposite side of the river. The dog crosses the river without getting wet, and without using a bridge or boat. How?",
  "What can fill a room but takes up no space?",
  "If you drop me I’m sure to crack, but give me a smile and I’ll always smile back. What am I?",
  "A word I know, six letters it contains, remove one letter and 12 remains. What is it?",
  "If there are three apples and you take away two, how many apples do you have?"
];

const name = [
  "your cat",
  "Minecraft Steve",
  "That fart you are holding in",
  "Bill Bates",
  "Donald Trump",
  "Mahinda Rajapaksha",
  "Gotabaya Rajapaksha",
  "Nandimithra",
  "A tiktok star",
  "Your mother",
  "Your girlfriend",
  "Your grandmother",
  "Steve",
  "Cg matter",
  "An idiot",
  "Homer Simpson",
  "A gay",
  "Gadola",
  "Sanda",
  "Mutti",
  "A pornstar",
  "Iron man",
  "Spider man",
  "Sun",
  "Moon",
  "Bat man",
  "Barack Obama",
  "Super man",
  "Wonder woman",
  "අඹ සීයා",
  "සෝරත පොඩිසාදු",
  "Your ex"
];

const memes = [
  "https://i.pinimg.com/236x/0d/30/6c/0d306ccc4a41ea722727e7698e84e6ca.jpg",
  "https://i.pinimg.com/236x/7c/8d/c4/7c8dc4ed6524d308dd80cae5cf495f96.jpg",
  "https://i.pinimg.com/236x/bf/eb/40/bfeb40936d0e208f44fdb580be3d46d9.jpg",
  "https://i.pinimg.com/236x/30/f8/0b/30f80b6d8d46936845951651d5a07f86.jpg",
  "https://i.pinimg.com/236x/b9/9d/be/b99dbe8dda773913296785bdfdf2d7da.jpg",
  "https://i.pinimg.com/236x/ad/ab/01/adab010a796cb4a4ddf89c80fdce0d5d.jpg",
  "https://i.pinimg.com/236x/a3/da/6e/a3da6e86dd61b8e3e8a1be590db4e970.jpg",
  "https://i.pinimg.com/236x/8d/a8/10/8da810f8851b7aac5ea59fee1ce6ffb6.jpg",
  "https://i.pinimg.com/236x/bb/b4/6e/bbb46e6564eb5286d1301afb6f7c3f7a.jpg",
  "https://i.pinimg.com/236x/05/b4/b7/05b4b77fc942290e5a89c1d404e8c391.jpg",
  "https://i.pinimg.com/236x/79/8a/74/798a74a247b3d98e9d20f90a21a810f0.jpg",
  "https://i.pinimg.com/236x/ba/bd/80/babd8011e4048191b134a784a88d13b1.jpg",
  "https://i.pinimg.com/236x/98/58/a2/9858a2fb1563855e04db6a6288801671.jpg",
  "https://i.pinimg.com/236x/c6/d4/1f/c6d41fc3a6975ef6f9056442ddee156c.jpg",
  "https://i.pinimg.com/236x/b9/72/cd/b972cd4ab6c1601a069ca69249ffd63c.jpg",
  "https://i.pinimg.com/236x/82/42/dc/8242dc6faa70fef1db1beb5d948b3a87.jpg",
  "https://i.pinimg.com/236x/24/c4/6a/24c46a679666039d0d3d72d18e01f479.jpg",
  "https://i.pinimg.com/236x/dc/02/ec/dc02ec3512f148a6a221ec441e987131.jpg",
  "https://i.pinimg.com/236x/f9/60/2a/f9602a20af67e315dfa889e92d899d7f.jpg",
  "https://i.pinimg.com/236x/3e/71/18/3e71187e8f964ee4ed2da882a715979e.jpg",
  "https://i.pinimg.com/236x/47/3f/a3/473fa3dfed829f31ec6fcb7a8d0d7d8d.jpg",
  "https://i.pinimg.com/236x/e8/22/c4/e822c46c4552b4b459f7d63729839f69.jpg",
  "https://i.pinimg.com/236x/38/e6/bd/38e6bd77812d27c27359d3493108ccd9.jpg",
  "https://i.pinimg.com/236x/9b/6b/71/9b6b7133eec785527d059bf25122dcb3.jpg",
  "https://i.pinimg.com/236x/22/b1/6d/22b16d06682f49afac265ff6e3e2ec71.jpg",
  "https://i.pinimg.com/236x/08/6e/eb/086eeb93dc13d153ea451df6b92cfd55.jpg",
  "https://i.pinimg.com/236x/40/c2/18/40c2188cc39811e2c96c1bf86a1fcbea.jpg",
  "https://i.pinimg.com/236x/50/a6/65/50a66572d2d8feac45a1d5b82139fa22.jpg",
  "https://i.pinimg.com/236x/3b/ec/5e/3bec5e04f3baa109ea2d32aab91428b5.jpg",
  "https://i.pinimg.com/236x/91/10/1b/91101b191d99546b698c5535f210d586.jpg",
  "https://i.pinimg.com/236x/8a/21/0d/8a210d307cdf4b8234ce897ad205b7bc.jpg",
  "https://i.pinimg.com/236x/70/43/20/704320bf0e4f341b9e449b335e66b644.jpg",
  "https://i.pinimg.com/236x/45/8a/ae/458aae3ee9236419b67589a45bdbcfb2.jpg",
  "https://i.pinimg.com/236x/c5/ee/db/c5eedb5f21c39c66f9a885fcd95c464d.jpg",
  "https://i.pinimg.com/236x/b1/93/4c/b1934cfc4bed777f6272bd65ff0e9b34.jpg",
  "https://i.pinimg.com/236x/fc/39/f2/fc39f27de12059b59fbe3c31ca2c55f0.jpg",
  "https://i.pinimg.com/236x/28/92/45/289245eb7af2b0a98a9b1db58746baa5.jpg",
  "https://i.pinimg.com/236x/80/6c/32/806c322bad58f61b2a117501969b8bd8.jpg",
  "https://i.pinimg.com/236x/96/d6/86/96d686bd647908e7c1c53e5d456a3d52.jpg",
  "https://i.pinimg.com/236x/e5/e0/4e/e5e04eb0344e5834bfad7c65fa541049.jpg",
  "https://i.pinimg.com/236x/87/16/2a/87162a020ce578adc40002132066b3e4.jpg",
  "https://i.pinimg.com/236x/6c/4f/9e/6c4f9e17dfc5e7dce1821bf2c4a7e058.jpg",
  "https://i.pinimg.com/236x/7b/b7/21/7bb721ba7a6a3ad118621b7abb35acf1.jpg",
  "https://i.pinimg.com/236x/e2/70/45/e2704599cf8562719fe5571267e6fc89.jpg",
  "https://i.pinimg.com/236x/3d/0e/8f/3d0e8f994efc97ab77ee3ef6da8fb491.jpg",
  "https://i.pinimg.com/236x/dd/ec/53/ddec53b21edac9c977b8bb39b85e96a8.jpg",
  "https://i.pinimg.com/236x/50/66/94/5066943a95da4d0d1727c7bd16f062a9.jpg",
  "https://i.pinimg.com/236x/62/9a/56/629a561cab3559b1d748952e0d157ef0.jpg",
  "https://i.pinimg.com/236x/05/94/10/0594105706a4ea30e009e883d0d7cead.jpg",
  "https://i.pinimg.com/236x/ce/74/c0/ce74c08a55f572d5b18b13de51bbe0e3.jpg",
  "https://i.pinimg.com/236x/13/32/5b/13325b95bbb294e1994963638511e1ed.jpg",
  "https://i.pinimg.com/236x/b1/45/d1/b145d1da1c417fe6b916dbf4e5430c80.jpg",
  "https://i.pinimg.com/236x/6f/f7/6e/6ff76ef54eadd8c1af0ee984f2511ff9.jpg",
  "https://i.pinimg.com/236x/5e/27/95/5e2795d02a46cb5bfd29b890b1bb0b99.jpg",
  "https://i.pinimg.com/236x/3b/dd/90/3bdd909166b898f26fc789f1fe51d455.jpg",
  "https://i.pinimg.com/236x/f2/d4/1e/f2d41e06c63cbdad88c402275b98da10.jpg",
  "https://i.pinimg.com/236x/a9/d1/14/a9d1141c1e0cd520ea7144906906dacf.jpg",
  "https://i.pinimg.com/236x/3b/cd/a7/3bcda744ad44f1a47f2af46968f8b7c5.jpg",
  "https://i.pinimg.com/236x/c1/92/f7/c192f7d027598f13d9637c486fe45041.jpg",
  "https://i.pinimg.com/236x/8e/a5/a5/8ea5a590d19e68b1e94afc48a4aa84a5.jpg",
  "https://i.pinimg.com/236x/5e/1d/f8/5e1df8e30fe73927ac09ac0d5f2af009.jpg",
  "https://i.pinimg.com/236x/85/a4/6a/85a46aafb504855ce749515948a964ff.jpg",
  "https://i.pinimg.com/236x/d7/60/1a/d7601a5e72c98f5f7cd0520cadbc1b71.jpg",
  "https://i.pinimg.com/236x/70/3d/c4/703dc440c4a4481df859ba7fce26e3ee.jpg",
  "https://i.pinimg.com/236x/a2/c0/5a/a2c05a389621b1b1bd64c201d6284bdd.jpg",
  "https://i.pinimg.com/236x/98/ed/ff/98edff012feeeff20549ec1e76c92084.jpg",
  "https://i.pinimg.com/236x/30/69/3c/30693c8d4aabb689c76f5f3cd19804fd.jpg",
  "https://i.pinimg.com/236x/6d/3e/b9/6d3eb933d4e1f9105b4934bde9049455.jpg",
  "https://i.pinimg.com/236x/f6/12/25/f61225d524a35cf08a790d777dd75e30.jpg",
  "https://i.pinimg.com/236x/be/66/52/be6652653a21c3d7c0feab80ff6b0242.jpg",
  "https://i.pinimg.com/236x/47/41/4b/47414b12d6bbe67af2db01bf2ea2b44b.jpg",
  "https://i.pinimg.com/236x/e9/81/91/e9819185d46090741bb5516b6b77f073.jpg",
  "https://i.pinimg.com/236x/c6/a2/80/c6a28050058ec061731e4515cd1a0c24.jpg",
  "https://i.pinimg.com/236x/a7/f3/96/a7f396f684db9d40963433ac9660f6ec.jpg",
  "https://i.pinimg.com/236x/68/72/5d/68725d542d603d9a8872d973b76429fd.jpg",
  "https://i.pinimg.com/236x/4a/58/dd/4a58dd1454f7303f036bb64ee4237349.jpg",
  "https://i.pinimg.com/236x/ca/f1/b4/caf1b44807a245e6436a0be7fe4a6ca6.jpg",
  "https://i.pinimg.com/236x/9a/43/8c/9a438cbcf86ad08ad7099ca1b9429c4f.jpg",
  "https://i.pinimg.com/236x/90/b3/20/90b320b19aed239bbccf4620f86953ae.jpg",
  "https://i.pinimg.com/236x/1e/a4/18/1ea41810e6009ab4b6fe600a668973eb.jpg",
  "https://i.pinimg.com/236x/7c/6d/53/7c6d535e53db198d1bf9b08de7f05d4e.jpg",
  "https://i.pinimg.com/236x/42/f8/43/42f843826914b2c5a4e4bff003176685.jpg",
  "https://i.pinimg.com/236x/b1/28/ec/b128ec642829d44773d33e66faa1b97f.jpg",
  "https://i.pinimg.com/236x/dc/8a/fa/dc8afafb473d35a6cacfcaa71efc268c.jpg",
  "https://i.pinimg.com/236x/a9/77/50/a977504b4b09faef23c1b38fb9913d79.jpg",
  "https://i.pinimg.com/236x/42/61/d6/4261d6a7564fbf383032f805b8a7a42f.jpg",
  "https://i.pinimg.com/236x/b7/e3/c8/b7e3c84e8638c2b4fe0a0fbe8f9d4f4b.jpg",
  "https://i.pinimg.com/236x/42/62/ea/4262ea1ff7bbb08d82a1451461335f5f.jpg",
  "https://i.pinimg.com/236x/20/65/ad/2065ad61dc526a6ae5be962c255d34e2.jpg",
  "https://i.pinimg.com/236x/e5/86/0e/e5860e0e627c995d03c6561cc43fab48.jpg",
  "https://i.pinimg.com/236x/2a/64/c2/2a64c2218c035c1869c2250bddcd378e.jpg",
  "https://i.pinimg.com/236x/7d/e4/34/7de434651329b4d036f11ec9f645c721.jpg",
  "https://i.pinimg.com/236x/f3/ee/6c/f3ee6c7f31919fc2c6525a2137e190b9.jpg",
  "https://i.pinimg.com/236x/e3/a8/66/e3a86664fd2d4dd8358ce5c60b4f1670--grumpy-cat-frozen-so-funny.jpg",
  "https://i.pinimg.com/236x/55/5a/ad/555aade8ef4054a9cedde16fd269529c--funny-animal-pictures-funny-animals.jpg",
  "https://i.pinimg.com/236x/b6/0f/ce/b60fce52e0e2b7091937b681d2251f07--raven-symone-ravens.jpg",
  "https://i.pinimg.com/236x/0b/fc/a8/0bfca8eca795a4b8f3c70c2c82660b66--kermit-anime.jpg",
  "https://i.pinimg.com/236x/89/71/19/8971197193c03c69f7dd88496a83043b--cats-humor-funny-cats.jpg",
  "https://i.pinimg.com/236x/cf/01/9f/cf019f0adc63325c40b9629baa3711bf--very-funny-funny-memes.jpg",
  "https://i.pinimg.com/236x/6f/b2/7e/6fb27e7c52c86a204cea7eeb3018e4f1--llama-llama-llama-face.jpg",
  "https://i.pinimg.com/236x/c6/ff/a9/c6ffa9dfc8b2544a18c7cb9dff95480e--the-one-this-is-me.jpg",
  "https://i.pinimg.com/236x/93/02/41/930241bc3ff1425d189b1f34f614e7aa---days-amazing-quotes.jpg",
  "https://i.pinimg.com/236x/30/6b/d1/306bd1d280e1b98d29b9ebb3ce930205.jpg",
  "https://i.pinimg.com/236x/4d/59/54/4d5954f32fdecb358e96d79abc05915d--school-games-crazy-things.jpg",
  "https://i.pinimg.com/236x/1a/87/2e/1a872e5d84e98d5732a6478bc315dc46--happy-monday-funny-funny-monday-quotes.jpg",
  "https://i.pinimg.com/236x/71/e6/24/71e6247fc3b13b5c953ee8e55aa81bd8--funny-grumpy-cats-grumpy-cat-quotes.jpg",
  "https://i.pinimg.com/236x/65/3f/ba/653fba174b1d40c642f630790e9f5b66--ocd-nightmare-funny-fails.jpg",
  "https://i.pinimg.com/236x/34/34/a4/3434a406e1934c930f2c0d8a0b5dabcd--grumpy-kitty-the-grumpy-cat.jpg",
  "https://i.pinimg.com/236x/36/af/65/36af6539d6ce91b19f275bcbf4b11910--love-memes-love-puns.jpg",
  "https://i.pinimg.com/236x/dd/e3/3d/dde33d00ae8c2b3f225182e6f5b91e88--funny-tweets-funny-memes.jpg",
  "https://i.pinimg.com/236x/16/7c/94/167c942bbc0d2272cc6d3f1b5011f7e7--not-funny-stupid-funny.jpg",
  "https://i.pinimg.com/236x/01/0b/68/010b68214bf1eeb91060732aa58bed1e--funny-jokes-funny-shit.jpg",
  "https://i.pinimg.com/236x/16/ed/16/16ed164f84a3ccf15964a493ccd81f38--funny-happy-birthdays-pictures-of.jpg",
  "https://i.pinimg.com/236x/17/c7/72/17c772d102dea2680b204e44f560af46--hold-me-gravity.jpg",
  "https://i.pinimg.com/236x/10/04/02/100402f7e07ac3f83ffcaba79f737e12--funny-medical-humor-er-humor.jpg",
  "https://i.pinimg.com/236x/52/1b/5d/521b5d34060381e37b0fb8e34e9ff80c--duck-duck-the-duck.jpg",
  "https://i.pinimg.com/236x/50/7e/b7/507eb7a8279670604669f43c73e4df38--gun-meme-meme-meme.jpg",
  "https://i.pinimg.com/236x/0e/09/98/0e0998308bd87ab9fd604295fed03c47--funny-but-true-haha-so-true.jpg",
  "https://i.pinimg.com/236x/8a/88/3f/8a883f7af0c76372779dd74a2f15ee27--clocks-picture-day.jpg",
  "https://i.pinimg.com/236x/1c/5e/0c/1c5e0c47d08e1dadad7be5205c641079--the-app-i-can-relate.jpg",
  "https://i.pinimg.com/236x/9b/52/3d/9b523dfa1f95852e9caec86f9e620460--minions-love-minion-s.jpg",
  "https://i.pinimg.com/236x/1a/7d/68/1a7d6899532b1fa5089033d4420ec0cb--minion-sayings-minions-quotes.jpg",
  "https://i.pinimg.com/236x/7c/94/e0/7c94e0a73545dd217dda248a6b6171e3--i-hate-math-hate-math-humor.jpg",
  "https://i.pinimg.com/236x/09/a2/9a/09a29a6de956b5fcb345a097f5e2ca85--monday-face-its-monday.jpg"
];

module.exports.pp = pp;
module.exports.future = future;
module.exports.emoji = emoji;
module.exports.name = name;
module.exports.riddle = riddle;
module.exports.memes = memes;
