document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".main-form");
    const errorPrompter = document.querySelector(".main-error-prompt");
    const scoreboardContainer = document.querySelector(".main-scoreboard-wrapper");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const firstName = form.querySelector('input:nth-child(1)').value;
      const lastName = form.querySelector('input:nth-child(2)').value;
      const country = form.querySelector('input:nth-child(3)').value;
      const score = form.querySelector('input:nth-child(4)').value;
  
      errorPrompter.style.display = "none";
  
      if (firstName === "" || lastName === "" || country === "" || score === "") {
        errorPrompter.style.display = "block";
        return;
      }
  
      const scoreboardElement = document.createElement("div");
      scoreboardElement.classList.add("main-scoreboard");
  
      scoreboardElement.innerHTML = `
       <div>
          <p class="main-player-name">${firstName} ${lastName}</p>
          <p class="main-time-stamp">${generateDateAndTime()}</p>
      </div>
      <p class="main-player-country">${country}</p>
          <p class="main-player-score">${score}</p>
          <div class="main-scoreboard-btn-container">
              <button>&#x1f5d1;</button>
              <button>+5</button>
              <button>-5</button>
          </div>
      `;
  
      scoreboardContainer.appendChild(scoreboardElement);
      sortScoreBoard();
      activateBtnEventListener();
      form.reset();
    });
  
    function activateBtnEventListener() {
      document.querySelectorAll(".main-scoreboard-btn-container button").forEach((el) => {
        el.addEventListener("click", (e) => {
          let textContent = e.target.textContent;
          let scorePlayer = e.target.closest(".main-scoreboard").querySelector(".main-player-score");
  
          if (textContent.length > 2) return;
  
          if (textContent === "🗑") {
            e.target.closest(".main-scoreboard").remove();
          } else {
            scorePlayer.textContent = parseInt(scorePlayer.textContent) + parseInt(textContent);
            sortScoreBoard();
          }
        });
      });
    }
  
    activateBtnEventListener();
  
    function sortScoreBoard() {
      let scoreBoards = document.querySelectorAll(".main-scoreboard");
      let sortedElements = Array.from(scoreBoards).sort((a, b) => {
        let numA = parseInt(a.querySelector(".main-player-score").textContent);
        let numB = parseInt(b.querySelector(".main-player-score").textContent);
  
        return numB - numA;
      });
  
      scoreboardContainer.innerHTML = "";
      sortedElements.forEach((el) => {
        scoreboardContainer.appendChild(el);
      });
    }
  
    function generateDateAndTime() {
      let dateObject = new Date();
      let month = dateObject.toLocaleString("default", { month: "long" });
      let day = dateObject.getDate();
      let year = dateObject.getFullYear();
      let time = dateObject.toLocaleTimeString().slice(0, 8);
  
      let generateResult = `${month} ${day}, ${year} ${time}`;
  
      return generateResult;
    }
  });
  