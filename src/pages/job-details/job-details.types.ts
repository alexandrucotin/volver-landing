export interface MediaItem {
  type: string;
  src: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  objectPosition?: string;
  objectFit?: string;
  unmute?: boolean;
}
export interface MediaRow {
  items: MediaItem[];
  direction: string;
  width: string;
  align?: string;
  justify?: string;
}
interface Collaboration {
  type: string;
  names: string[];
}

export interface JobDetails {
  id: string;
  headerVideo?: string;
  title: string;
  description: string[];
  services?: string[];
  collaborations?: Collaboration[];
  media: MediaRow[][];
}
