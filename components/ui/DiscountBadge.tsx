import { ArrowDown } from 'lucide-react'
import React from 'react'
import { Badge, BadgeProps } from './badge'

const DiscountBadge = ({children, className, ...props}: BadgeProps) => {
  return (
    <Badge className={`${className} left-2 top-2`} {...props}>
              <ArrowDown size={14} />
              {children}%
            </Badge>
  )
}

export default DiscountBadge