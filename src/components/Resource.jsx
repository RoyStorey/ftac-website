function Resource(props) {
  return (
    <div className="resource-block">
      <div className="temp-img"></div>
      <div className="info-container">
        <h5>{props.resourceobject.name}</h5>
        <p>{props.resourceobject.description}</p>
        <a href='/contact'>Contact to Learn More</a>
      </div>
    </div>
  )
}

export default Resource