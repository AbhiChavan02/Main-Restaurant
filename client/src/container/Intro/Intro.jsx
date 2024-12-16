import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidref = React.useRef();

  return(
    <div className="app_video">
      <video
      ref={vidref}
      src={meal}
      type="video/mp4"
      loop
      controls={false}
      muted
      />
      <div className="app_video_overlay flex_center">
        <div className="app_video_overlay_circle flex_center"
        onClick={() => {
          setPlayVideo(!playVideo);
          if(playVideo){
            vidref.current.pause();
          }
          else{
            vidref.current.play();
          }
        }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30}/>
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
