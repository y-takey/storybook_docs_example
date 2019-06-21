import React from 'react';

interface Props {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ label, onClick, disabled = false }: Props) =>
  <button type="button" onClick={onClick} disabled={disabled}>
    {label}-button
  </button>

export default Button;
