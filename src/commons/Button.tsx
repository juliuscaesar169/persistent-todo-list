import React from 'react';

type Props = {
    children?: React.ReactNode;
    className?: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = ({children, className="std-btn", onClick}:Props) => {
  return (
    <button className={className} onClick={onClick}>
        {children && children}  
    </button>
  );
};

export default Button;
