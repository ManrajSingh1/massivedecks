import { Configured } from "./lobby-event/configured";
import { ConnectionChanged } from "./lobby-event/connection-changed";
import { PresenceChanged } from "./lobby-event/presence-changed";
import { PrivilegeChanged } from "./lobby-event/privilege-changed";

export type LobbyEvent =
  | Configured
  | ConnectionChanged
  | PresenceChanged
  | PrivilegeChanged;
