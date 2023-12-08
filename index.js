const usersActivity = [
  {userPosition: 1, userAvatar:"./assets/images/avatar-mark-webber.webp", userName: "Mark Webber", userInteraction: "reacted to your recent post", userInteracted: "My first tournament today!", activityState:"new", interactionDate:"1m ago", commentedPicture:"none", userMsg: "none", interactionType:"post-reaction"},
  {userPosition: 2, userAvatar:"./assets/images/avatar-angela-gray.webp", userName: "Angela Gray", userInteraction: "followed you", userInteracted: "", activityState:"new", interactionDate:"5m ago", commentedPicture:"none", userMsg: "none", interactionType:"follow"},
  {userPosition: 3, userAvatar:"./assets/images/avatar-jacob-thompson.webp", userName: "Jacob Thompson", userInteraction: "has joined your group", userInteracted: "Chess Club", activityState:"new", interactionDate:"1day ago", commentedPicture:"none", userMsg: "none", interactionType:"group"},
  {userPosition: 4, userAvatar:"./assets/images/avatar-rizky-hasanuddin.webp", userName: "Rizky Hasanuddin", userInteraction: "sent you a private message", userInteracted: "", activityState:"old", interactionDate:"5days ago", commentedPicture:"none", userMsg: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having a lots of fun and improving my game.", interactionType:"message"},
  {userPosition: 5, userAvatar:"./assets/images/avatar-kimberly-smith.webp", userName: "Kimberly Smith", userInteraction: "commented on your picture", userInteracted: "", activityState:"old", interactionDate:"1week ago", commentedPicture:"./assets/images/image-chess.webp", userMsg: "none", interactionType:"picture-comment"},
  {userPosition: 6, userAvatar:"./assets/images/avatar-nathan-peterson.webp", userName: "Nathan Peterson", userInteraction: "reacted to your recent post", userInteracted: "5 end-game strategies to increase your win rate", activityState:"old", interactionDate:"2weeks ago", commentedPicture:"none", userMsg: "none", interactionType:"post-reaction"},
  {userPosition: 7, userAvatar:"./assets/images/avatar-anna-kim.webp", userName: "Anna Kim", userInteraction: "left the group", userInteracted: "Chess Club", activityState:"old", interactionDate:"2weeks ago", commentedPicture:"none", userMsg: "none", interactionType:"group"}
]

const activityContainer = usersActivity
  .map(
    (elem) =>
      `
      <div id = ${elem.userPosition} class = "notification-box ${elem.interactionType}">
          <img class = "userAvatar" src = ${elem.userAvatar} alt="">
          <div class = "notification-text">
            <div class = "notification-text-up">
              <span class = "username">${elem.userName}</span>
              <span class = "interaction">&nbsp;${elem.userInteraction}&nbsp;</span>
              <span class = "interacted">${elem.userInteracted}</span>
              <span id = "${elem.userPosition}-dot" class = "notification-dot ${elem.activityState}"></span>
            </div>
            <div class = "notification-date">${elem.interactionDate}</div>
            <div class = "notification-msg">${elem.userMsg}</div>
          </div>
          <img class = "commentedPicture" src = ${elem.commentedPicture} alt="">
      </div>
      `
  )
  .join("");

document.querySelector("#notification-list").innerHTML = activityContainer
const notificationBox = document.querySelectorAll('.notification-box')

stateCount()
changeState()
interactionTypeFunction()



notificationBox.forEach(function(x){
  x.addEventListener('click', function(){
     const dotId = (x.id+'-dot')
     const element = document.getElementById(dotId)
     element.classList.toggle('new')
     element.classList.toggle('old')
     stateCount()
     changeState()
  })
})

document.querySelector("#markAll").addEventListener("click", function(){
  markAllAsRead()
})

function changeState(){
  document.querySelectorAll('.new').forEach(function(i){
    const boxId = i.id.replace('-dot', '')
    i.style.visibility = 'visible'
    document.getElementById(boxId).style.backgroundColor = 'var(--very-light-grayish-blue)'
  })
  document.querySelectorAll('.old').forEach(function(i){
    const boxId = i.id.replace('-dot', '')
    i.style.visibility = 'hidden'
    document.getElementById(boxId).style.backgroundColor = 'var(--white)'
  })
}

function stateCount(){
  const activeStatusNumber = document.querySelectorAll('.new').length
  document.querySelector("#active-status-number span").textContent = activeStatusNumber
}

function interactionTypeFunction() {
  notificationBox.forEach(function(box){
    console.log(box)
    const boxClass = (box.classList.value)
    const whereInteraction = box.children[1].children[0].children[2]
    const whereMessage = box.children[1].children[2]
    const wherePicture = box.children[2]
    if(boxClass.includes('post-reaction')){
      //console.log(box)
    }
    if(boxClass.includes('follow')){
      //console.log(box)
    }
    if(boxClass.includes('group')){
      whereInteraction.style.color = "var(--blue)"
    }
    if(boxClass.includes('message')){
      whereMessage.style.display = "unset"
    } else {
      whereMessage.style.display = "none"
    }
    if(boxClass.includes('picture-comment')){
      wherePicture.style.display = "unset"
    } else {
      wherePicture.style.display = "none"
    }
  })
}

function markAllAsRead(){
  const dotBox = document.querySelectorAll(".notification-dot")
  dotBox.forEach(function(x){
      x.classList.remove('new')
      x.classList.add('old')
  })
  stateCount()
  changeState()
}
