import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const fromSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone}. email is ${data.email}. Here is what I want to say ${data.msg}`
    );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <form onSubmit={fromSubmit}>
                <div class="form-group">
                  <label for="exampleInputFullName1">Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputFullName1"
                    name="fullname"
                    value={data.fullname}
                    onChange={InputEvent}
                    placeholder="Enter your name"
                  />
                </div>

                <div class="form-group">
                  <label for="exampleInputPhone1">Phone</label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInputPhone1"
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                    placeholder="Enter your mobile number"
                  />
                </div>

                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputTextare1" className="form-label">
                    Example textarea
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleInputTextare1"
                    rows="3"
                    name="msg"
                    value={data.msg}
                    onChange={InputEvent}
                    placeholder="Message"
                  ></textarea>
                </div>
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" class="btn btn-outline-primary">
                  Submit
                </button>
              </form>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
