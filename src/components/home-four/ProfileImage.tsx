"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/data/profile";

interface ProfileImageProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function ProfileImage({
  className = "w-100",
  width = 520,
  height = 520,
  priority = false,
}: ProfileImageProps) {
  const [src, setSrc] = useState(profile.photo);

  return (
    <Image
      src={src}
      alt={`${profile.name} profile photo`}
      width={width}
      height={height}
      loading={priority ? undefined : "lazy"}
      priority={priority}
      className={className}
      style={{ objectFit: "cover" }}
      onError={() => {
        if (src !== profile.photoPlaceholder) {
          setSrc(profile.photoPlaceholder);
        }
      }}
    />
  );
}
