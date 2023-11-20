import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";

import React from "react";

import {
  HeadphonesIcon,
  KeyboardIcon,
  SquareIcon,
  MonitorIcon,
  SpeakerIcon,
  MouseIcon,
} from "lucide-react";

interface CategoryItem {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItem) => {
  const categoryIcon = {
    keyboards: <KeyboardIcon size={16} />,
    monitors: <MonitorIcon size={16} />,
    headphones: <HeadphonesIcon size={16} />,
    mousepads: <SquareIcon size={16} />,
    speakers: <SpeakerIcon size={16} />,
    mouses: <MouseIcon size={16} />
  };
  return (
    <div>
      <Badge
        variant="outline"
        className="flex items-center justify-center gap-2 rounded-lg py-3"
      >
        {categoryIcon[category.slug as keyof typeof categoryIcon]}
        <span className="text-xs font-bold">{category.name}</span>
      </Badge>
    </div>
  );
};

export default CategoryItem;
