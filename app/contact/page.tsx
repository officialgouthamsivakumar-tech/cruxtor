'use client'

import { useState } from 'react'
import Header from '../components/Header'
import '../globals.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  })
  const [attachments, setAttachments] = useState<File[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments(Array.from(e.target.files))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData, attachments)
    alert('Thank you for your inquiry! We will get back to you soon.')
    setFormData({ name: '', email: '', mobile: '', message: '' })
    setAttachments([])
  }

  return (
    <div>
      <Header />

      {/* Contact Section */}
      <section className="contact">
        <div className="contact-container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">Drop us a line!</p>
          
          <div className="contact-grid">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="mobile">Mobile number</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="files">Attach Files</label>
                <div className="file-upload">
                  <input
                    type="file"
                    id="files"
                    multiple
                    onChange={handleFileChange}
                  />
                  <p>Attachments ({attachments.length})</p>
                </div>
              </div>
              
              <button type="submit" className="btn btn-submit">Send</button>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
              </p>
            </form>
            
            <div className="contact-info">
              <div className="info-box">
                <h3>MAIL US YOUR REQUIREMENT</h3>
                <p>
                  For inquiries about our advanced screening solutions, including fine screening technology and high frequency screens for M Sand Plants and sugar graders, please reach out to SALES@CRUXTOR.COM.
                </p>
              </div>
              
              <div className="info-box">
                <h3>Cruxtor</h3>
                <p>606 Rama Equator, Morewadi, :Pimpri, Pune, MH 411018</p>
                <p>sales@cruxtor.com</p>
              </div>
              
              <div className="info-box">
                <h3>Hours</h3>
                <table className="hours-table">
                  <thead>
                    <tr>
                      <th>Day</th>
                      <th>Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mon</td>
                      <td>09:00 am – 05:00 pm</td>
                    </tr>
                    <tr>
                      <td>Tue</td>
                      <td>09:00 am – 05:00 pm</td>
                    </tr>
                    <tr>
                      <td>Wed</td>
                      <td>09:00 am – 05:00 pm</td>
                    </tr>
                    <tr>
                      <td>Thu</td>
                      <td>09:00 am – 05:00 pm</td>
                    </tr>
                    <tr>
                      <td>Fri</td>
                      <td>09:00 am – 05:00 pm</td>
                    </tr>
                    <tr>
                      <td>Sat</td>
                      <td>Closed</td>
                    </tr>
                    <tr>
                      <td>Sun</td>
                      <td>Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
