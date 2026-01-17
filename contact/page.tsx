'use client'

import { useState } from 'react'
import Header from '../components/Header'
import { COMPANY_EMAIL, COMPANY_ADDRESS } from '../config/constants'
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
      const files = Array.from(e.target.files)
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      const validFiles = files.filter(file => {
        if (!allowedTypes.includes(file.type)) {
          alert(`File type ${file.type} is not allowed. Please upload images or PDF documents only.`)
          return false
        }
        return true
      })
      setAttachments(validFiles)
    }
  }

  const sanitizeInput = (input: string, maxLength: number): string => {
    return input
      .trim()
      .substring(0, maxLength)
      .replace(/[<>]/g, '') // Remove potential HTML tags
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(formData.name, 100),
      email: sanitizeInput(formData.email, 255).toLowerCase(),
      mobile: sanitizeInput(formData.mobile, 20),
      message: sanitizeInput(formData.message, 5000),
    }

    // Validate required fields
    if (!sanitizedData.name || !sanitizedData.email) {
      alert('Please fill in all required fields.')
      return
    }

    // Validate email format
    if (!validateEmail(sanitizedData.email)) {
      alert('Please enter a valid email address.')
      return
    }

    // Validate file attachments
    if (attachments.length > 5) {
      alert('Maximum 5 files allowed.')
      return
    }

    const maxFileSize = 10 * 1024 * 1024 // 10MB
    for (const file of attachments) {
      if (file.size > maxFileSize) {
        alert(`File ${file.name} exceeds maximum size of 10MB.`)
        return
      }
    }

    // Email sending disabled for now
    // TODO: Enable email sending by uncommenting the code below
    /*
    try {
      // Send email via API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData),
      })

      const data = await response.json()

      if (response.ok) {
        alert('Thank you for your inquiry! We will get back to you soon.')
        setFormData({ name: '', email: '', mobile: '', message: '' })
        setAttachments([])
      } else {
        alert(data.error || 'There was an error sending your message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error sending your message. Please try again.')
    }
    */
    
    // For now, just show success message without sending email
    console.log('Form submitted (email disabled):', sanitizedData, attachments)
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
                  For inquiries about our advanced screening solutions, including fine screening technology and high frequency screens for M Sand Plants and sugar graders, please reach out to {COMPANY_EMAIL}.
                </p>
              </div>
              
              <div className="info-box">
                <h3>Cruxtor</h3>
                <p>{COMPANY_ADDRESS}</p>
                <p>{COMPANY_EMAIL}</p>
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
