import Image, {ImageProps} from 'next/image'
import React from 'react'

const PromoBanner = ({alt, ...props}: ImageProps) => {
  return (
    <Image
    height={0}
    width={0}
    sizes="100vw"
    className=" h-auto max-h-[70%] w-auto max-w-[80%]"
    style={{
      objectFit: "contain",
    }}
    alt={alt}
    {...props}
  />
  )
}

export default PromoBanner