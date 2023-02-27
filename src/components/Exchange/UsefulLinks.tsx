import { Trans } from "@lingui/macro";
import ExternalLink from "components/ExternalLink/ExternalLink";
import cx from "classnames";

export default function UsefulLinks({ className }) {
  const classNames = cx("Exchange-swap-market-box App-box App-box-border", className);
  return (
    <div className={classNames}>
      <div className="Exchange-swap-market-box-title">
        <Trans>Useful Links</Trans>
      </div>
      <div className="App-card-divider"></div>
      <div className="Exchange-info-row">
        <div className="Exchange-info-label-button">
          <ExternalLink href="https://docs.optimoondex.com/trading">
            <Trans>Trading guide</Trans>
          </ExternalLink>
        </div>
      </div>
    </div>
  );
}
