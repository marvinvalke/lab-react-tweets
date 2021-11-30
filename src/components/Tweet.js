import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Message from "./Message";
import Action from "./Action";


function Tweet(props) {


  return (
    <div className="tweet">
      <ProfileImage
        src={props.tweet.user.image}
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <User userData = {props.tweet.user}/>

          <Timestamp time={props.tweet.timestamp}/>
        </div>

        <Message message={props.tweet.message}/>

        <Action />
      </div>

      <i className="fas fa-ellipsis-h"></i>

 
    
    </div>
  );
}

export default Tweet;
