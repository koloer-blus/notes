import * as React from "react";
import { useMutation } from "react-query";
import * as api from "./api";

const RepoForm: React.FC = () => {
  const nameRef = React.useRef(null as any);
  const idRef = React.useRef(null as any);

  const mutation = useMutation((newInfo) => api.postRepoInfo(newInfo), {
    onSuccess: () => alert("success"),
    onError: () => alert("❗error")
  });

  const submitForm = () => {
    const name = nameRef.current.value;
    const id = idRef.current.value;
    mutation.mutate({ name, id } as any);
  };
  return (
    <React.Fragment>
      <h3>Repo Form (mutation)</h3>
      <label htmlFor="name">name: </label>
      <input name="name" ref={nameRef}></input>
      <label htmlFor="id">repo Id: </label>
      <input name="id" ref={idRef}></input>
      <button onClick={submitForm}>Submit</button>
    </React.Fragment>
  );
};

export default RepoForm;
