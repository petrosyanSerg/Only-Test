import "src/features/historical-dates/ui/CategoryBadge/index.scss"
export const CategoryBadge = () => {
  return (
    <div className="category_badge">
      <div className="category_badge_lines"/>
      <div className="category_badge_circle">
        <div className="category_badge_circle_dots"></div>
        <div className="category_badge_circle_dots"></div>
        <div className="category_badge_circle_dots"></div>
        <div className="category_badge_circle_dots"></div>
        <div className="category_badge_circle_dots"></div>
        <div className="category_badge_circle_dots"></div>
      </div>
    </div>
  )
}