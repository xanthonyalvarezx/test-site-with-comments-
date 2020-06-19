//       - TO DO -
//fix the scroll functionality
//fix the title responsiveness
//add unicode magnifying glass to photos
//spell check all text



//--------------------------------------------//

const body = document.querySelector('body')
const main = document.querySelector('main')
//Header image and text
const header = document.createElement('div')
header.id = 'header'
const titleDiv = document.createElement('div')
titleDiv.id = 'titleDiv'
let titleName = document.createElement('h1')
titleName.id = 'title'
titleName.append('FancyCatUpcycling')
let hero = document.createElement('img')
hero.src = 'assets/images/fancy hero.jpg'
hero.id = 'hero'
body.append(header)
titleDiv.append(hero, titleName)
header.append(titleDiv)
// description div
const descript = document.createElement('div')
descript.id = 'description'
body.append(descript)
descript.append('FancyCatUpcycling is a small buisiness in Feasterville pennsylvania. We build and refurbish old or antique furniture. We also build creative, one of a kind peices out of parts and peices we find on our trasure hunts.')
// photos
const images = document.createElement('div')
images.id = 'images'
let image1 = document.createElement('img')
image1.src = 'assets/images/yolk.jpg'
image1.id = 'image1'
image1.className = 'image'



//
let image2 = document.createElement('img')
image2.src = 'assets/images/console.jpg'
image2.id = 'image2'
image2.className = 'image'
body
//
let image3 = document.createElement('img')
image3.src = 'assets/images/door.jpg'
image3.id = 'image3'
image3.className = 'image'

//
let image4 = document.createElement('img')
image4.src = 'assets/images/side tables.jpg'
image4.id = 'image4'
image4.className = 'image'

body.append(images)
images.append(image1, image2, image3, image4)
// iframe
const map = document.createElement('iframe')
map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24397.996608409696!2d-75.00614489234435!3d40.14786163140874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6ad681c50eda9%3A0xd9244bf7b0603f20!2sFeasterville-Trevose%2C%20PA%2019053!5e0!3m2!1sen!2sus!4v1592500916701!5m2!1sen!2sus" width="200" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"'
map.id = 'map'
body.append(map)
// comment buttons
const comment = document.createElement('div')
comment.id = 'commentDiv'
const submit = document.createElement('button')
submit.className = 'button'
submit.append('submit')
//comment input
const input = document.createElement('input')
input.type = 'text'
input.placeholder = 'comments or questions here...'
input.id = 'input1'
input.className = 'input'
body.append(comment)
//
const name = document.createElement('input')
name.id = 'nameInput'
name.className = 'input'
name.placeholder = 'Enter you name...'
comment.append(submit, input, name)
//
submit.addEventListener('click', function () {
    const textBox = document.createElement('div')
    let commentSpace = document.createElement('div')
    commentSpace.className = 'commentSpace'
    commentSpace.append( `${name.value}  ${': '}${' '}${input.value}`)
    textBox.className = 'textBox1'
    textBox.append(commentSpace)
    comment.append(textBox)
    let reply = document.createElement('button')
    reply.append('Reply')
    reply.className = 'rplybtn'
    let replyInput = document.createElement('input')
    let replyName = document.createElement('input')
    replyInput.type = 'text'
    replyName.type = 'text'
    replyInput.placeholder = 'reply ...'
    replyName.placeholder = 'Enter name ...'
    replyInput.className = 'replyInput'
    replyName.className = 'replyName'
    
    textBox.append(reply, replyInput, replyName)


    reply.addEventListener('click', function () {

        let replyDiv = document.createElement('div')
        replyDiv.className = 'replyDiv'
        replyDiv.append(`${replyName.value}${' '}${':'}${' '}${replyInput.value}`)
        textBox.append(replyDiv)
    })
})

// links
const linkDiv = document.createElement('div')
linkDiv.id = 'linkDiv'
let fb = document.createElement('a')
fb.href = 'https://www.facebook.com/FancyCatUpcycling'
fb.target = '_blank'
fb.append('Check us out on Facebook @ FancyCatUpcycling')

let insta = document.createElement('a')
insta.href = 'https://www.instagram.com/fancy_cat_upcycling/'
insta.target = '_blank'
insta.append('Check us out on Instagram @ FancyCatUpcycling')

linkDiv.append(fb, insta)
body.append(linkDiv)