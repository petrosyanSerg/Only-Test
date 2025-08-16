import {
  Timeline,
  YearSelector,
  CategoryBadge,
  NavigationArrows
} from "src/features/historical-dates";

import "src/pages/HistoryPage/index.scss"

export const HistoryPage = () => {
  return (
    <div className="history_page">
      <h1 className="history_page_title">Исторические даты</h1>
      <YearSelector/>
      <CategoryBadge/>
      <NavigationArrows/>
      <Timeline/>
    </div>
  )
}