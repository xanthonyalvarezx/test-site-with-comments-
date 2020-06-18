// hero image x
//photos
//links to external sites
//description 
// comment section

//--------------------------------------------//

const body = document.querySelector('body')
const main = document.querySelector('main')
//Header image and text
const header = document.createElement('div')
header.append('FancyCatUpcycling')
let hero = document.createElement('img')
hero.src = 'assets/images/fancy hero.jpg'
hero.id = 'hero'
body.append(header)
header.append(hero)
// description div
const descript = document.createElement('div')
body.append(descript)
descript.append('FancyCatUpcycling is a small buisiness in Feasterville pennsylvania. We build and refurbish old or antique furniture. We also build creative, one of a kind peices out of parts and peices we find on our trasure hunts.')
// photos
const images = document.createElement('div')
let image1 = document.createElement('img')
image1.src = 'assets/images/yolk.jpg'
image1.id = 'image1'
image1.className = 'image'
//
let image2 = document.createElement('img')
image2.src = 'assets/images/console.jpg'
image2.id = 'image2'
image2.className = 'image'
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
// comment buttons
const comment = document.createElement('div')
comment.id = 'commentDiv'
const submit =  document.createElement('button')
submit.className = 'button'
submit.append('submit')
//comment input
const input = document.createElement('input')
input.type= 'text'
input.placeholder = 'comments or questions here...'
input.id = 'input1'
input.className = 'input'
comment.append(submit, input)
body.append(comment)
//
submit.addEventListener('click', function(){
    const textbox =  document.createElement('div')
    textbox.innerText = input.value
    comment.append(textbox)
    let reply = document.createElement('button')
    reply.append('Reply')
    let replyInput = document.createElement('input')
    replyInput.type = 'text'
    replyInput.placeholder = 'reply ...'
    replyInput.id = 'replyInput'
    replyInput.className = 'input'
    textbox.append(reply, replyInput)

    
    reply.addEventListener('click', function(){
        let replyDiv = document.createElement('div')
        replyDiv.innerText = (replyInput.value) 
        textbox.append(replyDiv)
    })
})

// links

let fb = document.createElement('a')
fb.href = 'https://www.facebook.com/FancyCatUpcycling'
fb.target ='_blank'
fb.append('Check us out on Facebook @ FancyCatUpcycling')
body.append(fb)

let insta = document.createElement('a')
insta.href = 'https://www.instagram.com/fancy_cat_upcycling/'
insta.target ='_blank'
insta.append('Check us out on Instagram @ FancyCatUpcycling')
body.append(insta)