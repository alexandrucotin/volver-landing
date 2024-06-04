export interface MediaItem {
  type: string;
  src: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  objectPosition?: string;
}
export interface MediaRow {
  items: MediaItem[];
  direction: string;
  width: string;
}
interface Collaboration {
  type: string;
  names: string[];
}

export interface JobDetails {
  id: string;
  title: string;
  description: string[];
  services: string[];
  collaborations: Collaboration[];
  media: MediaRow[][];
}
