/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

//
import React, { PureComponent } from "react";
import classnames from "classnames";
import AccessibleImage from "../AccessibleImage";
import { CommandBarButton } from "./";

class PaneToggleButton extends PureComponent {
  static defaultProps = {
    horizontal: false,
    position: "start",
  };

  label(position, collapsed) {
    switch (position) {
      case "start":
        return collapsed
          ? "Expand Sources and Outline panes"
          : "Collapse Sources and Outline panes";
      case "end":
        return collapsed ? "Expand Breakpoints pane" : "Collapse Breakpoints pane";
    }
  }

  render() {
    const { position, collapsed, horizontal, handleClick } = this.props;

    return (
      <CommandBarButton
        className={classnames("toggle-button", position, {
          collapsed,
          vertical: !horizontal,
        })}
        onClick={() => handleClick(position, !collapsed)}
        title={this.label(position, collapsed)}
      >
        <AccessibleImage className={collapsed ? "pane-expand" : "pane-collapse"} />
      </CommandBarButton>
    );
  }
}

export default PaneToggleButton;
