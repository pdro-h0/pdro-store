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
    <div className="flex flex-col lg:col-span-2 lg:rounded">
      <div
        className="
        flex
        h-[300px]
        w-full
        items-center
        justify-center
        bg-accent
        relative
        lg:h-full"
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

        <div className="hidden lg:absolute lg:left-8 lg:top-8 lg:flex lg:flex-col lg:gap-4">
          {imageUrls.map((imageUrl) => (
            <button
              type="button"
              key={imageUrl}
              className={`flex w-16 h-16 items-center justify-center rounded-lg bg-background
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

      <div className="mt-8 grid grid-cols-4 gap-4 px-5 lg:hidden">
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
