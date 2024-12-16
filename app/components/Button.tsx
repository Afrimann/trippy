import React, { MouseEventHandler } from 'react'
import Link from 'next/link'

interface ButtonProps {
  event?: () => void | MouseEventHandler<HTMLButtonElement> | void
  styles: string
  title: string
  route?: string
}
const Button = ({ event, title, styles, route }: ButtonProps) => {
  return (
    <button
      className={styles}
      onClick={event}

    >
      <Link href={`${route}`}>
        {title}
      </Link>

    </button>
  )
}

export default Button