import { LoginProvider } from "./providers/loginPorvider";
import { RoutesMain } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <LoginProvider>
        <RoutesMain />
      </LoginProvider>
    </>
  );
};
