import "./styles.css";
import { QueryClient, QueryClientProvider } from "react-query";
import RepoInfo from "./repo-info";
import RepoList from "./repo-list";
import RepoForm from "./repo-form";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();

const repoInfoList = [207645073, 207645080, 207645084, 207645086, 207645053];

const repoInfoId = 207645083;

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RepoForm />
      <RepoInfo repoId={repoInfoId} />
      <RepoList repoIds={repoInfoList} />
    </QueryClientProvider>
  );
}
