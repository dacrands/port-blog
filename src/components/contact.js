import React from "react";
import { navigateTo } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <section className="contact">
        <div className="container">
        
         <header className="contact__title">
          <div className="">
          <h1>Contact</h1>
          </div>        
          {/* <h3>Get in touch</h3> */}
        </header>
        <div className="contact__form">
        <form
        className="form"
          name="contact"
          method="post"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <p className="form__item">
            <label>
              Your name:<br />
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
          </p>
          <p className="form__item">
            <label>
              Your email:<br />
              <input type="email" name="email" onChange={this.handleChange} />
            </label>
          </p>
          <p className="form__item">
            <label>
              Message:<br />
              <textarea rows="10" cols="30" name="message" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button className="button" type="submit">Send</button>
          </p>
        </form>
        </div>        
        </div>        
      </section>
    );
  }
}