// import BuilderDevTools from "@builder.io/dev-tools/next";

// /** @type {import('next').NextConfig} */
// const nextConfig = BuilderDevTools()(BuilderDevTools()({}));

// export default nextConfig;


import BuilderDevTools from "@builder.io/dev-tools/next";
import withSvgr from 'next-svgr';

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()(
  BuilderDevTools()(
    withSvgr({
      // Add any additional Next.js config options you may need here
    })
  )
);

export default nextConfig;

