/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import data from "../../../public/data/portfolio.json";
import { useParams } from "react-router-dom";
import { JobDetails, MediaItem, MediaRow } from "./job-details.types";
import { Grid } from "antd";
import { motion } from "framer-motion";

const { useBreakpoint } = Grid;

const JobDetail: React.FC = () => {
  const screens = useBreakpoint();
  const [jobDetails, setJobDetails] = useState<JobDetails | null>(null);
  const { id } = useParams();

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransition = {
    duration: 1,
  };

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
    <motion.div
      className="job-detail"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="job-detail-content">
        <h1 className="job-detail-content-client-title">{jobDetails.title}</h1>
        <div className="job-detail-content-details">
          <div className="job-detail-content-details-paragraphs">
            {jobDetails.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          {jobDetails.services && jobDetails.services.length > 0 && (
            <div className="job-detail-content-details-row">
              <div className="job-detail-content-details-row-title">
                SERVIZI
              </div>
              <div className="job-detail-content-details-row-content">
                {jobDetails.services.map((service, index) => (
                  <div key={index}>
                    {service}{" "}
                    {index + 1 !== jobDetails.services!.length &&
                      (screens.md || screens.lg || screens.xl || screens.xxl) &&
                      "-"}
                  </div>
                ))}
              </div>
            </div>
          )}
          {jobDetails.collaborations &&
            jobDetails.collaborations.length > 0 && (
              <div className="job-detail-content-details-row">
                <div className="job-detail-content-details-row-title">
                  COLLABORAZIONI
                </div>
                <div className="job-detail-content-details-row-content">
                  {jobDetails.collaborations.map((collab, index) => (
                    <div key={index}>
                      {collab.type}:
                      {collab.names.map((name) => (
                        <span> {name}</span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
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
                      <video autoPlay muted loop playsInline>
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
    </motion.div>
  );
};

export default JobDetail;
