"use client";
import React from "react";
import Image from "next/image";
import { Drawer } from "antd";

interface MenuProps {
  className?: string;
  children: React.ReactNode;
}

export default function Menu({ children, className }: MenuProps) {
  const [open, setOpen] = React.useState(false);

  const showDrawer = () => setOpen(true);

  const onClose = () => setOpen(false);

  const menuLinks = React.Children.map(children, (child) => {
    return React.cloneElement(child as React.ReactElement, {
      onClick: onClose,
    });
  });

  return (
    <div className={className}>
      <Image
        className="cursor-pointer"
        src="/menu.png"
        alt="menu"
        width={30}
        height={30}
        onClick={showDrawer}
      />
      <Drawer
        placement="right"
        onClose={onClose}
        open={open}
        closeIcon={
          <Image src="/close.png" alt="close" width={25} height={25} />
        }
      >
        {menuLinks}
      </Drawer>
    </div>
  );
}
