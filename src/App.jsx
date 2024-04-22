import React from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Images from './components/Images';
import memesData from './components/memesData';

function App() {
  const [memes, setMemes] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"

  })

  const [memeImages, setMemeImages] = React.useState(memesData)

  function generateImage(){
    let randomNumber = Math.floor(Math.random() * 101)
    let memeArray = memeImages['data']['memes']
    let RandomImageUrl = memeArray[randomNumber].url

    setMemes(prevMeme => ({
      
        ...prevMeme,
        randomImage : RandomImageUrl
      
    }))

  }

  return (


    <>
      <Header />
      <Form generateImage={generateImage} memes={memes}/>
    </>
  )
}

export default App
