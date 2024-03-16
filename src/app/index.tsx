import {
  HistoryRouterProps,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import history from "./lib/history";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { useMemo } from "react";
import {
  PhantomWalletAdapter,
  BackpackWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

import Routes from "./routes";
import QueryProvider from "./providers/QueryProvider";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

function App() {
  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new BackpackWalletAdapter()],
    []
  );

  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  require("@solana/wallet-adapter-react-ui/styles.css");

  return (
    <QueryProvider>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <HistoryRouter
              history={history as unknown as HistoryRouterProps["history"]}
            >
              <Routes />
            </HistoryRouter>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </QueryProvider>
  );
}

export default App;
