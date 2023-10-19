import React, { useState, useEffect } from "react";
import { useAddLinkMutation } from "../app/apiSlice";

function EditLinkForm() {
  const [submitLink, submitLinkResponse] = useAddLinkMutation();
  const [link, setLink] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLink({ name, link });
  };
  useEffect(() => {
    if (submitLinkResponse.isSuccess) {
      setLink("");
      setName("");
    }
  }, [submitLinkResponse.isSuccess]);

  const handleLinkChange = (event) => {
    const data = event.target.value;
    setLink(data);
  };

  const handleNameChange = (event) => {
    const data = event.target.value;
    setName(data);
  };

  let isDisabled = false;
  if (typeof rating == "string") {
    isDisabled = true;
  }

  return (
    <div className="container">
      <div className="row gx-5">
        <div className="col">
          <div className="">
            <div className="card ">
              <div className="card-body">
                <p className="h4">Enter Link</p>
                <form onSubmit={handleSubmit} id="review-form">
                  <div className="">
                    <input
                      className="form-control"
                      onChange={handleNameChange}
                      placeholder="Name"
                      name="review"
                      id="review"
                      value={name}
                    ></input>
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      onChange={handleLinkChange}
                      placeholder="Copy & paste URL here"
                      name="link"
                      id="link"
                      type="url"
                      value={link}
                    ></input>
                  </div>
                  <div className="mb-3">
                    <button disabled={isDisabled} className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditLinkForm;
