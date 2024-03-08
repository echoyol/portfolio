import { useState } from 'react'
import emailjs from '@emailjs/browser'

const EmailSection = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const serviceId = 'service_igl1eqs'
  const templateId = 'template_695kmcn'
  const publicKey = '7fEr-_m-GAxojAiqm'

  const handleSubmit = (e) => {
    e.preventDefault()

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Yan',
      message: message,
    }

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email set successfully', response)
        setName('')
        setEmail('')
        setMessage('')
      })
      .catch((err) => {
        console.log('Error sending email', err)
      })
  }

  return (
    <section
      className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'
      id='contact'
    >
      <div>
        <h5 className='text-xl font-bold text-white my-2'>
          Let&apos;s Connect
        </h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
      </div>
      <div>
        <form
          className='flex flex-col '
          onSubmit={handleSubmit}
        >
          <div className='mb-6'>
            <label
              htmlFor='name'
              type='text'
              className='text-white block mb-2 text-sm font-medium'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              required
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='John'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='email'
              type='email'
              className='text-white block mb-2 text-sm font-medium'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              required
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='john@outlook.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='mb-6'>
            <label
              htmlFor='message'
              className='text-white block mb-2  font-medium'
            >
              Message
            </label>
            <textarea
              name='message'
              id='message'
              required
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder="Let's talk about..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 rounded-lg w-full'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default EmailSection
