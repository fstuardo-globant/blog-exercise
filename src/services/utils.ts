//not used in this exercise
import { Entry } from "contentful";

export interface IImage {
  url: string;
  alt: string;
}

export const contentfulImage = (imageObj: Entry<any>): IImage => {
  return { alt: imageObj?.fields.title, url: imageObj?.fields.file?.url };
};
