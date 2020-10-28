// 1. Grab the head of the page
const documentHead = document.getElementsByTagName('head')[0]

// 2. create link element
const linkElement = document.createElement('link')
linkElement.rel = 'stylesheet'
linkElement.href = 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;900&display=swap'

// 3. add link
documentHead.appendChild(linkElement)

// Luckiest Guy
// https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap"
// font-family: 'Luckiest Guy', cursive;
//
// Monoton
// https://fonts.googleapis.com/css2?family=Monoton&display=swap"
// font-family: 'Monoton', cursive;
//
// Shrikhand
// https://fonts.googleapis.com/css2?family=Shrikhand&display=swap"
// font-family: 'Shrikhand', cursive;
