import * as React from "react";
import * as api from "./api";
import { useQuery } from "react-query";
import RepoCard from "./repo-card";

interface IProps {
  repoId: number;
}

const ReopInfo: React.FC<IProps> = (props) => {
  const { repoId } = props;
  const repo = useQuery(["repo-info", repoId], () => api.getRepoInfo(repoId));
  return (
    <div>
      <h3>Repo Info Card</h3>
      <RepoCard repo={repo} repoId={repoId} />
    </div>
  );
};

export default ReopInfo;
