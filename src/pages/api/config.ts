import type { NextApiRequest, NextApiResponse } from 'next'
import type { Config } from '../../config/config.type'

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export default function handler(_req: NextApiRequest, res: NextApiResponse): void {
    const cfg: Config = {
        chain: {
            id: process.env.CHAIN_ID,
            name: process.env.CHAIN_NAME,
            endpoints: {
                rpc: process.env.CHAIN_RPC_ENDPOINT,
                rest: process.env.CHAIN_REST_ENDPOINT,
            },
        },
        faucet: process.env.FAUCET_URL,
    }
    res.status(200).json(cfg)
}