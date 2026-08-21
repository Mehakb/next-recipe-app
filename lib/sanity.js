import { createClient, PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const config = {
  projectId: "x9avp3hb",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: false,
};

export const sanityClient = createClient(config);

export { PortableText };

export const urlFor = (src) => imageUrlBuilder(sanityClient).image(src);
