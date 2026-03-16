// import { Helmet, HelmetProvider } from "react-helmet-async";

import { useEffect } from "react";

type MetaProps = {
  meta: {
    title: string;
    description?: string;
  };
};

export default function MetaComponent({ meta }: MetaProps) {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionSelector = 'meta[name="description"]';
    let descriptionTag = document.querySelector(
      descriptionSelector,
    ) as HTMLMetaElement | null;
    const previousDescription = descriptionTag?.getAttribute("content") ?? "";

    document.title = meta.title;

    if (meta.description) {
      if (!descriptionTag) {
        descriptionTag = document.createElement("meta");
        descriptionTag.setAttribute("name", "description");
        document.head.appendChild(descriptionTag);
      }

      descriptionTag.setAttribute("content", meta.description);
    }

    return () => {
      document.title = previousTitle || "Onsus - Multipurpose Reactjs eCommerce Template";

      if (descriptionTag) {
        if (previousDescription) {
          descriptionTag.setAttribute("content", previousDescription);
        } else if (meta.description) {
          descriptionTag.remove();
        }
      }
    };
  }, [meta.description, meta.title]);
  return (
    // <HelmetProvider>
    //   <Helmet>
    //     <title>{meta?.title}</title>
    //     <meta name="description" content={meta?.description} />
    //   </Helmet>
    // </HelmetProvider>

    <></>
  );
}
