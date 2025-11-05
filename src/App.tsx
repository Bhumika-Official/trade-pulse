import Layout from "./components/Layout/Layout";
import { Dashboard } from "./pages/Forex";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <Layout>
      <GlobalStyles />
      <Dashboard />
    </Layout>
  )
}

export default App;
