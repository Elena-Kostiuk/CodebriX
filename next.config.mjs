import BuilderDevTools from "@builder.io/dev-tools/next";
import withSvgr from 'next-svgr';

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()(
  BuilderDevTools()(
    withSvgr({
   
    })
  )
);

export default nextConfig;

