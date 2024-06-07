import React, { useRef, useState } from "react";
import data from "../../../../public/data/about.json";
import ServicesSection from "../services-section";

const AboutSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  return (
    <div className="about-page">
      <div className="about-page-video">
        <video ref={videoRef} playsInline loop autoPlay muted controls={false}>
          <source src="./reel.mp4" type="video/mp4" />
        </video>
        <button className="about-page-video-mute-button" onClick={toggleMute}>
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>
      <div className="about-page-content">
        <div className="">
          {data.description.map((description, index) => (
            <div key={index} className="about-page-content-description">
              {description}
            </div>
          ))}
        </div>
        <ServicesSection />
      </div>
    </div>
  );
};

export default AboutSection;
