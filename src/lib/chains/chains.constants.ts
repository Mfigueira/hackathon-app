import { getDefaultConfig, Chain } from "@rainbow-me/rainbowkit";
import { bscTestnet, sepolia } from "wagmi/chains";
import { QueryClient } from "@tanstack/react-query";

export const zetaAthens = {
  id: 7001,
  name: "ZetaChain Athens 3 Testnet",
  iconUrl: "/img/zeta-logo.svg",
  iconBackground: "#fff",
  nativeCurrency: {
    name: "ZetaChain Athens 3 Coin",
    symbol: "ZETA",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://zetachain-athens-evm.blockpi.network/v1/rpc/public"],
    },
  },
  blockExplorers: {
    default: {
      name: "ZetaScan",
      url: "https://athens.explorer.zetachain.com/",
    },
  },
} as const satisfies Chain;

export const config = getDefaultConfig({
  appName: process.env.NEXT_PUBLIC_WC_APP_NAME || "",
  projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || "",
  chains: [zetaAthens, bscTestnet, sepolia],
  // ssr: true, // If your dApp uses server side rendering (SSR)
});

export const queryClient = new QueryClient();
