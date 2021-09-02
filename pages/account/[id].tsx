import { Divider, Table } from "@mantine/core";
import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { getUserAccounts } from "../../services/accountService";

const Acccount: NextPage = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    const userId = parseInt(id.toString());
    getUserAccounts(userId, (data) => {
      console.log(data);
      setData(data);
    });
  }, [id]);

  const items = data.map((x: any, idx) => {
    const { user_id, id, name, balance } = x.attributes;
    return (
      <tr key={idx}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{balance}</td>
      </tr>
    );
  });

  return (
    <Layout>
      <strong>Account Details</strong>
      <Divider margins={10} />

      <Table striped highlightOnHover>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </table>
      </Table>
    </Layout>
  );
};

export default Acccount;
