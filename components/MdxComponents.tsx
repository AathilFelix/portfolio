import React from 'react'
import Image from 'next/image';

type ImageProps = {
  src?: string;
  alt?: string;
};


export const mdxComponents = {
  img: ({ src, alt }: ImageProps) => (
    <Image
      src={src || ""}
      alt={alt || ""}
      width={800}
      height={450}
      className="rounded-lg border border-border my-6"
      style={{ width: "100%", height: "auto" }}
    />
  ),
};