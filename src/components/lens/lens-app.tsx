import { useEffect } from "react";
import { Accounts, Check, Compose, Done, ItemScreen, LotList } from "@/components/lens/browse";
import { Capture } from "@/components/lens/capture";
import { Phone } from "@/components/lens/chrome";
import { Sweep } from "@/components/lens/sweep";
import { useLens } from "@/lib/lens/store";

export function LensApp() {
  const screen = useLens((s) => s.screen);
  const hydrate = useLens((s) => s.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return (
    <Phone>
      {screen === "lens" ? <Capture /> : null}
      {screen === "sweep" ? <Sweep /> : null}
      {screen === "lot" ? <LotList /> : null}
      {screen === "item" ? <ItemScreen /> : null}
      {screen === "compose" ? <Compose /> : null}
      {screen === "check" ? <Check /> : null}
      {screen === "done" ? <Done /> : null}
      {screen === "accounts" ? <Accounts /> : null}
    </Phone>
  );
}
