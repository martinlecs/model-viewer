import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";

setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.4.0/dist/"
);

import { WindowLayout } from "./components/Window";
import { MainLayoutRoute } from "./components/MainLayout";
import { TopBar } from "./components/TopBar";

const Layout = () => {
  return (
    <>
      <MainLayoutRoute></MainLayoutRoute>
    </>
  );
};

function App() {
  return (
    <WindowLayout>
      <TopBar></TopBar>
      <Layout></Layout>
    </WindowLayout>
  );
}

export default App;
