function Profile(props) {

    return (
        <div className='profile'>
        <div className='row-one'>
          <div className='text-container'>
            <p>{props.profile.quote}</p>
            <div className='info-container desktop-only'>
              <p>{props.profile.rank + ' ' + props.profile.name}</p>
              <p>{props.profile.role}</p>
              <p>{props.profile.email}</p>
              <p>{props.profile.phone}</p>
            </div>
          </div>
        <img className='profile-picture' src={props.profile.photo} alt='bergman' />
        </div>
        <div className='row-two mobile-only'>
            <p>{props.profile.rank + ' ' + props.profile.name}</p>
            <p>{props.profile.role}</p>
            <p>{props.profile.email}</p>
            <p>{props.profile.phone}</p>
        </div>
      </div>
    )
  }
  
  export default Profile