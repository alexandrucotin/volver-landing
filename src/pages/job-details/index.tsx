import React, { useEffect, useState } from "react";
import data from "../../../public/data/portfolio.json";
import { useParams } from "react-router-dom";

interface Collaboration {
  type: string;
  names: string[];
}
interface JobDetails {
  id: string;
  title: string;
  description: string[];
  services: string[];
  collaborations: Collaboration[];
  images: string[][];
}

const JobDetail: React.FC = () => {
  const [jobDetails, setJobDetails] = useState<JobDetails | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
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
      <div className="job-detail-content">
        <div className="job-detail-content-row">
          <h1 className="job-detail-content-row-title">{jobDetails.title}</h1>
          <div className="job-detail-content-row-description">
            {jobDetails.description.map((paragraph) => (
              <div>{paragraph}</div>
            ))}
          </div>
        </div>
        <div className="job-detail-content-row">
          <h1 className="job-detail-content-row">Servizi</h1>
          <div className="job-detail-content-description">
            {jobDetails.services.map((service) => (
              <div>{service}</div>
            ))}
          </div>
        </div>
        {jobDetails.collaborations.length > 0 && (
          <div className="job-detail-content-row">
            <h1 className="job-detail-content-row">Collaborazioni</h1>
            <div className="job-detail-content-description">
              {jobDetails.collaborations.map((collab) => (
                <div>
                  {collab.type} :
                  {collab.names.map((name) => (
                    <span>{name}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="job-detail-images">
        {jobDetails.images.map((row, rowIndex) => (
          <div className="image-row" key={rowIndex}>
            {row.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className={`image-item ${
                  row.length === 1 ? "full-width" : "half-width"
                }`}
              >
                <img src={image} alt={`Gallery ${rowIndex}-${imageIndex}`} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDetail;
