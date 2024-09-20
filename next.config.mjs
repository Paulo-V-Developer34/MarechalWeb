import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const withSvgr = require('@svgr/webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Encontre a regra existente que lida com importações de SVG
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    config.module.rules.push(
      // Reaplique a regra existente, mas apenas para importações de svg terminando em ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Converta todas as outras importações *.svg para componentes React
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclua se *.svg?url
        use: ['@svgr/webpack'],
      }
    );

    // Modifique a regra do file loader para ignorar *.svg, já que agora lidamos com isso
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;

// const withPlugins = require('next-compose-plugins');
// const withImages = require('next-images');


// webpack(config, options) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack'],
//     });

//     return config;
//   },