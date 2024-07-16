import React from 'react'
import { useForm } from 'react-hook-form'
import "../HomePage/styles/FilterPrice.css"

const FilterPrice = ({setFromTo}) => {

    const { handleSubmit, register, reset } = useForm()

    const submit = data => {
        const obj = {
            from: +data.from,
            to: +data.to === 0 ? Infinity : +data.to
        }
        setFromTo(obj)

    }
  return (
    <div className='filterPrice__div'>
      <h3> Filter price </h3>
      <form onSubmit={handleSubmit(submit)} >
        <label className='filterPrice__div-label'>
          <input {...register("from")}  type="number" placeholder='Min price'/>
        </label>
        <label className='filterPrice__div-label'>
          <input {...register("to")} type="number" placeholder='Max price' />
        </label>
        <button className='filterPrice__btn'>Apply</button>
      </form>
    </div>
  )
}

export default FilterPrice
