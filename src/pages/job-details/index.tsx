/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import data from "../../../public/data/portfolio.json";
import { useParams } from "react-router-dom";
import { JobDetails, MediaItem, MediaRow } from "./job-details.types";
import { Grid } from "antd";
import useLoadingStore from "../../core/store/loading.store";

const { useBreakpoint } = Grid;

const JobDetail: React.FC = () => {
  const { isLoading, setLoading } = useLoadingStore((store) => store);
  const screens = useBreakpoint();
  const [jobDetails, setJobDetails] = useState<JobDetails | null>(null);
  const { id } = useParams();

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const [resourcesToLoad, setResourcesToLoad] = useState<undefined | number>();
  const [resourcesLoaded, setResourcesLoaded] = useState<boolean[]>([]);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    setLoading(true);
  }, [setLoading]);

  useEffect(() => {
    if (!id) return;
    const jobDetail = data.portfolio.find((job) => job.id === id);
    if (jobDetail) {
      setJobDetails(jobDetail);

      setResourcesToLoad(
        jobDetail.media
          .flat(2)
          .map((item) => item.items)
          .flat(2).length
      );

      if (jobDetail.headerVideo) {
        setResourcesToLoad((oldState) => {
          if (oldState) {
            return oldState + 1;
          } else {
            oldState = 1;
          }
        });
      }
    }
  }, [id, resourcesToLoad]);

  useEffect(() => {
    if (resourcesToLoad === resourcesLoaded.length) {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = 2000 - elapsedTime;
      if (remainingTime > 0) {
        setTimeout(() => setLoading(false), remainingTime);
      } else {
        setLoading(false);
      }
    }
  }, [resourcesLoaded, resourcesToLoad, setLoading, startTime]);

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const onMediaLoad = () => {
    setResourcesLoaded((oldState) => oldState.concat([true]));
  };

  if (!jobDetails) {
    return <div>Error...</div>;
  }

  return (
    <>
      {isLoading && <div className="white-page"></div>}
      <div className="job-detail">
        {jobDetails.headerVideo && (
          <div className="job-detail-header-video-container">
            <video autoPlay muted loop playsInline onLoadedData={onMediaLoad}>
              <source src={jobDetails.headerVideo} type="video/mp4" />
            </video>
          </div>
        )}
        <div className="job-detail-content">
          <h1 className="job-detail-content-client-title">
            {jobDetails.title}
          </h1>
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
                        (screens.md ||
                          screens.lg ||
                          screens.xl ||
                          screens.xxl) &&
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
                        {collab.names.map((name, index) => (
                          <span key={index}> {name}</span>
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
            <div
              key={rowIndex}
              className={`media-row ${getMediaRowDirection()}`}
            >
              {mediaRow.map((mediaGroup, groupIndex) => (
                <div
                  key={groupIndex}
                  className="media-group"
                  style={{
                    flexDirection: mediaGroup.direction as any,
                    width: getMediaGroupWidth(mediaGroup),
                    justifyContent: mediaGroup.justify || "center",
                    alignItems: mediaGroup.align || "center",
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
                            objectFit: item.objectFit || ("cover" as any),
                          }}
                          onLoad={onMediaLoad}
                        />
                      ) : (
                        <>
                          <video
                            ref={videoRef}
                            autoPlay
                            muted
                            loop
                            playsInline
                            onLoadedData={onMediaLoad}
                          >
                            <source src={item.src} type="video/mp4" />
                          </video>
                          {item.unmute && (
                            <button
                              className="about-page-video-mute-button"
                              onClick={toggleMute}
                            >
                              {isMuted ? "Unmute" : "Mute"}
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobDetail;
