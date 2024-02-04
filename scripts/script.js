//  scroll button : Bottom to TOP as well as translucent navbar on scroll

let toTopButton = document.getElementById("to-top-button");
// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function () {
  if (
    document.body.scrollTop > 140 ||
    document.documentElement.scrollTop > 140
  ) {
    toTopButton.classList.remove("hidden");
  } else {
    toTopButton.classList.add("hidden");
  }
};

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// hamburger function
function Menu(e) {
  let list = document.querySelector("ul");
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"),
      list.classList.add("bg-transparent"),
      list.classList.add("blurred"))
    : ((e.name = "menu"),
      // list.classList.remove("blurred"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"));
}

// random image at hero section
let id = Math.ceil(Math.random() * 4);
console.log(id)
document.getElementById(
  "festName"
).style.backgroundImage= `linear-gradient(90deg, rgba(0,0,0,0.30015756302521013) 15%, rgba(0,0,0,0.2945553221288515) 68%),url(./img/hero-section/${id}.jpg)`;

// CountDown Timer
let countDownDate = new Date("February 09, 2024 00:00:00").getTime();

let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("time").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("event-timer").innerHTML = "Event Started";
    document.getElementById("event-timer").style.textAlign = "center";
    document.getElementById("time").innerHTML = "";
  }
}, 1000);

// hide button in event section
document.getElementById("hideBtn").addEventListener("click", function () {
  let boxes = document.querySelectorAll(".box");
  let numToHide = 19; // Change this number to hide a different amount of boxes

  for (let i = 0; i < numToHide; i++) {
    if (boxes[i]) {
      if (boxes[i].classList.contains("hidden")) {
        boxes[i].classList.remove("hidden");
        document.getElementById("hideBtn").textContent = "Show Less";
      } else {
        boxes[i].classList.add("hidden");
        document.getElementById("hideBtn").textContent = "Show More";
      }
    }
  }
});

// all rules and regulation data along with their registration link
let rulesAndReg = [
  {
    // vocal vista
    overview:
      "Prepare for an exceptional display of talent, passion, and vocal brilliance at Vocal Vista. This singing competition celebrates diverse voices, bringing together aspiring vocalists to enchant audiences, traverse musical genres, and leave a lasting impact.",
    eligibility:
      "Open to solo performers or groups of 3-4 from any college or university",
    rules: [
      "Songs can be in any language.",
      "Only live singing is permitted with backing track which depends on   opinion of judges.",
      "Participants must submit their song choices for pre-approval before 8 February.",
      "Submit your entries at sangeetam mail id sangeetam@shobhituniversity.ac.in",
      "Participants must submit their track after approval of the song till evening of 8 February.",
      "Minimum duration of performance is 2 minutes and maximum 4 minutes.",
      "Minimum participants for group performance 2 or maximum 5.",
    ],
    entry_fee: ["Solo performance :₹200", "Duet or group performance :₹500 "],
    judging_criteria: [
      "Vocal quality",
      "Stage presence",
      "Originality",
      "Audience response",
      "Overall impression ",
    ],
    prize_money: ["Attractive Gift hampers", "Certificates of excellence."],
    regbtn: "https://forms.gle/dUXxzCrMAYd7DjRr7",
  },
  {
    //shabd saaj
    overview:"Poets and Shayars recite their compositions, showcasing the beauty of verse and prose.",
    eligibility: "Open to all",
    rules: [
      "Submission Guidelines:",
      "Poetry/Shayari must be original and in Hindi, English, Hinglish, or Urdu.",
      "Poetry/Shayari must be minimum of 6 lines.",
      "Poetry must be submitted in a typed format.",
      "General Rules : ",
      "All submissions must be made by the due date.",
      "Late submissions will not be accepted.",
      "The decision of the judges will be final.",
      "Organizers/ Judges reserve the right to change any of the rules at any time.",
      "Participants must be available to perform their Poetry/Shayari on stage at the designated time.",
      "Participants are encouraged to use musical terms and concepts in their Shayari.",
    ],
    entry_fee: ["₹200"],
    prize_money: ["Attractive Gift Hamper with novels and certificates"],
    judging_criteria: [
      "Creativity of words",
      "Meaning of the piece performed",
      "Literature delivery",
    ],
    regbtn: "https://forms.gle/AcWaauT6dsBgxT5S7",
    add_info:["Participants can submit their Poetry/Shayari offline or online."],
  },
  {
    //battle of bands
    overview:
      "Bands compete to impress with their musical synergy and stage showmanship.",
    eligibility: "Groups of up to 8 musicians from any college or university. ",
    rules:[
      "Originality:",
      "A certain percentage of the music performed if original material rather than covers will be much appreciated. This encourages creativity and supports original artists.",
      "Registration : ",
      "Bands usually need to register for the competition within a specified timeframe. This may involve submitting other materials for consideration.",
      "General Rules :",
      "Each band is allotted a 12 time to perform, including setup and takedown. This helps to ensure that the competition progresses smoothly and that all participating bands have an equal opportunity to showcase their talents.",
      "No backing tracks: all music must be played live. ",
      "Offensive language in lyrics is strictly prohibited. "],
    entry_fee:
      [" ₹1500 per team."],
    prize_money: ["₹8000 for the winning band and a certificate of excellence"],
    judging_criteria:
      ["Musicality", "Stage Presence", "Audience Engagement", "Originality", "Overall Performance."],
      add_info:["Drums will be provided at the venue and all other instruments should be arranged by the band themselves. (You may bring your drums as well, at your own risk, but please inform the coordinators beforehand about this.)"],
    regbtn: "https://forms.gle/Vw9A88R4DbvSR2s36",
  },
  {
    //doodle sketching
    overview:
      "An event for those who communicate through strokes of a brush or pencil, expressing their artistic visions",
    eligibility: "Solo participants.",
    rules:
      ["Maximum duration for creating the artwork is 120 minutes." ,
      "Participants must bring their own art supplies. Canvas shall be provided by the University.", 
      "Artwork must be original and created on-site.", 
      "The artwork will become the property of the University.",
    ],
    entry_fee:
     [ "₹200 per participant"],
    prize_money:
      ["Attracting Gift hampers and Certificates of excellence."],
    judging_criteria: ["Originality and creativity",
    "Technical skill and execution",    "Adherence to the theme",    "Overall impact"],
    add_info:["Theme: The theme of the competition has an “Open Theme”. The participants are open to express their creativity in any artwork.","Artwork Requirements :",
    "The artwork must be original and created by the participant.",
    "The artwork must be two-dimensional (e.g.,painting,drawing,printmaking)"
  ],
    regbtn: "https://forms.gle/Z1EpGbg7X4SNnsEX8",
  },
  {
    //style symphony
    overview:
      " A glamorous event where pairs exhibit fashion and confidence on the runway.The Fashion Show will be held on the main stage of the college fest.Participants will walk the ramp one by one, showcasing their attire.A panel of judges will be present to evaluate the participants and select the winners.Prizes will be awarded to the top participants.Teams will be judged on costumes, theme, walking stance and attitude.",
    eligibility: "Teams of two",
    rules:["Participants must be dressed in preferably theme of Sangeetam.",
      "Participants must walk the ramp with confidence and poise.",
      'Participants must not use any props or accessories that are not part of their theme attire.',
      "Participants must not engage in any behavior that is deemed disrespectful or offensive."],
    entry_fee:
      ["₹800/pair"],
    prize_money:
      ["₹5000 for the pair that showcases the best walk, attire, and stage presence"],
    judging_criteria: ["Overall appearance", 
      "Creativity and originality" ,
      "Confidence and poise ",
      "Adherence to the theme of Sangeetam" ],
    add_info:["Theme: Bollywood"],
    regbtn: "https://forms.gle/PF5iwd1gEAJuTpFe6",
  },
  {
    //canvas painting competition
    overview:
      "An event for those who communicate through strokes of a brush or pencil, expressing their artistic visions.",
    eligibility: " Solo participants.",
    rules:
     [ "Maximum duration for creating the artwork is 120 minutes.", 
     "Participants must bring their own art supplies.",
     "Canvas shall be provided by the University.", 
     "Artwork must be original and created on-site.", 
     "The Artwork will become the property of the University. "],
    entry_fee:
      ["₹200 per participant"],
    prize_money:
[  "Attractive gift hampers and a certificates of excellence."],
    judging_criteria: ["Originality and creativity",
    "Technical skill and execution",
    "Adherence to the theme",
    "Overall impact"],
    add_info:["Theme: This competition has an open theme. The participants free to express their creativity and paint the canvas bright.","Artwork Requirements:",
    "The artwork must be original and created by the participant.",
    "The artwork must be two-dimensional (e.g., painting, drawing, printmaking)."],
    regbtn: "https://forms.gle/zuxyWVWGHRzRsyER6",
  },
  {
    //snapshot showdown
    overview:
      "A contest for photographers to capture moments that reflect the theme provided.",
    eligibility: "Solo Participant. Photographs must be in high resolution. Participant must use their own camera. Photographs must adhere to the theme provided in advance. Manipulation of photos is limited to basic adjustments, no digital art.",
    rules:
      ["Participants must submit original photographs that have not been submitted to any other competitions.",
      "Each participant can submit a maximum of three photographs.",
      "The photographs must not contain any offensive or controversial content.",
     " Submit your best photograph by 10th February 2024, 10:00 AM afterwards no entry will be considered. Include your Name, Course, Name of the Institution/College, and Contact information in the e-mail.",
      "Judgement will be done by the expert judges.",
      "The photographs must be in JPEG, PNG format.",
      "Winner will be appreciated with exciting winning prize."],
    entry_fee:
      ["₹250 per participant"],
    prize_money:
      ["Attractive gift hampers and certificates of excellence."],
    judging_criteria:
      ["Composition", "Originality","Relevance to the theme","Technical quality."],
      add_info:["Theme:  Unnat Aur Viksit Bharat: Capturing Progress, Celebrating Prosperity","Sub Themes:","Harmonizing Cultures and Amplifying Talents","Empowering Nation through education","Urban Development","Rural Prosperity","Education Initiatives","Cultural Diversity"],
    regbtn: "https://forms.gle/Aw9tcpwgHzzvVX9M8",
  },
  {
    //feat of fury (solo/duet)
    overview:
      "Get ready to witness an explosion of creativity, self-expression, and breathtaking choreography in 'feet of fury' This dance competition is a celebration of the boundless spirit of dance, inviting solo and duet performers to showcase their unique styles, tell stories through movement, and leave the audience mesmerized by the power of rhythm and motion.",
    eligibility: "Participants can participate individually or in duets. ",
    rules:
      ["All participants must agree to abide by the rules of the competition.", 
     "The decision of the judges final and binding. ",
      "The organizers reserve the right to modify the rules or cancel the competition at any time without prior notice."],
    entry_fee:
      ["Rs 400 for both Solo and duet.",
      "Registration can be done online or at the registration desk on the day of the competition (to be Decided for desk registration). "],
    prize_money: ["Rs.2000, attractive gifts, and certificates of excellence"],
    judging_criteria:
      ["Originality", "Technique", "synchronization (for duet)", "Overall performance. "],
      add_info:["Competition format:", 
        "Solo performances have a maximum duration of 5 minutes", "Duets have also the same time limit." ,
        "Offensive language in music is strictly prohibited." ],
    regbtn: "https://forms.gle/UU7PzUWiMN479rWG6",
  },
  {
    //comic carouse
    overview:
      "Comedians take the stage to deliver laughs, with routines that highlight their wit and humor.",
    eligibility: "Solo stand-up comedians.",
    rules:
      "Each performance is limited to 4 minutes. Content must be original and devoid of offensive language. Respect for all audience members and public figures is required.",
    entry_fee:
      "₹100 for Shobhitians, ₹200 for participants from other institutes.",
    prize_money: "₹2000 for the best comedian.",
    judging_criteria:
      "Humor, originality, delivery, and ability to engage the audience.",
    regbtn: "https://forms.gle/KxRKSkdxBJmaZSQW7",
  },
  {
    // shayarana shaam
    overview:
      "Poets and Shayars recite their compositions, showcasing the beauty of verse and prose.",
    eligibility: "Solo poets.",
    rules:
      "Recitations must not exceed 4 minutes. Submissions must be the participant’s own writing, free from offensive language. Pieces must be submitted beforehand for approval.",
    entry_fee:
      "₹100 for Shobhitians, ₹200 for participants from other institutes.",
    prize_money: "₹2000 for the most compelling recitation.",
    judging_criteria: "Emotional depth, delivery, lyrical beauty, and impact.",
    regbtn: "https://forms.gle/D6Hr2tZijyCfULs6A",
  },
  {
    //treasure hunt
    overview:
      "An adventurous and exciting game that tests problem-solving and teamwork, the Treasure Hunt leads teams on a quest to find hidden treasures around the campus.",
    eligibility: "Teams of up to 5 individuals.",
    rules:
      "The hunt duration is a maximum of 30 minutes. Cohesiveness and team building are promoted. Teams must solve clues to find the treasure, adhering to fair play.",
    entry_fee:
      "₹200 for Shobhitians, ₹300 for participants from other institutes.",
    prize_money: "₹3000 for the first team to successfully complete the hunt.",
    judging_criteria: "Time taken, teamwork, and ability to solve clues.",
    regbtn: "https://forms.gle/59tAoTiL4V2fDMiq6",
  },
  {
    // beat boxing
    overview:
      "Contestants display their beatboxing prowess, using vocal percussion to create beats and rhythms.",
    eligibility: "Open to solo beatboxers or duos.",
    rules:
      "The maximum performance duration is 4 minutes. No offensive language or sounds; maintain a positive atmosphere. Participants may use microphones provided but no other electronic devices.",
    entry_fee:
      "₹100 for Shobhitians, ₹200 for participants from other institutes.",
    prize_money: "₹2000 for the winner.",
    judging_criteria:
      "Technical skill, originality, musicality, and stage presence.",
    regbtn: "https://forms.gle/ye3mikAsM7CRfDxZ6",
  },
  {
    // freestyle dance (group)
    overview:
      "A showcase for dancers to express themselves freely, blending various dance styles. ",
    eligibility: "Groups of up to 6 participants. ",
    rules:
      "Group performances have a maximum duration of 4 minutes. Language for any accompanying music can be Hindi, English, or any regional language. Offensive language in music is strictly prohibited.",
    entry_fee:
      "₹200 for groups (Shobhitians); ₹400 for groups from other institutes. ",
    prize_money: "₹5000 for winning group.",
    judging_criteria:
      " Originality, technique, synchronization, and overall performance. ",
    regbtn: "https://forms.gle/AtSbbsLbVS62RTWx9",
  },
  {
    // freestyle dance (solo)
    overview:
      "A showcase for dancers to express themselves freely, blending various dance styles. ",
    eligibility: "Solo dancers",
    rules:
      "	Solo performances have a maximum duration of 4 minutes. Language for any accompanying music can be Hindi, English, or any regional language. Offensive language in music is strictly prohibited.",
    entry_fee:
      "₹100 for solo (Shobhitians); ₹200 for solo from other institutes. ",
    prize_money: "₹3000 for solo winner.",
    judging_criteria: " Originality, technique, and overall performance. ",
    regbtn: "https://forms.gle/FycarAcFhfpFcxVL9",
  },
  {
    //nritya navrang
    overview:
      "Celebrating the rich cultural heritage of India, this event is for those who perform traditional and folk dances.",
    eligibility: " Solo performers or groups of up to 6 participants.",
    rules:
      "The maximum duration of the performance is 5 minutes.  Language for music can be Hindi, English, or any regional language.  Offensive language in music is strictly prohibited.",
    entry_fee:
      " ₹200 for Shobhitians, ₹400 for participants from other institutes.",
    prize_money: " ₹5000 for the best performance. ",
    judging_criteria:
      "Authenticity, costumes, expression, and adherence to the traditional dance form. ",
    regbtn: "https://forms.gle/j8xLYqZLqQiA2SsT8",
  },
  {
    // murals of melody (wall painting)
    overview:
      " An event for artists to create large-scale paintings live, this contest encourages creativity on a grand scale.",
    eligibility: " Groups of up to 4 participants.",
    rules:
      " Maximum painting time is 45 minutes.  Themes must be positive and must not potentially hurt regional or other sentiments 	Language for any text in the painting can be Hindi, English, or any regional language.",
    entry_fee:
      " ₹100 for Shobhitians, ₹200 for participants from other institutes.",

    prize_money:
      " ₹3000 for the group with the most impactful and creative wall painting.",
    judging_criteria: " Creativity, message, technique, and visual impact.",
    regbtn: "https://forms.gle/dJcZTgQGM5cnd5bJ8",
  },
  {
    //face painting(canvas of colours)
    overview:
      " A display of artistic talent on a live canvas, participants bring designs to life on the face.",
    eligibility: " Solo participants.",
    rules:
      " Films must be completed within a 45-minute window.  Language can be Hindi, English, or any regional language.  Content must be appropriate, avoiding themes that could offend regional or other sentiments.",
    entry_fee:
      " ₹200 for Shobhitians, ₹400 for participants from other institutes.",
    prize_money: " ₹2000 for the most creative and skillful face painting.",
    judging_criteria: " Artistry, originality, and execution.",
    regbtn: "https://forms.gle/mtEzLMuPUvJyEbHYA",
  },
  {
    //nukkad natak
    overview:
      "A platform for groups to perform plays in public spaces, medium for storytelling, addressing social issues.",
    eligibility: "Each team must consist of 8-15 members.",
    rules:
      "The duration should be minimum of 8-15 minutes. The use of abusive language,vulgarity, obscenity, or any material that may hurt sentiments of any individual or group is strictly prohibited. Natak should be original and not copied. The use of props & costumes is allowed, but they should be minimal & easily carried. The use of any sound system is not allowed.",
    entry_fee: "₹1000/- ",
    judging_criteria:
      "Content and relevance to theme.	Creativity and originality, script portray, acting performance, stage presence and communication, teamwork, expression of thought and impact on public.",
    prize_money: "Winning team will receive ₹5100/-",
    regbtn: "https://forms.gle/11U9q91TsZHa2gcf8",
  },
  {
    //mimicry competition
    overview:
      "A test of imitation skills where solo performers mimic famous personalities or voices.",
    eligibility: " Solo performers.",
    rules:
      "	Acts must not exceed 4 minutes.	Performances must not include offensive language or gestures.	Participants should ensure that the content is in good taste and not derogatory.",
    entry_fee:
      "₹100 for Shobhitians, ₹200 for participants from other institutes.",
    prize_money:
      "₹2000 for the performance that best combines accuracy and entertainment.",
    judging_criteria:
      "Similarity to the subject, creativity, humor, and audience reaction.",
    regbtn: "https://forms.gle/51V3hQnLwiRdUG8P6",
  },
  {
    // Qawwali
    eligibility: "Group of up to 5 -7 participants.",
    overview:
      " Each team will be given 6-8 minutes to perform a qawwali piece.",
    judging_criteria:
      " (Might be subject to change) Musicality  Cohesion	Authenticity	Audience engagement	Vocal quality and harmony. Rythm and tempo.Presentation and stage presence.	Adherence to qawwali piece.",
    rules:
      "All the participants must be present at the registration desk at least 15 minutes before the start of the event.  Use of any vulgar, obscene, a disrespectful language will lead to disqualification.  The decision of the judges will be final and binding. Participating group must be in traditional attire. ",
    entry_fee: " Rs.800 per team.",
    prize_money:
      "Rs.3100 for the group the best captures the essence of qawwali.",
    regbtn: "https://forms.gle/7LKKKut6fknaC7mY6",
  },
  {
    // rhythm rebellion(beat boxing)
    overview:
      " Contestants display their beatboxing prowess, using vocal percussion to create beats and rhythms.",
    eligibility: "Open to solo beatboxers or duos.",
    rules:
      "The maximum performance duration is 4 minutes.  No offensive language or sounds; maintain a positive atmosphere.  	Participants may use microphones provided but no other electronic devices.",
    entry_fee:
      " ₹100 for Shobhitians, ₹200 for participants from other institutes.",
    prize_money: "₹2000 for the winner.",
    judging_criteria:
      "Technical skill, originality, musicality, and stage presence.",
    regbtn: "https://forms.gle/MseBLcXkMDirPqUB9",
  },
  {
    // movie making
    overview:
      " A chance for budding filmmakers to tell a story through their lens, the Movie Making competition seeks to discover new perspectives and narratives. ",
    eligibility: "Groups of up to 4 individuals.",
    rules:
      " Films must be completed within a 5-8 minute window.  Language can be Hindi, English, or any regional language.  Content must be appropriate avoiding themes that could offend regional or other sentiments. Theme: Overcoming Challenges",
    entry_fee: "₹500 per team.",
    judging_criteria:
      "Storytelling, cinematography, editing, originality, and topic relevance.",
    prize_money: " Attractive Gift hampers ",
    regbtn: "https://forms.gle/MwN5k6rEWg4yEWcc8",
  },
  {
    //t-shirt designing
    overview:
      "A platform for creative expression through fashion, this contest invites participants to design a T-shirt that makes a statement. ",
    eligibility: "Teams of 1 or 2 individuals. ",
    rules:
      "Designing must be completed within 1 hour. Language for any text on the T-shirt can be Hindi, English, or any regional language. Designs must be original and respectful, without any potential to offend. Theme: Connecting India",
    entry_fee: "₹500",
    judging_criteria:
      "Creativity, message clarity, aesthetic appeal, and originality.",
    prize_money:
      "Exciting Hampers for the team with the most creative and impactful T-shirt design.",
    regbtn: "https://forms.gle/envCDp9BJ3PLki9d7",
  },
];

// Event rules and regulation div
function makeadiv(
  image,
  rules,
  reg,
  overview,
  eligibility,
  entry_fee,
  prize_money,
  judging_criteria,add_info=null
) {
  // outer div
  const outerDiv = document.createElement("div");
  outerDiv.setAttribute(
    "class",
    "w-full h-screen bg-transparent backdrop-blur-sm z-50 flex justify-center items-center fixed top-0 left-0"
  );

  // inner div
  const innerDiv = document.createElement("div");
  innerDiv.setAttribute(
    "class",
    "p-5 w-11/12 h-10/12 flex flex-col justify-center items-center bg-[#0b0638] relative top-0 left-0 rounded-2xl"
  );

  // event title
  // const span = document.createElement("span");
  // span.innerText = title;
  // span.setAttribute(
  //   "class",
  //   "w-40 absolute top-[15%] z-50 text-center bg-[rgba(0,0,0,0.56)] backdrop-blur-sm "
  // );
  // event image
  const img = document.createElement("img");
  img.setAttribute("class", "w-60 h-36 border-2 border-slate-400 rounded-2xl ");
  img.src = image;

  // rules and regulation div
  const div2 = document.createElement("div");
  div2.innerHTML = `<div class="flex flex-col items-start justify-center overflow-y-auto text-xs md:text-base"><p class="mx-1 my-1 text-justify basis-full"><strong>Overview</strong>: <span class="text-gray-300">${overview}</span></p><p class="mx-1 my-1 text-justify basis-full"><strong>Eligibility</strong>: <span class="text-gray-300">${eligibility}</span></p><p class="mx-1 my-1 text-justify"><strong>Rules</strong>: <ul class="list-disc">${rules.map((i)=>{
    return `<li class="text-gray-300 ms-4">${ i}</li>`
  }).join("")}</ul></p><p class="mx-1 my-1 text-justify"><strong>Entry Fees</strong>: <ul class="list-disc">${entry_fee.map((i)=>{
    return `<li class="text-gray-300 ms-4">${ i}</li>`
  }).join("")}</ul></p><p class="mx-1 my-1 text-justify"><strong>Prize Money</strong>: <ul class="list-disc">${prize_money.map((i)=>{
    return `<li class="text-gray-300 ms-4">${ i}</li>`
  }).join("")}</ul></p><p class="mx-1 my-1 text-justify"<strong>Judging Criteria</strong>:  <ul class="list-disc">${judging_criteria.map((i)=>{
    return `<li class="text-gray-300 ms-4">${ i}</li>`
  }).join("")}</ul></p><p class="mx-1 my-1 text-justify"<strong>Additional Information</strong>: ${add_info? ` <ul class="list-disc">${add_info.map((i)=>{
    return `<li class="text-gray-300 ms-4">${ i}</li>`
  }).join("")}</ul>`:"<span class='text-gray-300'>None</span>"}</p> `;
  div2.setAttribute("class","max-h-80 w-72 md:w-full m-2 px-3 overflow-x-hidden overflow-y-auto border border-gray-200 rounded bg-[#0d0745]");

  // register Button
  const regbtn = document.createElement("button");
  regbtn.innerHTML = `<a href=${reg} class="mx-auto mt-1 rounded-lg w-max p-1 bg-blue-700" target="blank">Register Now</a>`;

  // close Button
  const clsbtn = document.createElement("button");
  clsbtn.style.borderRadius = "50%";
  // clsbtn.style.backgroundColor = "white";
  clsbtn.innerText = "❌";
  clsbtn.style.position = "absolute";
  clsbtn.style.top = "2px";
  clsbtn.style.right = "4px";
  clsbtn.addEventListener("click", () => {
    document.body.style.overflow = "auto";
    outerDiv.remove();
  });
  // innerDiv.appendChild(span);
  innerDiv.appendChild(img);
  innerDiv.appendChild(div2);
  innerDiv.appendChild(regbtn);
  innerDiv.appendChild(clsbtn);

  outerDiv.appendChild(innerDiv);
  document.body.appendChild(outerDiv);
}

const desc = document.querySelectorAll(".desc");
desc.forEach((elem) => {
  elem.addEventListener(
    "click",
    (e) => {
      document.body.style.overflow = "hidden";
      let {
        rules,
        regbtn,
        overview,
        eligibility,
        entry_fee,
        prize_money,
        judging_criteria,add_info
      } = rulesAndReg[Number(e.target.parentElement.id) - 1];
      makeadiv(
        e.target.currentSrc || e.target.nextElementSibling.currentSrc,
        rules,
        regbtn,
        // e.target.parentElement.innerText,
        overview,
        eligibility,
        entry_fee,
        prize_money,
        judging_criteria,add_info
      );
      // console.log(e.)
    },
    false
  );
});
