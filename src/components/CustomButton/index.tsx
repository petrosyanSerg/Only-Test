import cn from "classnames";

import {noop} from "src/shared/helpers";

import "src/components/CustomButton/index.scss"

export const CustomButton = ({children, className, onClick, disabled}) => {
  
  return (
    <div
      onClick={disabled ? noop : onClick}
      className={cn('custom_button', className, {'custom_button_disabled': disabled})}
    >
      {children}
    </div>
  )
}