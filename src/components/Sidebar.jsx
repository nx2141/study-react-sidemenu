import React from "react";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  return (
    <div>
      <ul>
        {SidebarData.map((value, key) => {
          return (
            <li
              key={key}
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              <div class="icon">{value.icon}</div>
              <div class="icon">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
