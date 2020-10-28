const FONTS = [{
    href: 'https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap',
    family: "'Luckiest Guy', cursive"
  },
  {
    href: 'https://fonts.googleapis.com/css2?family=Monoton&display=swap',
    family: "'Monoton', cursive"
  },
  {
    href: 'https://fonts.googleapis.com/css2?family=Shrikhand&display=swap',
    family: "'Shrikhand', cursive"
  }
]

const generateRandomNum = () => {
  return Math.floor((Math.random() * 3))
}

const randomNum = generateRandomNum()

const documentHead = document.getElementsByTagName('head')[0]

const linkElement = document.createElement('link')
linkElement.rel = 'stylesheet'
linkElement.href = FONTS[randomNum].href

document.body.style.fontFamily = FONTS[randomNum].family

documentHead.appendChild(linkElement)
