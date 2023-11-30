"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProductImagesProps {
  name: string;
  imageUrls: string[];
}

const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);
  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div className="flex flex-col">
      <div
        className="
        flex
        h-[300px]
        w-full
        items-center
        justify-center
        bg-accent"
      >
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          className="
            h-auto
            max-h-[70%]
            w-auto
            max-w-[80%]"
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4 px-5">
        {imageUrls.map((imageUrl) => (
          <button
            type="button"
            key={imageUrl}
            className={`flex items-center justify-center rounded-lg bg-accent
            ${
              imageUrl === currentImage &&
              "border-2 border-solid border-primary"
            }`}
          >
            <Image
              src={imageUrl}
              alt={name}
              height={0}
              width={0}
              className="
            h-auto
            max-h-[70%]
            w-auto
            max-w-[80%]"
              sizes="100vw"
              style={{
                objectFit: "contain",
              }}
              onClick={() => handleImageClick(imageUrl)}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
