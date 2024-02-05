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
console.log(id);
document.getElementById(
  "festName"
).style.backgroundImage = `linear-gradient(90deg, rgba(0,0,0,0.30015756302521013) 15%, rgba(0,0,0,0.2945553221288515) 68%),url(./img/hero-section/${id}.jpg)`;

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
  // {
  //   //shabd saaj
  //   overview:
  //     "Poets and Shayars recite their compositions, showcasing the beauty of verse and prose.",
  //   eligibility: "Open to all",
  //   rules: [
  //     "Submission Guidelines:",
  //     "Poetry/Shayari must be original and in Hindi, English, Hinglish, or Urdu.",
  //     "Poetry/Shayari must be minimum of 6 lines.",
  //     "Poetry must be submitted in a typed format.",
  //     "General Rules : ",
  //     "All submissions must be made by the due date.",
  //     "Late submissions will not be accepted.",
  //     "The decision of the judges will be final.",
  //     "Organizers/ Judges reserve the right to change any of the rules at any time.",
  //     "Participants must be available to perform their Poetry/Shayari on stage at the designated time.",
  //     "Participants are encouraged to use musical terms and concepts in their Shayari.",
  //   ],
  //   entry_fee: ["₹200"],
  //   prize_money: ["Attractive Gift Hamper with novels and certificates"],
  //   judging_criteria: [
  //     "Creativity of words",
  //     "Meaning of the piece performed",
  //     "Literature delivery",
  //   ],
  //   regbtn: "https://forms.gle/AcWaauT6dsBgxT5S7",
  //   add_info: [
  //     "Participants can submit their Poetry/Shayari offline or online.",
  //   ],
  // },
  {
    //battle of bands
    overview:
      "Bands compete to impress with their musical synergy and stage showmanship.",
    eligibility: "Groups of up to 8 musicians from any college or university. ",
    rules: [
      "Originality:",
      "A certain percentage of the music performed if original material rather than covers will be much appreciated. This encourages creativity and supports original artists.",
      "Registration : ",
      "Bands usually need to register for the competition within a specified timeframe. This may involve submitting other materials for consideration.",
      "General Rules :",
      "Each band is allotted a 12 time to perform, including setup and takedown. This helps to ensure that the competition progresses smoothly and that all participating bands have an equal opportunity to showcase their talents.",
      "No backing tracks: all music must be played live. ",
      "Offensive language in lyrics is strictly prohibited. ",
    ],
    entry_fee: [" ₹1500 per team."],
    prize_money: ["₹8000 for the winning band and a certificate of excellence"],
    judging_criteria: [
      "Musicality",
      "Stage Presence",
      "Audience Engagement",
      "Originality",
      "Overall Performance.",
    ],
    add_info: [
      "Drums will be provided at the venue and all other instruments should be arranged by the band themselves. (You may bring your drums as well, at your own risk, but please inform the coordinators beforehand about this.)",
    ],
    regbtn: "https://forms.gle/Vw9A88R4DbvSR2s36",
  },
  {
    //doodle sketching
    overview:
      "An event for those who communicate through strokes of a brush or pencil, expressing their artistic visions",
    eligibility: "Solo participants.",
    rules: [
      "Maximum duration for creating the artwork is 120 minutes.",
      "Participants must bring their own art supplies. Canvas shall be provided by the University.",
      "Artwork must be original and created on-site.",
      "The artwork will become the property of the University.",
    ],
    entry_fee: ["₹200 per participant"],
    prize_money: ["Attracting Gift hampers and Certificates of excellence."],
    judging_criteria: [
      "Originality and creativity",
      "Technical skill and execution",
      "Adherence to the theme",
      "Overall impact",
    ],
    add_info: [
      "Theme: The theme of the competition has an “Open Theme”. The participants are open to express their creativity in any artwork.",
      "Artwork Requirements :",
      "The artwork must be original and created by the participant.",
      "The artwork must be two-dimensional (e.g.,painting,drawing,printmaking)",
    ],
    regbtn: "https://forms.gle/Z1EpGbg7X4SNnsEX8",
  },
  {
    //style symphony
    overview:
      " A glamorous event where pairs exhibit fashion and confidence on the runway.The Fashion Show will be held on the main stage of the college fest.Participants will walk the ramp one by one, showcasing their attire.A panel of judges will be present to evaluate the participants and select the winners.Prizes will be awarded to the top participants.Teams will be judged on costumes, theme, walking stance and attitude.",
    eligibility: "Teams of two",
    rules: [
      "Participants must be dressed in preferably theme of Sangeetam.",
      "Participants must walk the ramp with confidence and poise.",
      "Participants must not use any props or accessories that are not part of their theme attire.",
      "Participants must not engage in any behavior that is deemed disrespectful or offensive.",
    ],
    entry_fee: ["₹800/pair"],
    prize_money: [
      "₹5000 for the pair that showcases the best walk, attire, and stage presence",
    ],
    judging_criteria: [
      "Overall appearance",
      "Creativity and originality",
      "Confidence and poise ",
      "Adherence to the theme of Sangeetam",
    ],
    add_info: ["Theme: Bollywood"],
    regbtn: "https://forms.gle/PF5iwd1gEAJuTpFe6",
  },
  {
    //canvas painting competition
    overview:
      "An event for those who communicate through strokes of a brush or pencil, expressing their artistic visions.",
    eligibility: " Solo participants.",
    rules: [
      "Maximum duration for creating the artwork is 120 minutes.",
      "Participants must bring their own art supplies.",
      "Canvas shall be provided by the University.",
      "Artwork must be original and created on-site.",
      "The Artwork will become the property of the University. ",
    ],
    entry_fee: ["₹200 per participant"],
    prize_money: ["Attractive gift hampers and a certificates of excellence."],
    judging_criteria: [
      "Originality and creativity",
      "Technical skill and execution",
      "Adherence to the theme",
      "Overall impact",
    ],
    add_info: [
      "Theme: This competition has an open theme. The participants free to express their creativity and paint the canvas bright.",
      "Artwork Requirements:",
      "The artwork must be original and created by the participant.",
      "The artwork must be two-dimensional (e.g., painting, drawing, printmaking).",
    ],
    regbtn: "https://forms.gle/zuxyWVWGHRzRsyER6",
  },
  {
    //snapshot showdown
    overview:
      "A contest for photographers to capture moments that reflect the theme provided.",
    eligibility:
      "Solo Participant. Photographs must be in high resolution. Participant must use their own camera. Photographs must adhere to the theme provided in advance. Manipulation of photos is limited to basic adjustments, no digital art.",
    rules: [
      "Participants must submit original photographs that have not been submitted to any other competitions.",
      "Each participant can submit a maximum of three photographs.",
      "The photographs must not contain any offensive or controversial content.",
      " Submit your best photograph by 10th February 2024, 10:00 AM afterwards no entry will be considered. Include your Name, Course, Name of the Institution/College, and Contact information in the e-mail.",
      "Judgement will be done by the expert judges.",
      "The photographs must be in JPEG, PNG format.",
      "Winner will be appreciated with exciting winning prize.",
    ],
    entry_fee: ["₹250 per participant"],
    prize_money: ["Attractive gift hampers and certificates of excellence."],
    judging_criteria: [
      "Composition",
      "Originality",
      "Relevance to the theme",
      "Technical quality.",
    ],
    add_info: [
      "Theme:  Unnat Aur Viksit Bharat: Capturing Progress, Celebrating Prosperity",
      "Sub Themes:",
      "Harmonizing Cultures and Amplifying Talents",
      "Empowering Nation through education",
      "Urban Development",
      "Rural Prosperity",
      "Education Initiatives",
      "Cultural Diversity",
    ],
    regbtn: "https://forms.gle/Aw9tcpwgHzzvVX9M8",
  },
  {
    //feat of fury (solo/duet)
    overview:
      "Get ready to witness an explosion of creativity, self-expression, and breathtaking choreography in 'feet of fury' This dance competition is a celebration of the boundless spirit of dance, inviting solo and duet performers to showcase their unique styles, tell stories through movement, and leave the audience mesmerized by the power of rhythm and motion.",
    eligibility: "Participants can participate individually or in duets. ",
    rules: [
      "All participants must agree to abide by the rules of the competition.",
      "The decision of the judges final and binding. ",
      "The organizers reserve the right to modify the rules or cancel the competition at any time without prior notice.",
    ],
    entry_fee: [
      "Rs 400 for both Solo and duet.",
      "Registration can be done online or at the registration desk on the day of the competition (to be Decided for desk registration). ",
    ],
    prize_money: ["Rs.2000, attractive gifts, and certificates of excellence"],
    judging_criteria: [
      "Originality",
      "Technique",
      "synchronization (for duet)",
      "Overall performance. ",
    ],
    add_info: [
      "Competition format:",
      "Solo performances have a maximum duration of 5 minutes",
      "Duets have also the same time limit.",
      "Offensive language in music is strictly prohibited.",
    ],
    regbtn: "https://forms.gle/UU7PzUWiMN479rWG6",
  },
  {
    //comic carouse
    overview:
      "Comedians take the stage to deliver laughs, with routines that highlight their wit and humor. ",
    eligibility: "Solo stand-up comedians.",
    rules: [
      "	Maintain the importance of clean and non-offensive content. ",
      "Content that may be considered discriminatory, disrespectful, abusing or inappropriate for a diverse audience is strictly Prohibit.",
      "	Each performance is limited to 4 minutes for performance.",
      "Content must be original and devoid of offensive language. ",
      "Respect for all audience members and public figures is required.",
      "Any offensive content will lead to instant disqualification.",
    ],

    entry_fee: ["₹200 per participant."],
    prize_money: ["Attracting gift hampers and Certificats of Excellence."],
    judging_criteria: [
      "Humor",
      "	Originality",
      "Delivery",
      "Ability to engage the audience.",
    ],
    regbtn: "https://forms.gle/KxRKSkdxBJmaZSQW7",
  },
  {
    // shayarana shaam
    overview:
      "Indulge in the beauty of language, rhythm, and emotion as we invite you to Shayarana shaam a captivating evening dedicated to the art of poetry and Shayari. This event celebrates the power of words to express, heal, and inspire, bringing together poets, wordsmiths, and appreciators of the written and spoken word.",
    eligibility: "Open to all.",
    rules: [
      "Poetry/Shayari must be original and in Hindi, English, Hinglish, or Urdu.",
      "Poetry/Shayari must be minimum of 6 lines.",
      "Poetry/Shayari must be submitted in a typed format.",
      "All submissions must be made by the due date.",
      "Late submissions will not be accepted.",
      "The decision of the judges will be final.",
      "Organizers/ Judges reserve the right to change any of the rules at any time",
    ],
    add_info: [
      "Participants are encouraged to use musical terms and concepts in their Shayari.",
      "Participants can submit their Poetry/Shayari offline or online.",
      "Participants must be available to perform their Poetry/Shayari on stage at the designated time.",
    ],
    entry_fee: ["₹200"],
    prize_money: ["Attractive Gift Hamper with novels and certificates"],
    judging_criteria: [
      "Creativity of words",
      "Meaning of the piece performed",
      "Literature delivery",
    ],
    regbtn: "https://forms.gle/D6Hr2tZijyCfULs6A",
  },
  {
    //treasure hunt
    overview:
      "An adventurous and exciting game that tests problem-solving and teamwork, the Treasure Hunt leads teams on a quest to find hidden treasures around the campus.",
    eligibility: "Open to all",
    rules: ["To be told on the spot"],
    entry_fee: ["if there will be told on the spot only"],
    prize_money: ["Not announced yet"],
    judging_criteria: ["Not announced yet"],
    regbtn: "https://forms.gle/59tAoTiL4V2fDMiq6",
  },
  {
    // beat boxing
    overview:
      "Contestants display their beat boxing prowess, using vocal percussion to create beats and rhythms.",
    eligibility: "Open to all.",
    rules: [
      "The minimum performance duration is 1 minute.",
      "No offensive language or sounds; maintain a positive atmosphere.",
      "Participants may use microphones provided but no other electronic devices.",
    ],

    entry_fee: [" ₹200 for each participant. "],
    prize_money: ["Attractive gift hampers, certificates and more."],
    judging_criteria: ["musicality", "Originality", " stage presence."],
    regbtn: "https://forms.gle/ye3mikAsM7CRfDxZ6",
  },
  {
    // freestyle dance (group)
    overview:
      "A showcase for dancers to express themselves freely, blending various dance styles. ",
    eligibility: [
      "	Open to all.",
      "	Participants can participate in group of minimum 3 or maximum 12 members.",
    ],
    rules: [
      "All participants must agree to abide by the rules of the competition.",
      "	The decision of the judges final and binding.",
      "The organizers reserve the right to modify the rules the competition at any time without prior notice.",
    ],
    entry_fee: [
      " Rs 1000 for group.",
      "Registration can be done online or at the registration desk on the day of the competition (To be Decided for desk registration).",
    ],
    prize_money: [" Rs.5100 and a certificate of excellence."],
    judging_criteria: [
      " Originality",
      "technique",
      "synchronization(for group)",
      "and overall performance. ",
    ],
    add_info: [
      "	Group performances have a maximum duration of 8 minutes limit.  ",
      "Offensive language in music is strictly prohibited.",
    ],
    regbtn: "https://forms.gle/AtSbbsLbVS62RTWx9",
  },
  {
    // freestyle dance (solo)
    overview:
      "A showcase for dancers to express themselves freely, blending various dance styles. ",
    eligibility: ["Open to all participants participate individually."],
    rules: [
      "All participants must agree to abide by the rules of the competition. ",
      "The decision of the judges final and binding.",
      "The organizers reserve the right to modify the rules or cancel the competition at any time. ",
      "without prior notice.",
    ],

    entry_fee: [
      "Rs 400 for both Solo",
      "Registration can be done online or at the registration desk on the day of the competition (to be Decided for desk registration). ",
    ],
    prize_money: [
      "Rs.2000",
      "Attractive gifts",
      "Certificates of excellence.  ",
    ],
    judging_criteria: ["	Originality", "Technique", "Overall performance. "],
    add_info: [
      "Solo performances have a maximum duration of 5 minutes",
      "	Offensive language in music is strictly prohibited. ",
    ],
    regbtn: "https://forms.gle/FycarAcFhfpFcxVL9",
  },
  {
    //Law Game
    overview:
      "Welcome to 'Let's Law It' an innovative gaming competition that brings together legal minds, strategic thinkers, and enthusiasts for an exciting intersection of law and gaming. This event challenges participants to navigate a virtual legal world, solving complex cases, making ethical decisions, and showcasing their legal acumen in a dynamic and engaging format.",
    eligibility:
      "Any Student pursuing Integrated five years or three-year LL.B. programme.Team participation is mandatory. ",
    rules: [
      "Each team shall compose of three participants.",
      "Mandatory participation in all three activities for each team is required.",
      "No books, statue, electronic gadget or judgement can be referred for giving answers in quiz or picture depiction.",
      "A maximum of 30 seconds shall be given for answering quiz and picture depiction.",
      "A minimum of 3 minutes shall be allocated for declamation.",
      "Only legal questions and topics will be part of activity.",
      "Famous legal personalities will be part of picture depiction.",
      "Formal black coat with tie is a mandatory pre-requisite for each team.",
      "A minimum of 20 minutes shall be given to each team before declamation for preparation of topic to speak in the competition.",
      "Only one speaker from each team shall speak during declamation competition. ",
    ],
    entry_fee: [
      "Fees for Registration is Rs. 600 per team for participation in all three activities.",
      "Registration can be done both in online and offline mode.",
    ],
    prize_money: [
      " ₹4000/- for each winning team and a certificate of excellence.",
    ],
    judging_criteria: [
      "Knowledge",
      "Confidence",
      "Clarity of Concept",
      "Presentability",
      "Adherence to the legal topic",
      "Creativity",
      "Teamwork",
    ],
    add_info: ["Venue:", "Moot Court Hall, SLCS Building, SIET, Meerut"],
    regbtn: "https://forms.gle/FcvAjHcYG4tkBQyU7",
  },
  {
    // rap battle
    overview:
      " A dynamic competition where individuals showcase their rap skills and lyrical creativity.",
    eligibility: "  Open to solo rappers from any college or university",
    rules: [
      " The competition will be in two rounds:",
      "In the first-round judges will select only top three participants",
      "Second round will be the final round",
      "Performances must not exceed 4 minutes.",
      "Lyrics must be original and free of any offensive language.",
      "Instrumental tracks are allowed but must be submitted in advance for approval.",
    ],
    entry_fee: ["₹200 per participants."],

    prize_money: ["Attractive Gift hampers."],
    judging_criteria: [
      "Lyrics originality, creativity, flow and wordplay.",
      "Delivery: stage presence, confidence, energy and vocal ability.",
      "Over all performances: over all impact, engagement of the audience.",
    ],
    regbtn: "https://forms.gle/dJcZTgQGM5cnd5bJ8",
  },
  {
    //face painting(canvas of colours)
    overview:
      " A display of artistic talent on a live canvas, participants bring designs to life on the face. ",
    eligibility: ["Solo participants. "],
    rules: [
      "	Maximum duration for painting is 90 minutes. ",
      "	Participants must bring their own non-toxic, skin-friendly paints. ",
      "Participants must come along a partner to be their model.",
      "No model will be provided by the organizing team.",
      "Designs must be appropriate and should not reach below the neckline.",
    ],
    entry_fee: ["₹200  "],
    prize_money: [
      "Most creative and skillful face painting will be awarded with an Artistic Gift hamper along with certificate. ",
    ],
    judging_criteria: ["Artistry, originality, and execution."],
    regbtn: "https://forms.gle/mtEzLMuPUvJyEbHYA",
  },
  {
    //nukkad natak
    overview:
      "A powerful medium for storytelling, the Nukkad-Natak event is a platform for groups to perform plays in public spaces, addressing social issues.",
    eligibility: [
      "The competition is open to all.",
      "Each team must consist of a minimum of 8 and a maximum of 15 members.",
    ],
    rules: [
      "The duration of each Nukkad-Natak should be minimum of 8 minutes, do not exceed more than 15 minutes.",
      "The use of vulgarity, obscenity, or any material that may hurt the sentiments of any individual or group is strictly prohibited.",
      "The Nukkad-Natak should be original and should not be a copy of any existing work.",
      "The use of props and costumes is allowed, but they should be minimal and easy to carry.",
    ],
    entry_fee: ["Rs. 1000/-"],
    judging_criteria: [
      "	Content and relevance to the theme.",
      "Creativity and originality.",
      "	Script portrayal.",
      "Acting performance.",
      "Stage presence and communication.",
      "Teamwork.",
      "Expression of thought and impact on public.",
    ],
    prize_money: [
      "he prize for the winning team will be Rs. 5000 and a certificates of excellence.",
    ],
    add_info: [
      " Abusive language will lead to disqualification.",
      "The use of any sound system or amplification is not allowed.",
      "The decision of the judges will be final and binding on all participants.",
    ],
    regbtn: "https://forms.gle/11U9q91TsZHa2gcf8",
  },
  {
    //mimicry competition
    overview:
      "A test of imitation skills where solo performers mimic famous personalities or voices.",
    eligibility: " Solo performers.",
    rules: [
      "Acts must not exceed 4 minutes.",
      "	Performances must not include offensive language or gestures.",
      "	Participants should ensure that the content is in good taste and not derogatory.",
    ],
    entry_fee: ["₹200"],
    prize_money: [
      " Exciting Hampers for the performance that best combines accuracy and entertainment and a certificate of excellence.",
    ],
    judging_criteria: [
      "Similarity to the subject, creativity, humor, and audience reaction.",
    ],
    regbtn: "https://forms.gle/51V3hQnLwiRdUG8P6",
  },
  {
    // Qawwali

    overview:
      " Each team will be given 6-8 minutes to perform a qawwali piece.",
    eligibility: " •	Group of up to 5 -8participants.",

    rules: [
      "All the participants must be present at the registration desk at least 15 minutes before the start of the event.",
      "	Use of any vulgar, obscene, a disrespectful language will lead to disqualification. ",
      "The decision of the judges will be final and binding.",
      "Each participating group must bring their own instruments.",
      "	Participating group must be in traditional attire. ",
    ],
    judging_criteria: [
      "(Might be subject to change)",
      "Musicality ",
      "Cohesion",
      "Authenticity",
      "Audience engagement",
      "Vocal quality and harmony",
      "Rythm and tempo.",
      "Presentation and stage presence.",
      ,
    ],
    entry_fee: ["Rs. 800 per team."],
    prize_money: [
      "Rs.3000 for the group the best captures the essence of qawwali and a certificate of excellence.",
    ],
    add_info: [
      "Each team will be given minimum of 4 and maximum 10 minutes to perform a qawwali piece.",
    ],
    regbtn: "https://forms.gle/7LKKKut6fknaC7mY6",
  },
  {
    // rhythm rebellion(beat boxing)
    overview:
      "The Business Case Study competition is a test of analytical and strategic thinking, challenges teams to analyze real-world business scenarios and, propose and presents solutions.",
    eligibility: "Teams of up to 4 individuals.",
    rules: [
      "Details and guidelines for the case study will be provided on the day of the competition.",
      "Teams must prepare and present their analysis and recommendations within a specified time frame of 3 hours.",
    ],

    entry_fee: ["₹600 for each team."],
    prize_money: [
      " ₹5000 for the team with the best analysis and solution presentation",
      "Certificate of excellence.",
    ],
    judging_criteria: [
      "Analytical depth",
      "Feasibility of recommendations",
      "presentation skills",
      "Q&A performance.",
    ],
    add_info: ["For furthermore details please contact the coordinators."],
    regbtn: "https://forms.gle/MseBLcXkMDirPqUB9",
  },
  {
    // movie making
    overview:
      " A chance for budding filmmakers to tell a story through their lens, the Movie Making competition seeks to discover new perspectives and narratives. ",
    eligibility: "Groups of up to 4 individuals.",
    rules: [
      "Films must be completed within a 5-8 minutes window.",
      "	Content must be appropriate avoiding themes that could offend regional or other sentiments.",
      "	Any language (Hindi, English or any regional language) allowed for dialogue and subtitles. ",
      "Provide guidelines for subtitles if the film is in a language other than the event's primary language. ",
      "	Ensure films are submitted in high-quality resolution.",
      "Genre of movie can be drama, comedy, documentary, animation, etc.",
    ],

    entry_fee: ["₹500 per team."],
    judging_criteria: [
      "Storytelling",
      "Cinematography",
      "Editing ",
      "Originality ",
      "Topic relevance",
    ],
    prize_money: ["Attractive Gift hampers"],
    add_info: [
      "Submission Requirements:",
      "Deadline for submission is 11:00 AM on 10th Feb. 2024",
      "Send your entries at mail id of sangeetam:- sangeetam@shobhituniversity.ac.in",
      "Originality: Emphasize the importance of original content and discourage plagiarism. Outline consequences for using copyrighted material without permission.",
    ],
    regbtn: "https://forms.gle/MwN5k6rEWg4yEWcc8",
  },
  {
    //t-shirt designing
    overview:
      "A platform for creative expression through fashion, this contest invites participants to design a T-shirt that makes a statement. ",
    eligibility: "Teams of 1 or 2 individuals. ",
    rules: [
      "Designing must be completed within 1 hour.",
      "The language for any text on the T-shirt can be Hindi, English, or any regional language.",
      "Designs must be original and respectful, without any potential to offend.",
      "Computer systems will be provided by the university to every participant, they may use their own system with coordinators approval.",
      "All the designs generated will be the intellectual property of the university.",
    ],
    entry_fee: ["₹500"],
    judging_criteria: [
      "Creativity, Message Clarity, Aesthetic Appeal, and Originality.",
    ],
    prize_money: [
      "Exciting Hampers for the team with the most creative, impactful T-shirt design, and certificates of excellence.",
    ],
    add_info: [
      "Theme: Education Empowers, Harmonizing Cultures & Amplifying Talents, and if not open theme.",
    ],
    regbtn: "https://forms.gle/envCDp9BJ3PLki9d7",
  },
  {
    // psychological game
    overview:
      "A mock crime scene investigation to explore the complexity of psychology behind criminal Minds which is taken from the branch of criminal psychology",
    eligibility: "Open to all",
    rules: [
      "All participants must agree to abide by the rules of the competition.",
      "The decision of the judges is final & binding.",
      "The Organizers reserve the right to modify the rules or cancel the competition at any time without any prior notice.",
    ],
    entry_fee: ["₹400 per team."],
    prize_money: ["₹2000 for winning team."],
    judging_criteria: [
      "The team that solves the maximum cases will be considered along with their teamwork",
      "Problem-solving skills within given time.",
    ],
    regbtn: "https://forms.gle/NjF3y5UFTXPqTHBx5",
  },
  // biological activity
  {
    overview:
      " The interactive scientific educational games like Mega Quiz, scientific treasure hunt, scientific showdown gallary of poster and model exhibition focused on basic biological topics, challenging participants' scientific knowledge and problem-solving abilities and having little fun.",
    eligibility:
      "Open to all ,Participants can Participate Individually or in Team.,Max. Number of Participants per team 4.",
    rules: [
      "All participants must agree to abide by the rules of the competition.",
      "The decision of the judges is final & binding.",
      "The Organizers reserve the right to modify the rules or cancel the competition at any time without any prior notice.",
    ],
    entry_fee: ["₹200 per participant"],
    prize_money: ["Attractive Hamper and Certificate for all"],
    judging_criteria: [
      "Overall Presentation",
      "Problem Solving Skill",
      "Critical Thinking",
    ],
    add_info: [
      "Competition Format :",
      "✔Mega Quiz:",
      "Quiz will be in two rounds",
      "Round 1:",
      "Will be held online at same time on Kahoot app/website.",
      "Short listed teams will be goes to round 2.",
      "Round 2:",
      "Rapid fire round:- It will be held offline on projector (image will be shown and teams will have to answer 1st. The team having highest point will be declared as winner.",
      "✔Scientific Treasure Hunt :",
      "Clues will be given based on the science and technology (10+2 level) for finding the treasure.",
      "The team which will find the treasure at earliest will be declared as winner.",

      "✔Poster Presentation :",
      "Participant have two options either make digital poster or get printed Poster (size : 4*4 feet).",
      "5 minutes to each participants is given to Present the Poster.",
      "Presentation should be offline.",
      "Best poster will be declared as winner.",

      "✔Model Exhibition :",
      "Participants have to bring the working/Non-working model.",
      "5 minutes presentation time for model.",
      "Best model will be declared as winner.",
    ],
    regbtn: "https://forms.gle/bMq9ByRw3ButRtax8",
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
  judging_criteria,
  add_info = null
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
  div2.innerHTML = `<div class="flex flex-col items-start justify-center overflow-y-auto text-xs md:text-base"><p class="mx-1 my-1 text-justify basis-full"><strong>Overview</strong>: <span class="text-gray-300">${overview}</span></p><p class="mx-1 my-1 text-justify basis-full"><strong>Eligibility</strong>: <span class="text-gray-300">${eligibility}</span></p><p class="mx-1 my-1 text-justify"><strong>Rules</strong>: <ul class="list-disc">${rules
    .map((i) => {
      return `<li class="text-gray-300 ms-4">${i}</li>`;
    })
    .join(
      ""
    )}</ul></p><p class="mx-1 my-1 text-justify"><strong>Entry Fees</strong>: <ul class="list-disc">${entry_fee
    .map((i) => {
      return `<li class="text-gray-300 ms-4">${i}</li>`;
    })
    .join(
      ""
    )}</ul></p><p class="mx-1 my-1 text-justify"><strong>Prize Money</strong>: <ul class="list-disc">${prize_money
    .map((i) => {
      return `<li class="text-gray-300 ms-4">${i}</li>`;
    })
    .join(
      ""
    )}</ul></p><p class="mx-1 my-1 text-justify"<strong>Judging Criteria</strong>:  <ul class="list-disc">${judging_criteria
    .map((i) => {
      return `<li class="text-gray-300 ms-4">${i}</li>`;
    })
    .join(
      ""
    )}</ul></p><p class="mx-1 my-1 text-justify"<strong>Additional Information</strong>: ${
    add_info
      ? ` <ul class="list-disc">${add_info
          .map((i) => {
            return `<li class="text-gray-300 ms-4">${i}</li>`;
          })
          .join("")}</ul>`
      : "<span class='text-gray-300'>None</span>"
  }</p> `;
  div2.setAttribute(
    "class",
    "max-h-80 w-72 md:w-full m-2 px-3 overflow-x-hidden overflow-y-auto border border-gray-200 rounded bg-[#0d0745]"
  );

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
        judging_criteria,
        add_info,
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
        judging_criteria,
        add_info
      );
      // console.log(e.)
    },
    false
  );
});
