document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 4240 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`


const img = document.querySelector('#image')




fetch ('https://randopic.herokuapp.com/images/4240')
  .then(response => response.json())
  .then(lol => {
    JSON.stringify(lol) 
    console.log(lol.url)
  
  let newImage = document.querySelector("img");
  newImage.src = lol.url;
  
  })




  // function turnImageIntoHTML



ocked

})
