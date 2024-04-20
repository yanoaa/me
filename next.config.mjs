/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'custom',
        unoptimized: true
    },
    output: "export",
};

export default nextConfig;
