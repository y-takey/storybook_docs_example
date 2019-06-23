import React from 'react';

interface Props {
  /** ボタンに表示される文字列 */
  label: string;
  /** クリック時のイベントハンドラ */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** 使用不可にするか */
  disabled?: boolean;
}

const style: React.CSSProperties = {
  color: "#fff",
  backgroundColor: "#00e676",
  borderColor: "#00e676",
  border: "1px solid transparent",
  borderRadius: "4px",
  fontWeight: 400,
  fontSize: "14px",
  height: "32px",
  lineHeight: 1.5,
  outline: 0,
  padding: "0px 15px",
}

const Button = ({ label, onClick, disabled = false }: Props) => (
  <button type="button" style={style} onClick={onClick} disabled={disabled}>
    {label}
  </button>
);

Button.defaultProps = {
  disabled: false,
}

export default Button;
