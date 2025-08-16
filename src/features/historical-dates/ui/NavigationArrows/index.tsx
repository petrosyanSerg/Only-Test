import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";

import {CustomButton} from "src/components/CustomButton";

import "src/features/historical-dates/ui/NavigationArrows/index.scss"
export const NavigationArrows = () => {
  return (
    <div className='navigation'>
      <p className='navigation_text'>01/06</p>
      <div className="navigation_arrows">
        <CustomButton>
          <FaAngleLeft/>
        </CustomButton>
        <CustomButton>
          <FaAngleRight/>
        </CustomButton>
      </div>
    </div>
  )
}