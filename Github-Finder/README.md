# github-find
### here is github finder search engine using html css js
## Step 1 Creating html file in vs code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Github Finder 🔍 </title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
</head>
<body>
    <div class="container">
        <h1>Github finder </h1>
        <form action="">

            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="search " id="bar">
            <button id="Btn">Search</button>
        </form>

        <div id="cardBox">

        </div>
    </div>
    <!-- <script src="script.js"></script> -->
    <script src="./script1.js"></script>
</body>
</html>

## Step 2 Creating js file inside fetching some apis using fetch function 
const searchbar = document.getElementById('bar');
// console.log(searchbar);\
const cardbox = document.getElementById('cardBox')
const btn = document.getElementById('Btn')
const bar = document.getElementById('bar')

 btn.addEventListener('click', (e)=>{
  e.preventDefault();
  const svalue = bar.value
  getuser(svalue);
 })



function getuser(svalue) {
  let api;

  if(svalue === undefined){
    api = fetch("https://api.github.com/users")
  }else{
    api = fetch(`https://api.github.com/users/${svalue}`)
  }
  api.then((response)=>{
    return response.json();
  }).then((data)=>{
    
    let result = data;
      if(svalue === undefined){
        result.map((ele)=>{
          cardbox.innerHTML=""
          const card = document.createElement('div')
          const heading = document.createElement('h2')
          const link = document.createElement('a')
          const img = document.createElement('img')
          heading.innerText = ele.login
          img.src = ele.avatar_url
          link.href = ele.html_url
          link.innerHTML="Github Link"
          card.appendChild(heading)
          card.appendChild(link)
          card.appendChild(img)
          cardbox.appendChild(card)
        })
      }else{
        cardbox.innerHTML = "";
      
        const card = document.createElement('div')
        console.log(result);
        if(result.message === "Not Found"){
           const hs = document.createElement('h2');
           hs.innerText="Result not found"
           cardbox.appendChild(hs);
        }else{
          const heading = document.createElement('h2')
          // const para = document.createElement('p')
          const link = document.createElement('a')
          const img = document.createElement('img')
          heading.innerText = result.login
          img.src = result.avatar_url
          link.href = result.html_url
          link.innerHTML="Github Link"
          card.appendChild(heading)
          card.appendChild(link)
          card.appendChild(img)
          cardbox.appendChild(card)
        }
         
      }
  })

}

// getuser()


## Step 3 Similarly creating Css file and deploy the html file on browser






