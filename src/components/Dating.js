import React, {useState} from 'react';
import StoryCard from './StoryCard';

function Family() {

  let [stories, setStories] = useState([
    {
      title: "Dating is on the rise",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quis, porro reiciendis sapiente error sequi optio, officiis nostrum veniam atque eveniet est magni maxime magnam ipsam alias dolores qui fugit?"
    },
    {
      title: "Dating is becoming more and more adventurous",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quis, porro reiciendis sapiente error sequi optio, officiis nostrum veniam atque eveniet est magni maxime magnam ipsam alias dolores qui fugit?"
    },
    {
      title: "Dating is dangerous",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quis, porro reiciendis sapiente error sequi optio, officiis nostrum veniam atque eveniet est magni maxime magnam ipsam alias dolores qui fugit?"
    }
  ])

  const showStories = stories.map(s => <StoryCard story={s} type="dating"/>)

  return (
    <div>Dating
      {showStories}
    </div>
  )
}

export default Family