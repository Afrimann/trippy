import React, { MouseEventHandler } from 'react'

interface ButtonProps{
    event: MouseEventHandler<HTMLButtonElement>
    styles: string
    title: string

}
const Button = ({event,title,styles}:ButtonProps) => {
  return (
    <button
        className={styles}
        onClick={event}
    >
        {title}

    </button>
  )
}

export default Button