/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Izin ambil gambar dari Supabase Storage
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gsdmxqgwdlmztdeeorae.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },

  // 2. Redirect /admin otomatis ke /admin/dashboard
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/dashboard',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;