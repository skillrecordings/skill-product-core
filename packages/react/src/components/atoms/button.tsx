import React from 'react'

export interface ButtonProps {
  className?: any
  disabled?: boolean
  loading?: boolean
  size?: 'small' | 'middle' | 'large'
  id?: string
  buttonType?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<ButtonProps> = ({
  className,
  id,
  onClick,
  buttonType,
  ...props
}) => {
  return (
    <>
      <div className="buttonWrapper" style={{padding: '10px'}}>
        <button
          className={`${className} ${'button'}`}
          style={{
            padding: '20px',
            background: buttonType === 'next' ? '#32a852' : '#33598f',
            color: '#ffffff',
            border: '1px solid #ffffff',
            borderRadius: '15px',
            cursor: 'pointer',
            fontSize: '20px',
          }}
          id={id}
          {...props}
          onClick={onClick}
        >
          {props.children}
        </button>
      </div>
    </>
  )
}
