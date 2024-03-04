import {useState} from 'react'

import toast, {Toaster} from 'react-hot-toast'
import {AiOutlineHome} from 'react-icons/ai'
import {TiDeviceTablet} from 'react-icons/ti'
import {BsEnvelope} from 'react-icons/bs'
import {IoIosCheckmarkCircle} from 'react-icons/io'

import Header from '../Header'
import Footer from '../Footer'

import {
  ContactUsPageContainer,
  ContactUsContainer,
  ContactUsBannerBgContainer,
  ContactUsBannerHeading,
  ContactUsResponsiveContainer,
  ContactUsLocationImage,
  ContactUsAddressAndForm,
  ContactUsForm,
  ContactUsFormHeading,
  ContactUsFormMessageContainer,
  ContactUsFormMessageInput,
  ContactUsFormLabel,
  ContactUsFormNameContainer,
  ContactUsFormNameInput,
  ContactUsFormEmailContainer,
  ContactUsFormEmailInput,
  ContactUsFormSubjectContainer,
  ContactUsFormSubjectInput,
  ContactUsFormSubmitBtn,
  ContactUsContactOptionsContainer,
  ContactUsContactOptionsIconAndInfoContainer,
  ContactUsContactOptionsInfoContainer,
  ContactUsContactOptionsInfoHeading,
  ContactUsContactOptionsInfoDescription,
} from './styledComponents'

const contactOptionList = [
  {
    id: 1,
    icon: <AiOutlineHome size={30} color="#ffffff" />,
    topInfo: 'Buttonwood, California.',
    bottomInfo: 'Rosemead, CA 91770',
  },
  {
    id: 2,
    icon: <TiDeviceTablet size={30} color="#ffffff" />,
    topInfo: '+1 253 565 2365',
    bottomInfo: 'Mon to Fri 9am to 6pm',
  },
  {
    id: 3,
    icon: <BsEnvelope size={30} color="#ffffff" />,
    topInfo: 'support@colorlib.com',
    bottomInfo: 'Send us your query anytime!',
  },
]

const ContactUs = () => {
  const [message, setMessage] = useState('')
  const [isMessageVisible, setMessageVisibility] = useState(false)

  const [nameInput, setName] = useState('')
  const [isNameErrMsgVisible, setNameErrMsgVisibility] = useState(false)

  const [email, setEmail] = useState('')
  const [isEmailErrMsgVisible, setEmailErrMsgVisibility] = useState(false)

  const [subject, setSubject] = useState('')
  const [isSubjectErrMsgVisible, setSubjectErrMsgVisibility] = useState(false)

  const notify = () =>
    toast('Your mail sent successfully.', {
      position: 'bottom-center',
      style: {
        background: '#07bc0c',
        color: '#ffffff',
      },
      icon: <IoIosCheckmarkCircle size={20} />,
    })

  const addMessageText = event => {
    setMessage(event.target.value)
    if (message.length > 50) {
      setMessageVisibility(false)
    }
  }
  const onBlurMessageError = () => {
    if (message.length < 50) {
      setMessageVisibility(true)
    } else {
      setMessageVisibility(false)
    }
  }

  const addNameInput = event => {
    setName(event.target.value)
    if (nameInput.length > 2) {
      setNameErrMsgVisibility(false)
    } else {
      setNameErrMsgVisibility(true)
    }
  }
  const onBlurNameError = () => {
    if (nameInput.length < 3) {
      setNameErrMsgVisibility(true)
    } else {
      setNameErrMsgVisibility(false)
    }
  }

  const addEmailInput = event => {
    setEmail(event.target.value)

    if (email.includes('@') && email.includes('.')) {
      setEmailErrMsgVisibility(false)
    }
  }

  const onBlurEmailError = () => {
    setEmailErrMsgVisibility(true)
    if (email.includes('@') && email.includes('.')) {
      setEmailErrMsgVisibility(false)
    }
  }

  const addSubjectInput = event => {
    setSubject(event.target.value)
    if (subject.length > 4) {
      setSubjectErrMsgVisibility(false)
    } else {
      setSubjectErrMsgVisibility(true)
    }
  }

  const onBlurSubjectError = () => {
    setSubjectErrMsgVisibility(true)
    if (subject.length < 4) {
      setSubjectErrMsgVisibility(true)
    } else {
      setSubjectErrMsgVisibility(false)
    }
  }

  const onSubmitGetInTouchForm = event => {
    event.preventDefault()
    const formNotNullValues =
      message !== '' && nameInput !== '' && email !== '' && subject !== ''
    const formValidationsStatus =
      !isMessageVisible &&
      !isEmailErrMsgVisible &&
      !isNameErrMsgVisible &&
      !isSubjectErrMsgVisible
    if (formNotNullValues && formValidationsStatus) {
      setMessage('')
      setEmail('')
      setName('')
      setSubject('')
      notify()
    }
  }

  const renderContactUsBannerContainer = () => (
    <ContactUsBannerBgContainer>
      <ContactUsBannerHeading>Contact Us</ContactUsBannerHeading>
    </ContactUsBannerBgContainer>
  )

  const renderMessageInputContainer = () => (
    <ContactUsFormMessageContainer>
      <ContactUsFormMessageInput
        cols="30"
        rows="9"
        placeholder="Enter Message"
        onChange={addMessageText}
        value={message}
        onBlur={onBlurMessageError}
      />
      {isMessageVisible && (
        <ContactUsFormLabel htmlFor="message">
          {message.length === 0
            ? 'um...yea, you have to write something to send this form.'
            : 'thats all? really?'}
        </ContactUsFormLabel>
      )}
    </ContactUsFormMessageContainer>
  )

  const renderNameInputContainer = () => (
    <ContactUsFormNameContainer>
      <ContactUsFormNameInput
        type="text"
        placeholder="Enter your name"
        id="name"
        value={nameInput}
        onChange={addNameInput}
        onBlur={onBlurNameError}
      />
      {isNameErrMsgVisible && (
        <ContactUsFormLabel htmlFor="name">
          {nameInput.length === 0
            ? "come on, you have a name, don't you?"
            : 'your name must consist of at least 3 characters'}
        </ContactUsFormLabel>
      )}
    </ContactUsFormNameContainer>
  )

  const renderEmailInputContainer = () => (
    <ContactUsFormEmailContainer>
      <ContactUsFormEmailInput
        type="email"
        placeholder="Enter email address"
        id="email"
        value={email}
        onChange={addEmailInput}
        onBlur={onBlurEmailError}
      />
      {isEmailErrMsgVisible && (
        <ContactUsFormLabel htmlFor="email">
          {email.length === 0
            ? 'no email, no message'
            : 'Please enter a valid email address.'}
        </ContactUsFormLabel>
      )}
    </ContactUsFormEmailContainer>
  )

  const renderSubjectInputContainer = () => (
    <ContactUsFormSubjectContainer>
      <ContactUsFormSubjectInput
        type="text"
        placeholder="Enter Subject"
        id="subject"
        value={subject}
        onChange={addSubjectInput}
        onBlur={onBlurSubjectError}
      />
      {isSubjectErrMsgVisible && (
        <ContactUsFormLabel htmlFor="subject">
          {subject.length === 0
            ? "come on, you have a subject, don't you?"
            : 'your subject must consist of at least 4 characters'}
        </ContactUsFormLabel>
      )}
    </ContactUsFormSubjectContainer>
  )

  const renderFormContainer = () => (
    <ContactUsForm onSubmit={onSubmitGetInTouchForm}>
      {renderMessageInputContainer()}
      {renderNameInputContainer()}
      {renderEmailInputContainer()}
      {renderSubjectInputContainer()}
      <ContactUsFormSubmitBtn type="submit">SEND</ContactUsFormSubmitBtn>
    </ContactUsForm>
  )

  const renderContactOptionsContainer = () => (
    <ContactUsContactOptionsContainer>
      {contactOptionList.map(eachItem => (
        <ContactUsContactOptionsIconAndInfoContainer key={eachItem.id}>
          {eachItem.icon}
          <ContactUsContactOptionsInfoContainer>
            <ContactUsContactOptionsInfoHeading>
              {eachItem.topInfo}
            </ContactUsContactOptionsInfoHeading>
            <ContactUsContactOptionsInfoDescription>
              {eachItem.bottomInfo}
            </ContactUsContactOptionsInfoDescription>
          </ContactUsContactOptionsInfoContainer>
        </ContactUsContactOptionsIconAndInfoContainer>
      ))}
    </ContactUsContactOptionsContainer>
  )

  return (
    <ContactUsPageContainer>
      <Header />
      <ContactUsContainer>
        {renderContactUsBannerContainer()}
        <ContactUsResponsiveContainer>
          <ContactUsLocationImage
            src="https://streetsmn.s3.us-east-2.amazonaws.com/wp-content/uploads/2013/10/Screen-shot-2013-10-27-at-10.51.49-PM.png"
            alt="google-map-location-img"
          />
          <ContactUsFormHeading>Get in Touch</ContactUsFormHeading>
          <ContactUsAddressAndForm>
            {renderFormContainer()}
            {renderContactOptionsContainer()}
          </ContactUsAddressAndForm>
          <Footer />
          <Toaster />
        </ContactUsResponsiveContainer>
      </ContactUsContainer>
    </ContactUsPageContainer>
  )
}

export default ContactUs
