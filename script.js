const alternatives = [
  {text:"", images:"images/cat-01.gif"},
  {text:"今次唔會再令你後悔ga la"/*I promise you it will be unforgettable*/, images:"images/cat-02.gif"},
  {text:"考慮多次la"/*think again*/, images:"images/cat-03.gif"},
  {text:"求下你la 冇咗你我真係唔得ga..."/*Come on, dare to say yes*/, images:"images/cat-04.gif"},
  {text:"唔好gum絕情la😭"/*Don't let fear stop you*/, images:"images/cat-05.gif"},
]
const ohyes = {text:"I love you ❤😘( •̀ ω •́ )✧ "/*I knew you would accept*/, images:"images/cat-yes.gif"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Yesss!"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'No.'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
            alert("咁好la😭")
            alert("love you")
            close()
          }
      }
  })
})
