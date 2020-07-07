class Image{
constructor(image){

this.image = image

}
img(){
const photo = document.createElement('img')
photo.className = 'productImg'
photo.append(this.image)
const productsMain = document.querySelector('#productsMain')
productsMain.append(photo)

}


}