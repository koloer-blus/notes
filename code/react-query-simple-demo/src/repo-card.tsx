import * as React from "react";
import "./styles.css";
interface IProps {
  repo: any;
  repoId: number;
  listItem?: boolean;
}

const RepoCard: React.FC<IProps> = (props) => {
  const { repo, repoId, listItem } = props;

  const info = repo?.data?.data || {
    name: "暂无数据",
    full_name: "暂无数据",
    description: "-",
    stargazers_count: 0,
    forks: 0
  };

  return (
    <div
      className="repo-card"
      style={{
        border: "1px solid #ccc",
        padding: 6,
        margin: 8,
        boxShadow: "2px 2px 3px #ccc"
      }}
    >
      <div
        style={{
          color: "#fff",
          padding: 4,
          background: "#0971F1",
          borderRadius: 2,
          boxShadow: "1px 1px 1px #ccc"
        }}
      >
        repoId: {repoId}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div
          style={{
            fontSize: 24
          }}
        >
          {info.name}
        </div>
        <div>
          <span
            style={{
              marginRight: 12
            }}
          >
            forks：{info.forks}
          </span>
          <span>starts: {info.stargazers_count}</span>
        </div>
      </div>
      {!listItem && (
        <React.Fragment>
          <div>
            <a href={info.url}>{info.full_name}</a>
          </div>
          <p>{info.description}</p>
        </React.Fragment>
      )}
    </div>
  );
};

RepoCard.defaultProps = {
  listItem: false
};

export default RepoCard;
