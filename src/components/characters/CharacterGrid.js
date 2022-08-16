import React from 'react'
import CharacterItems from './CharacterItems'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ isLoading, items }) => {
  return isLoading ? (<Spinner />) : (<section className='cards'>
    {items.map((item) => (
        <CharacterItems key={item.char_id} item={item}/>
    ))}
  </section>
  )
}

export default CharacterGrid