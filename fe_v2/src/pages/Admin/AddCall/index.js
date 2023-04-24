import React from "react";
import Button from "../../../component/Button";
import Axios from "axios";

const AddCall = () => {
  const [inforCall, setInforCall] = React.useState({
    answeredCalls: "",
    missedCalls: "",
    abandonedCalls: "",
    shortAbandonedCalls: "",
    voicemail: "",
    month: "",
  });

  const addCall = (e) => {
    Axios.post(`${process.env.REACT_APP_API}/call/addCall`, inforCall)
      .then((res) => {
        alert("Thêm call thành công");
        window.location.href = "/admin";
      })
      .catch((err) => {
        console.log("abc");
      });
  };

  const button = [
    {
      name: "Thêm Call",
      type: 1,
      onClick: () => addCall(),
    },
    {
      name: "Hủy",
      type: 2,
      onClick: () => {
        window.location.href = "/admin";
      },
    },
  ];

  return (
    <div class="input__container">
      <div className="input__label__container">
        <label class="input__label">Answered Calls</label>
        <input
          placeholder="Nhập Answered Calls"
          class="input"
          name="answeredCalls"
          type="number"
          value={inforCall.answeredCalls}
          onChange={(e) =>
            setInforCall({ ...inforCall, answeredCalls: e.target.value })
          }
        ></input>
      </div>

      <div className="input__label__container">
        <label class="input__label">Missed Calls</label>
        <input
          placeholder="Nhập Missed Calls"
          class="input"
          name="missedCalls"
          type="number"
          value={inforCall.missedCalls}
          onChange={(e) =>
            setInforCall({ ...inforCall, missedCalls: e.target.value })
          }
        ></input>
      </div>

      <div className="input__label__container">
        <label class="input__label">Abandoned Calls</label>
        <input
          placeholder="Nhập Abandoned Calls"
          class="input"
          name="abandonedCalls"
          type="number"
          value={inforCall.abandonedCalls}
          onChange={(e) =>
            setInforCall({ ...inforCall, abandonedCalls: e.target.value })
          }
        ></input>
      </div>

      <div className="input__label__container">
        <label class="input__label">Short Abandoned Calls</label>
        <input
          placeholder="Nhập Short Abandoned Calls"
          class="input"
          name="shortAbandonedCalls"
          type="number"
          value={inforCall.shortAbandonedCalls}
          onChange={(e) =>
            setInforCall({ ...inforCall, shortAbandonedCalls: e.target.value })
          }
        ></input>
      </div>

      <div className="input__label__container">
        <label class="input__label">Voicemail</label>
        <input
          placeholder="Nhập Voicemail"
          class="input"
          name="voicemail"
          type="number"
          value={inforCall.voicemail}
          onChange={(e) =>
            setInforCall({ ...inforCall, voicemail: e.target.value })
          }
        ></input>
      </div>

      <div className="input__label__container">
        <label class="input__label">Month</label>
        <input
          placeholder="Nhập Month"
          class="input"
          name="month"
          type="number"
          value={inforCall.month}
          onChange={(e) =>
            setInforCall({ ...inforCall, month: e.target.value })
          }
        ></input>
      </div>

      <div style={{ margin: "20px 0 0 -20px" }}>
        {button.map((item) => {
          return (
            <Button text={item.name} type={item.type} onClick={item.onClick} />
          );
        })}
      </div>
    </div>
  );
};

export default AddCall;
