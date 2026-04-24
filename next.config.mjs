// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.bairesdev.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.bairesdev.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "bairesdev.mo.cloudinary.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },

      {
        protocol: "https",
        hostname: "www.sevenunique.com",
        pathname: "/**",
      },

    ],

  },
};

export default nextConfig;