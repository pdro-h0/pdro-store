import React from 'react'

interface SectionTitleProps{
    title: string
}

const SectionTitle = ({title}: SectionTitleProps) => {
  return (
    <p className="mb-3 pl-5 font-bold uppercase">{title}</p>
  )
}

export default SectionTitle