import { FiX } from "react-icons/fi";
import { Trans } from "@lingui/macro";
import { Link } from "react-router-dom";

import { HeaderLink } from "./HeaderLink";
import { isHomeSite } from "lib/legacy";
import ExternalLink from "components/ExternalLink/ExternalLink";

type Props = {
  small?: boolean;
  clickCloseIcon?: () => void;
  openSettings?: () => void;
  redirectPopupTimestamp: number;
  showRedirectModal: (to: string) => void;
};

export function AppHeaderLinks({
  small,
  openSettings,
  clickCloseIcon,
  redirectPopupTimestamp,
  showRedirectModal,
}: Props) {
  return (
    <div className="App-header-links">
      {small && (
        <div className="App-header-links-header">
          <Link className="App-header-link-main" to="/">
            <img src="/logo.png" alt="ZK Logo" />
          </Link>
          <div
            className="App-header-menu-icon-block mobile-cross-menu"
            onClick={() => clickCloseIcon && clickCloseIcon()}
          >
            <FiX className="App-header-menu-icon" />
          </div>
        </div>
      )}
      <div className="App-header-link-container">
        <ExternalLink
          href="https://docs.zkexchange.finance"
                  className="header-link-cus"
        >
          <Trans>Whitepaper</Trans>
        </ExternalLink>
      </div>
      <>
        {/* <div className="App-header-link-container">
          <ExternalLink
            className="header-link-cus"
            href="https://app.clickerdex.finance"
          >
            <Trans>Bridge</Trans>
          </ExternalLink>
        </div> */}
        {/* <div className="App-header-link-container">
          <HeaderLink
            to="/referrals"
            redirectPopupTimestamp={redirectPopupTimestamp}
            showRedirectModal={showRedirectModal}
            className="header-link-cus"
          >
            <Trans>Referrals</Trans>
          </HeaderLink>
        </div> */}
      </>

      <div className="App-header-link-container">
        {/* <ExternalLink href="https://docs.optimoondex.com" className="header-link-cus">
          <Trans>Docs</Trans>
        </ExternalLink> */}
      </div>

      {small && !isHomeSite() && (
        <div className="App-header-link-container">
          {/* eslint-disable-next-line */}
          <a href="#" className="header-link-cus" onClick={openSettings}>
            <Trans>Settings</Trans>
          </a>
        </div>
      )}
    </div>
  );
}
