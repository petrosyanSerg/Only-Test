import "src/features/historical-dates/ui/EventCard/index.scss"

export const EventCard = ({year, description}) => (
  <div className="event_card">
    <h4 className="event_card_year">{year}</h4>
    <p className="event_card_description">{description}</p>
  </div>
)