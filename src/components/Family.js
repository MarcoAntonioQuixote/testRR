import React, {useState} from 'react';
import StoryCard from './StoryCard';

function Family() {

  let [stories, setStories] = useState([
    {
      title: "Family is loving vacation",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quis, porro reiciendis sapiente error sequi optio, officiis nostrum veniam atque eveniet est magni maxime magnam ipsam alias dolores qui fugit?"
    },
    {
      title: "Family survivves hurricane together",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quis, porro reiciendis sapiente error sequi optio, officiis nostrum veniam atque eveniet est magni maxime magnam ipsam alias dolores qui fugit?"
    },
    {
      title: "What is best for the family?",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quis, porro reiciendis sapiente error sequi optio, officiis nostrum veniam atque eveniet est magni maxime magnam ipsam alias dolores qui fugit?"
    }
  ])

  const showStories = stories.map(s =>
     <StoryCard story={s} type={"family"} />
    )

  return (
    <div>Family
      {showStories}
    </div>
  )
}

export default Family