import React from "react"
import "./style.css"

const RecipeTile = () => {
  return (
    <article>
      <h3>Ackee & Saltfish</h3>
      <img src="https://www.seriouseats.com/thmb/YMsQt-o6xiHN3xYL7xNqyg8kDGY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__09__20200829-saltfish-ackee-vicky-wasik-1-f066e2f6aa5e4ebb84637cfcec31eb5f.jpg" alt=""/>
      <div className="general-info">
        <div className="recipe-info">
          <div className="rating">Rating: 4</div>
          <div className="time">Cook Time: 1hr 30</div>
        </div>
        <div className="recipe-nationality">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/255px-Flag_of_Jamaica.svg.png" alt=""/>
        </div>
      </div>
    </article>
  )
}

export default RecipeTile
