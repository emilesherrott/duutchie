import React, { useState } from "react"
import "./style.css"

import { RecipeTile } from '../../components'

const Welcome = () => {
  const [search, setSearch] = useState("")
  const [searchValue, setSearchValue] = useState("")


  const handleUpdate = (e) => {
    const input = e.target.value
    setSearch(input)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchValue(search)
    setSearch("")
  }


  return (
    <>
      <section className="top">
        <h1>Duutchie</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="search" value={search} placeholder="Search" onChange={handleUpdate} id="search" aria-label="search" />
        </form>
      </section>
      <section id="top-recipe-title">
        <h2>Top Recipes</h2>
        <div id="top-recipes">
        <RecipeTile />
        </div>
      </section>
    </>
  )
}

export default Welcome
