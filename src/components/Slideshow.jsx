import 'react-slideshow-image/dist/styles.css';
import '../css/slideshow.css'
import { Fade } from 'react-slideshow-image';
import LearnMore from './LearnMore';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '100vh',
}

const eventsList = [
  { name: 'Dorm Cooking Class', description: 'On October 15th, there will be a cooking class where dorm residents can learn to do dorm-life cooking. Hosted by SrA snuffy, this course will teach you to make a lot of food.', imgurl: 'https://media.defense.gov/2019/Sep/04/2002178449/1920/1080/0/190827-F-BO262-1130.JPG' },
  { name: 'dorm-event 2', description: 'this is an example description', imgurl: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80' },
  { name: 'dorm-event 3', description: 'this is an example description', imgurl: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80' },
]

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {eventsList.map((event, index) => (
          <div key={index}>
            <div style={{ ...divStyle, 'backgroundImage': `url(${event.imgurl})` }}>
              <LearnMore ftacEvent={event} />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  )
}
export default Slideshow;