import React, { useState, ChangeEvent } from 'react'
import axios from 'axios';

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export const Contact = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>, type: string) => {
    const { target: { value } } = e;
    if (type === 'name') {
      return setName(value);
    } else if (type === 'email') {
      return setEmail(value);
    }
    setContent(value)
  }
  const submitForm = async () => {
    if (name && email && content && emailRegex.test(email)) {
      try {
        await axios.post('https://ll16g93wte.execute-api.us-east-1.amazonaws.com/production/contact', {
          name,
          email,
          content
        }, { headers: { 'Content-Type': 'application/json' }})
      } catch(err) {
        console.log(err)
      }
    }
  }
  return (
  <section className="section-color dark contact" id="contact">
    <div className="container">
      <div
        className="columns is-multiline"
        data-aos="fade-in-up"
        data-aos-easing="linear"
      >
        <div className="column is-12 about-me">
          <h1 className="title has-text-centered section-title">
            Get in touch
          </h1>
        </div>
        <div className="column is-8 is-offset-2">
            <div className="field">
              <label className="label">Name</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="Ex. Jane Smith"
                  name="Name"
                  onChange={e => handleChange(e, 'name')}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="email"
                  placeholder="Ex. hello@arctheme.com"
                  name="Email"
                  onChange={e => handleChange(e, 'email')}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Textarea"
                  name="Message"
                  onChange={e => handleChange(e, 'content')}
                ></textarea>
              </div>
            </div>
            <div className="field">
              <div className="control ">
                <button className="button submit-button" onClick={submitForm}>
                  Submit
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
)}
