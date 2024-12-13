import {
  MakeGenerics,
  Navigate,
  ReactLocation,
  Route,
} from "@tanstack/react-location";
import { UsersPage } from "./pages/UsersPage/UsersPage";
import { UserInfoPage } from "./pages/UserInfoPage/UserInfoPage";

export type LocationGenerics = MakeGenerics<{
  Params: {
    userId: string;
  };
}>;

export const location = new ReactLocation<LocationGenerics>();

export const routes: Route<LocationGenerics>[] = [
  {
    id: "redirect-to-users",
    path: "/",
    element: <Navigate to="/users" replace />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: '/user/:userId',
    element: <UserInfoPage/>
  }
];
