import React, { useState } from "react";
import "./style.css";
import { Menu } from "antd";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Navigation One", "sub1", "", [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
  ]),
  getItem("Navigation Two", "sub2", "", [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
  getItem("Navigation Three", "sub4", "", [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const LeftFilter = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <div className="left_filter">
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{
          width: 256,
        }}
        items={items}
      />
    </div>
  );
};
export default LeftFilter;
