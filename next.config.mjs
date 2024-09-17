/** @type {import('next').NextConfig} */

//Enviroment check

const isdev = process.env.ENVIROMENT === "development";

const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  output: isdev ? "standalone" : undefined,
};

export default nextConfig;
