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

  componentDidMount() {
    const {
      nameInput,
      nameLabel,
      emailInput,
      emailLabel,
    } = this.refs

    nameInput.addEventListener('focus', e => {
      // nameInput.classList.add('form__item--active')
      nameLabel.classList.add('label--move', 'form__item--active')
    })
    nameInput.addEventListener('blur', e => {
      if (e.target.value === "") {
        nameLabel.classList.remove('label--move', 'form__item--active')
        return
      }
    })

    emailInput.addEventListener('focus', e => {
      // emailInput.classList.add('form__item--active')
      emailLabel.classList.add('label--move', 'form__item--active')
    })
    emailInput.addEventListener('blur', e => {
      if (e.target.value === "") {
        emailLabel.classList.remove('label--move', 'form__item--active')
        return
      }
    })
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
          <div className="contact__content">
          <header className="contact__title">         
              <h1>Say hello!</h1>  
              <p>Need a website? 
                Like to talk about things web development?
                Intense fan of 90s music?
                Then let's get in touch!
                </p>                      
          </header>
          </div>          
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
                <input ref="nameInput" type="text" name="name" onChange={this.handleChange} />
                <label ref="nameLabel">Your name</label>
              </p>
              <p className="form__item">
                <input ref="emailInput" type="email" name="email" onChange={this.handleChange} />
                <label ref="emailLabel">Your email</label>
              </p>
              <p className="form__item">
                <textarea placeholder="write something nice..." rows="5" cols="30" name="message" onChange={this.handleChange} />
              </p>
              <p>
                <button className="button" type="submit">Send</button>
              </p>
            </form>
          </div>        
      </section>
    );
  }
}