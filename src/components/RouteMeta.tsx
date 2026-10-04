import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { notFoundMeta, routeMeta, siteUrl } from "@/data/seo";

const setMeta = (selector: string, attr: "content" | "href", value: string) => {
  document.querySelector(selector)?.setAttribute(attr, value);
};

const RouteMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
    const meta = routeMeta[path];
    const { title, description } = meta ?? notFoundMeta;
    const url = `${siteUrl}${path === "/" ? "/" : path}`;

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="robots"]', "content", meta ? "index, follow, max-image-preview:large" : "noindex");
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
  }, [pathname]);

  return null;
};

export default RouteMeta;
