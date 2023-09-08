import '../css/learn-more.css'

function LearnMore(props) {
  return (
    <div className="learn-more-container">
      <h3>{props.ftacEvent.name}</h3>
      <p>{props.ftacEvent.description}</p>
      <a href='/contact'>Contact to Learn More</a>
    </div>
  )
}
export default LearnMore