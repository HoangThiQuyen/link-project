import React, { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../utils/axios";
import imgLogo from "../img/logo.png";

const InputFile = () => {
  const [value, setValue] = useState("");
  const [curentLink, setCurentLink] = useState("");

  const handleSubmit = () => {
    if (!value.trim()) {
      toast.error("Vui lòng nhập link!");
      toast.clearWaitingQueue();
    } else {
      // API.postAPI({ link: value }).then(() => {
      //   API.getAPI().then((res) => {
      //     setCurentLink(res ? res.link : "");
      //     setValue("");
      //   });
      // });
      setValue("");
      toast.success('Cập nhật thành công!')
    }
  };
  useEffect(() => {
    API.getAPI().then((res) => setCurentLink(res ? res.link : ""));
  }, []);
  return (
    <div>
      <img src={imgLogo} alt="img-logo" className="img-fluid" />
      <div className="inputFile">
        <div className="inputFile-container">
          <p>
            Link hiện tại:{" "}
            <u>
              <i>{curentLink}</i>
            </u>
          </p>
          <Input
            value={value}
            type="text"
            placeholder="Nhập link tại đây ..."
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={handleSubmit}>Save</Button>
        </div>

        <ToastContainer limit={1} autoClose={1800} />
      </div>
    </div>
  );
};

export default InputFile;
