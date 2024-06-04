/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import data from "../../../public/data/portfolio.json";
import { useParams } from "react-router-dom";
import { JobDetails, MediaItem, MediaRow } from "./job-details.types";
import { Grid } from "antd";

const { useBreakpoint } = Grid;

const JobDetail: React.FC = () => {
  const screens = useBreakpoint();
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

  const getMediaItemWidth = (item: MediaItem) => {
    console.log("screens", screens);
    if (screens.xs || !item.width) {
      return "100%";
    }
    return item.width;
  };

  const getMediaRowDirection = () => {
    if (screens.xs) {
      return "column";
    } else {
      return "row";
    }
  };

  const getMediaGroupWidth = (group: MediaRow) => {
    if (screens.xs) {
      return "100%";
    }
    return group.width;
  };

  const getMediaItemMargin = (item: MediaItem) => {
    if (screens.xs) {
      return "0";
    }
    return item.margin;
  };

  return (
    <div className="job-detail">
      <div className="job-detail-content">
        <div className="job-detail-content-row">
          <h1 className="job-detail-content-row-client-title">
            {jobDetails.title}
          </h1>
          <div className="job-detail-content-row-description">
            {jobDetails.description.map((paragraph) => (
              <div>{paragraph}</div>
            ))}
          </div>
        </div>
        <div className="job-detail-content-row">
          <div className="job-detail-content-row-title">Servizi</div>
          <div className="job-detail-content-description">
            {jobDetails.services.map((service) => (
              <div>{service}</div>
            ))}
          </div>
        </div>
        {jobDetails.collaborations.length > 0 && (
          <div className="job-detail-content-row">
            <div className="job-detail-content-row-title">Collaborazioni</div>
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
      <div className="portfolio-media">
        {jobDetails.media.map((mediaRow, rowIndex) => (
          <div key={rowIndex} className={`media-row ${getMediaRowDirection()}`}>
            {mediaRow.map((mediaGroup, groupIndex) => (
              <div
                key={groupIndex}
                className="media-group"
                style={{
                  flexDirection: mediaGroup.direction as any,
                  width: getMediaGroupWidth(mediaGroup),
                }}
              >
                {mediaGroup.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="media-item"
                    style={{
                      width: getMediaItemWidth(item),
                      height: item.height || "100%",
                      margin: getMediaItemMargin(item),
                      padding: item.padding,
                    }}
                  >
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt={`Media ${itemIndex}`}
                        style={{
                          objectPosition: item.objectPosition || "center",
                        }}
                      />
                    ) : (
                      <video autoPlay muted playsInline>
                        <source src={item.src} type="video/mp4" />
                      </video>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDetail;
