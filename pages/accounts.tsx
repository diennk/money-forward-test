import { Button, Divider, Group, Input } from "@mantine/core";
import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { ChangeEvent } from "react";
import Layout from "../components/Layout";
import { useNotifications } from "@mantine/notifications";
import { getUser } from "../services/accountService";
import { useEffect } from "react";

let userId: string | undefined = undefined;
const Accounts: NextPage = () => {
  const notifications = useNotifications();

  useEffect(() => {
    return () => {
      userId = undefined;
    };
  }, []);
  const router = useRouter();
  const change = (e: ChangeEvent<HTMLInputElement>) => {
    userId = e.currentTarget.value;
    //console.log(userId);
  };

  const notify = (message: string) => {
    notifications.showNotification({
      message,
      color: "red",
    });
  };
  const submit = () => {
    if (!userId) notify("Invalid input!");
    else {
      getUser(userId, (data) => {
        //console.log(data);
        if (data) router.push(`/account/${userId}`);
        else notify("User is not exsit.");
      });
    }
  };
  return (
    <Layout>
      <strong>Search Account</strong>
      <Divider margins={10} />
      <div>
        <Group>
          <Input placeholder="Input user id here" onChange={change} />
          <Button onClick={submit} type="button">
            Submit
          </Button>
        </Group>
      </div>
    </Layout>
  );
};

export default Accounts;
