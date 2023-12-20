import Link from 'next/link'

import { CATEGORY_ICON } from "@/app/constants/CategoryIcon";
import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";

import React from "react";

interface CategoryItem {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItem) => {
  return (
    <Link
    href={`/category/${category.slug}`}>
      <Badge
        variant="outline"
        className="flex items-center justify-center gap-2 rounded-lg py-3 lg:w-48"
      >
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        <span className="text-xs font-bold">{category.name}</span>
      </Badge>
    </Link>
  );
};

export default CategoryItem;
