import React from 'react'

function StoryCard({story, type}) {

    let styling = {};

    switch(type) {
        case "family":
            styling.border = "solid red 2px";
            break;
        case "dating":
            styling.border = "solid blue 2px";
            styling.backgroundColor = "red"
            break;
    }

  return (
    <div style={styling}>
        <h2>{story.title}</h2>
        <p>{story.text}</p>
    </div>
  )
}

export default StoryCard