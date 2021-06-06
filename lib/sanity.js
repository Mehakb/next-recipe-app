import {
    createClient,
    createPreviewSubscriptionHook,
    createImageUrlBuilder,
    createPortableTextComponent
} from "next-sanity";

const config = {
    projectId: "x9avp3hb",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: false
}

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (src) => createImageUrlBuilder(config).image(src)

export const PortableText = createPortableTextComponent({
    ...config,
    serializers: {},
})