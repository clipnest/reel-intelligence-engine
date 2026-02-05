function generatePlan(){

document.getElementById("loader").style.display="block";
document.getElementById("output").innerText="";

setTimeout(()=>{

const niche = document.getElementById("niche").value;
const goal = document.getElementById("goal").value;
const size = document.getElementById("size").value;
const lang = document.getElementById("language").value;

let output="";

if(lang==="English"){
output = `
PLAN FOR ${niche} | ${goal} | ${size}

HOOK IDEAS:
• Nobody tells you this about ${niche}
• Stop scrolling if you want growth
• This mistake is killing your progress

CAPTION FORMULA:
Problem → Promise → Tip → CTA

CTA:
Follow for more
Save this

BEST TIME: 6PM - 9PM
DURATION: 20-30 sec

WHY THIS WORKS:
Removes confusion and speeds execution.
`;
}

else{
output = `
PLAN FOR ${niche} | ${goal} | ${size}

HOOK IDEAS:
• Koi bhi ye baat nahi batata ${niche} ke baare me
• Agar growth chahte ho toh ruk jao
• Ye galti tumhari growth maar rahi hai

CAPTION FORMULA:
Problem → Promise → Tip → CTA

CTA:
Follow karo
Save karo

BEST TIME: 6PM - 9PM
DURATION: 20-30 sec

WHY THIS WORKS:
Confusion khatam karta hai aur action fast karta hai.
`;
}

document.getElementById("loader").style.display="none";
document.getElementById("output").innerText=output;

},1200);
}
