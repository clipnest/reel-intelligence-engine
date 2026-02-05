const tips = [
"Post within first 2 hours of peak time",
"Never upload without a hook",
"Use subtitles always",
"Keep reels under 35 seconds",
"One idea per reel"
];

function generatePlan(){

document.getElementById("loader").style.display="block";
document.getElementById("output").innerHTML="";

setTimeout(()=>{

const platform = platformValue();
const language = value("language");
const niche = value("niche");
const goal = value("goal");
const size = value("size");
const mode = value("mode");

const tip = tips[Math.floor(Math.random()*tips.length)];

let output = `
PLAN FOR: ${niche} | ${goal} | ${size} | ${platform}

----------------------------------

TODAY'S SMART TIP:
${tip}

----------------------------------

REEL TYPE: HOOK

5 Hook Ideas:
1. Nobody tells you this about ${niche}
2. Stop scrolling if you care about ${niche}
3. This mistake is killing your ${niche} growth
4. I tested this for 30 days
5. You need to hear this today

5 Caption Formulas:
- Short pain + promise
- Question + solution
- Bold claim + proof
- Relatable line + tip
- Mistake + fix

5 CTA:
- Follow for more
- Save this
- Share this
- Comment YES
- DM me

Hook Strength: STRONG
Difficulty: EASY
Best Time: 6PM - 9PM
Duration: 20-30 sec
Caption Length: 2-3 lines

----------------------------------

REEL TYPE: STORY

Hook:
How I changed my ${niche} journey

CTA:
Follow for part 2

----------------------------------

REEL TYPE: TUTORIAL

Hook:
Do this to grow in ${niche}

CTA:
Save this tutorial

----------------------------------

ENGAGEMENT CHECKLIST:
✔ Hook in first 2 sec
✔ Subtitles
✔ Clear CTA
✔ High contrast

WARNING:
Avoid copying viral videos exactly

CONSISTENCY SCORE:
80%

SUCCESS PREDICTION:
HIGH

----------------------------------

WHY THIS WORKS:
This system removes thinking and gives execution.

`;

document.getElementById("loader").style.display="none";
document.getElementById("output").innerText=output;

},1500);
}

function value(id){
return document.getElementById(id).value;
}

function platformValue(){
return document.getElementById("platform").value;
}
