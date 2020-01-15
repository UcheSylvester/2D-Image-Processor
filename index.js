const input = document.getElementById('input')
const fileReader = new FileReader()
const imgElem = document.createElement('img')
const body = document.querySelector('body')

const preview = document.getElementById('preview')
const ctx = preview.getContext('2d')

const applyFilter = () => {
  const imageData = ctx.getImageData(0, 0, image.width, image.height)

  console.log(imageData)
}


fileReader.addEventListener('load', (e) => {
  const img = e.target.result;
  imgElem.src = img;

  preview.width = imgElem.width
  preview.height = imgElem.height

  // imgElem.classList.add('image')

  ctx.drawImage(imgElem, 0, 0)

  applyFilter()

})



input.addEventListener('change', (e) => {
  const file = e.target.files[0]

  fileReader.readAsDataURL(file)
})