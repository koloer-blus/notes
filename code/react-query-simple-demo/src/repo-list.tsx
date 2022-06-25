import * as React from "react";
import * as api from "./api";
import { useQueries } from "react-query";
import RepoCard from "./repo-card";

interface IProps {
  repoIds: number[];
}

const RepoList: React.FC<IProps> = (props) => {
  const { repoIds } = props;
  const repoQueries = useQueries(
    repoIds.map((id) => {
      return {
        queryKey: ["repo-item", id],
        queryFn: () => api.getRepoInfo(id)
      };
    })
  );
  return (
    <div>
      <h3>Repo List</h3>
      {repoQueries.map((item, index) => (
        <RepoCard
          repo={item}
          listItem={true}
          repoId={repoIds[index]}
          key={repoIds[index]}
        />
      ))}
    </div>
  );
};

export default RepoList;
