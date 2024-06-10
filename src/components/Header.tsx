import { ConnectButton } from "@rainbow-me/rainbowkit";

export const Header = () => {
  return (
    <header className="flex justify-between p-6">
      <h1>My App</h1>

      <ConnectButton />
    </header>
  );
};
