document.getElementById("themeBtn").onclick = ()=>{
document.body.classList.toggle("light");
document.body.classList.toggle("dark");
}

document.getElementById("copyBtn").onclick = ()=>{
navigator.clipboard.writeText(
document.getElementById("output").innerText
);
alert("Copied!");
}

function generatePlan(){

document.getElementById("loader").style.display="block";
document.getElementById("output").innerText="";
document.getElementById("copyBtn").style.display="none";

setTimeout(()=>{

const lang = val("language");
const niche = val("niche");
const goal = val("goal");
const size = val("size");

let text="";

if(lang==="English"){
text=`
PLAN FOR: ${niche} | ${goal} | ${size}

-----------------------
7 DAY CONTENT PLAN
-----------------------

DAY 1 – Hook Reel
Hook: Nobody tells you this about ${niche}
CTA: Follow for more

DAY 2 – Tutorial Reel
Hook: Do this to grow faster
CTA: Save this

DAY 3 – Relatable Reel
Hook: If you feel stuck, read this
CTA: Comment YES

DAY 4 – Proof Reel
Hook: I tested this for 30 days
CTA: Follow

DAY 5 – Quote Reel
Hook: Read this twice
CTA: Share

DAY 6 – Mistake Reel
Hook: Stop doing this
CTA: Save

DAY 7 – Motivation Reel
Hook: Your sign to start
CTA: Follow

-----------------------
HOOK FORMULA
-----------------------
Curiosity + Pain + Promise

-----------------------
CAPTION STRUCTURE
-----------------------
Problem → Tip → Result → CTA

-----------------------
BEST SETTINGS
-----------------------
Duration: 20-30 sec  
Posting Time: 6PM-9PM  

-----------------------
WHY THIS WORKS
-----------------------
Removes confusion and gives daily execution.
`;
}else{
text=`
PLAN FOR: ${niche} | ${goal} | ${size}

-----------------------
7 DAY CONTENT PLAN
-----------------------

DAY 1 – Hook Reel
Hook: Koi ye baat nahi batata
CTA: Follow karo

DAY 2 – Tutorial Reel
Hook: Ye karo grow karne ke liye
CTA: Save karo

DAY 3 – Relatable Reel
Hook: Agar stuck ho toh suno
CTA: Comment YES

DAY 4 – Proof Reel
Hook: 30 din test kiya
CTA: Follow

DAY 5 – Quote Reel
Hook: Ye line yaad rakhna
CTA: Share

DAY 6 – Mistake Reel
Hook: Ye galti mat karo
CTA: Save

DAY 7 – Motivation Reel
Hook: Tum kar sakte ho
CTA: Follow

-----------------------
HOOK FORMULA
-----------------------
Curiosity + Pain + Promise

-----------------------
CAPTION STRUCTURE
-----------------------
Problem → Tip → Result → CTA

-----------------------
BEST SETTINGS
-----------------------
Duration: 20-30 sec  
Posting Time: 6PM-9PM  

-----------------------
WHY THIS WORKS
-----------------------
Confusion khatam karta hai aur action deta hai.
`;
}

document.getElementById("loader").style.display="none";
document.getElementById("output").innerText=text;
document.getElementById("copyBtn").style.display="block";

},1200);

}

function val(id){
return document.getElementById(id).value;
}
