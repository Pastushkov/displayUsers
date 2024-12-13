import { useMatch } from "@tanstack/react-location";
import { LocationGenerics } from "../routes";

export const useRouteParams = (): { userId: string } => {
  const match = useMatch<LocationGenerics>();
  return match.params;
};
