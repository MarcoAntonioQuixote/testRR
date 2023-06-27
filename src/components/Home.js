import React, {useState} from 'react'
import Family from './Family';
import Dating from './Dating';
import StoryCard from './StoryCard';


function Home() {

  let [allStories, setAllStories] = useState([
    {
      title: "Family STory",
      text: "Hello",
      type: "family"
    },
    {
      title: "Dating STory",
      text: "Hello from Dating",
      type: "dating"
    },
  ])

  let showStories = allStories.map(s => {
  
    return (
      <StoryCard story={s} type={s.type} />
    )
  })

  return (
    <div>Home
      {showStories}
    </div>
  )
}

export default Home