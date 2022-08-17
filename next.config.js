/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    APP_TITLE: "OKP4 Faucet devnet",
    APP_KEYWORDS: "OKP4, Faucet, Blockchain, Know, Devnet, Token",
    CHAIN_ID: "okp4-devnet-1",
    CHAIN_NAME: "OKP4",
    CHAIN_RPC_ENDPOINT: "https://api.devnet.staging.okp4.network:443/rpc",
    CHAIN_REST_ENDPOINT: "https://api.devnet.staging.okp4.network",
    FAUCET_URL: "https://faucet.devnet.staging.okp4.network/graphql",
  },
  output: 'standalone',
}

module.exports = nextConfig
