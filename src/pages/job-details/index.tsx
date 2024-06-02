import React, { useEffect, useState } from "react";
import data from "../../../public/data/portfolio.json";
import { useParams } from "react-router-dom";
import PhotoAlbum from "react-photo-album";
import photos from "./photos";

interface JobDetails {
  title: string;
  description: string;
  images: string[];
  details: string[];
}

const JobDetail: React.FC = () => {
  const [jobDetails, setJobDetails] = useState<JobDetails | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    console.log("id", id);
    const jobDetail = data.portfolio.find((job) => job.id === id);
    if (jobDetail) {
      setJobDetails(jobDetail);
    }
  }, [id]);

  if (!jobDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="job-detail">
      <h1 className="job-title">{jobDetails.title}</h1>
      <p className="job-description">{jobDetails.description}</p>
      <div className="job-images">
        {/*         {jobDetails.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Job detail ${index + 1}`}
            className="job-image"
          />
        ))} */}
        <PhotoAlbum photos={photos} layout="masonry" />;
      </div>
      <ul className="job-details">
        {jobDetails.details.map((detail, index) => (
          <li key={index} className="job-detail-item">
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobDetail;
