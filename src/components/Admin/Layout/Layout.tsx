"use client";
import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import {
  MdDashboard,
  MdLogout,
  MdOutlineCreateNewFolder,
} from "react-icons/md";
import { FiLoader } from "react-icons/fi";
import type { MenuProps } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const AdminLayout = ({ children }: any) => {
  //Checking if user exist or not
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-slate-200 flex items-center justify-center">
        <span className="flex items-center gap-4">
          Loading...
          <FiLoader className="text-blue-600 animate-spin " />
        </span>
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("/login");
    return (
      <div className="min-h-screen bg-slate-200 flex items-center justify-center">
        <span className="flex items-center gap-4">
          Access denied redirecting to login page.
        </span>
      </div>
    );
  }

  const items: MenuItem[] = [
    getItem(<Link href="/admin">Dashboard</Link>, "1", <MdDashboard />),
    getItem("Create", "sub1", <MdOutlineCreateNewFolder />, [
      getItem(<Link href="/admin/portfolio">Portfolio</Link>, "2"),
      getItem(<Link href="/admin/certifacate">Certificate</Link>, "3"),
      getItem(<Link href="/admin/experience">Experience</Link>, "4"),
    ]),
  ];
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="text-xl font-bold text-white p-4">Cryptolancer 🦄</div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout
        className="site-layout bg-slate-200 min-h-screen"
        style={{ marginLeft: 200 }}
      >
        <Header className="bg-white flex items-center justify-end gap-4">
          <MdLogout
            onClick={() => signOut()}
            className="text-xl text-red-500"
          />
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              background: "white",
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Cryptolancer ©2023 made with ❤️
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
