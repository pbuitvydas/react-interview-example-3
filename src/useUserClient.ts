import React from "react";
import { UserClient } from "./UserClient";

export function useUserClient(): UserClient {
  return React.useMemo(() => new UserClient(), []);
}
