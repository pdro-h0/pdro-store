import Image, {ImageProps} from 'next/image'
import React from 'react'

const PromoBanner = ({alt, ...props}: ImageProps) => {
  return (
    <Image
    height={0}
    width={0}
    sizes="100vw"
    className=" h-auto  w-auto"
    alt={alt}
    {...props}
  />
  )
}

export default PromoBanner