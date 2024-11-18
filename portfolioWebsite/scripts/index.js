//This is script for the index.html page of the portfolio website. 

//Script for About me section skills, experience and education.
let tablinks = document.getElementsByClassName("tab-links"); 
let tabcontents = document.getElementsByClassName("tab-contents");  

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//Script for the voting system
let votes = JSON.parse(localStorage.getItem('votes')) || [0, 0, 0];

function vote(index) {
  votes[index]++;

  localStorage.setItem('votes', JSON.stringify(votes));

  updateVoteDisplay(index);
}

function updateVoteDisplay(index) {
  const voteCountElement = document.getElementById(`vote-count-${index}`);
  voteCountElement.innerText = `Votes: ${votes[index]}`;
}

function initializeVotes() {
  for (let i = 0; i < votes.length; i++) {
    updateVoteDisplay(i);
  }
}

initializeVotes();

//Script for the side menu for smaller screen size reformatting.
  let sidemenu = document.getElementById("sidemenu");

  function openmenu(){
    sidemenu.style.right = "0";
  }
  function closemenu(){
    sidemenu.style.right = "-200px";
  }

//Script for activating the form submission to google sheets
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxCa_YUIf_xJHpnZY2ge8SFkdjLtXwSLwPlWP6vLBN-Jn9feCh1fpinzYCN_Vgaeb9cGA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true; // Disable button
  msg.innerHTML = "Submitting...";
  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    });
    if (response.ok) {
      msg.innerHTML = "Message sent successfully";
      setTimeout(() => { msg.innerHTML = ""; }, 5000);
      form.reset();
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error!', error.message);
    msg.innerHTML = "Failed to send message. Try again!";
  } finally {
    submitButton.disabled = false; // Re-enable button
  }
});
