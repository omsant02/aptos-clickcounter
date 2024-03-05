import React, { useEffect, useState } from "react";
import { Layout, Row, Col } from "antd";

import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

import { Aptos } from "@aptos-labs/ts-sdk";
const aptos = new Aptos();

function App() {
  const { account } = useWallet();

  useEffect(() => {
    // fetchList();
  }, [account?.address]);

  return (
    <>
      <Layout>
        <Row align="middle">
          <Col span={10} offset={2}>
            <h1 className="text-5xl">Click And Count</h1>
          </Col>
          <Col span={12} style={{ textAlign: "right", paddingRight: "200px" }}>
            <WalletSelector />
          </Col>
        </Row>
      </Layout>
      <div className=" flex justify-center mt-40 gap-24">
        <button className="text-5xl btn btn-danger ">Click</button>
        <h1 className="text-blue-500 text-5xl">counter</h1>
      </div>
    </>
  );
}

export default App;
