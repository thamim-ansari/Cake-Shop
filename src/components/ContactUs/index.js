import {useState} from 'react'

import {AiOutlineHome} from 'react-icons/ai'
import {TiDeviceTablet} from 'react-icons/ti'
import {BsEnvelope} from 'react-icons/bs'

import Header from '../Header'
import Footer from '../Footer'

import {
  ContactUsPageContainer,
  ContactUsPageMainContainer,
  ContactUsPageBannerBgContainer,
  ContactUsPageBannerHeading,
  ContactUsPageResponsiveContainer,
  ContactUsPageLocationImage,
  ContactUsPageAddressAndForm,
  ContactUsPageForm,
  ContactUsPageFormHeading,
  ContactUsPageFormMessageContainer,
  ContactUsPageFormMessageInput,
  ContactUsPageFormLabel,
  ContactUsPageFormNameContainer,
  ContactUsPageFormNameInput,
  ContactUsPageFormEmailContainer,
  ContactUsPageFormEmailInput,
  ContactUsPageFormSubjectContainer,
  ContactUsPageFormSubjectInput,
  ContactUsPageFormSubmitBtn,
  ContactUsPageContactOptionsContainer,
  ContactUsPageContactOptionsIconAndInfoContainer,
  ContactUsPageContactOptionsInfoContainer,
  ContactUsPageContactOptionsInfoHeading,
  ContactUsPageContactOptionsInfoDescription,
} from './styledComponents'

const ContactUs = () => {
  const [message, setMessage] = useState('')
  const [isMessageVisible, setMessageVisibility] = useState(false)

  const [nameInput, setName] = useState('')
  const [isNameErrMsgVisible, setNameErrMsgVisibility] = useState(false)

  const [email, setEmail] = useState('')
  const [isEmailErrMsgVisible, setEmailErrMsgVisibility] = useState(false)

  const [subject, setSubject] = useState('')
  const [isSubjectErrMsgVisible, setSubjectErrMsgVisibility] = useState(false)

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

  const renderCakePageBannerContainer = () => (
    <ContactUsPageBannerBgContainer>
      <ContactUsPageBannerHeading>Contact Us</ContactUsPageBannerHeading>
    </ContactUsPageBannerBgContainer>
  )

  const onSubmitForm = event => {
    event.preventDefault()
    setMessage('')
    setEmail('')
    setName('')
    setSubject('')
  }
  const renderFormContainer = () => (
    <ContactUsPageForm onSubmit={onSubmitForm}>
      <ContactUsPageFormMessageContainer>
        <ContactUsPageFormMessageInput
          cols="30"
          rows="9"
          placeholder="Enter Message"
          onChange={addMessageText}
          value={message}
          onBlur={onBlurMessageError}
        />
        {isMessageVisible && (
          <ContactUsPageFormLabel htmlFor="message">
            {message.length === 0
              ? 'um...yea, you have to write something to send this form.'
              : 'thats all? really?'}
          </ContactUsPageFormLabel>
        )}
      </ContactUsPageFormMessageContainer>
      <ContactUsPageFormNameContainer>
        <ContactUsPageFormNameInput
          type="text"
          placeholder="Enter your name"
          id="name"
          value={nameInput}
          onChange={addNameInput}
          onBlur={onBlurNameError}
        />
        {isNameErrMsgVisible && (
          <ContactUsPageFormLabel htmlFor="name">
            {nameInput.length === 0
              ? "come on, you have a name, don't you?"
              : 'your name must consist of at least 3 characters'}
          </ContactUsPageFormLabel>
        )}
      </ContactUsPageFormNameContainer>
      <ContactUsPageFormEmailContainer>
        <ContactUsPageFormEmailInput
          type="email"
          placeholder="Enter email address"
          id="email"
          value={email}
          onChange={addEmailInput}
          onBlur={onBlurEmailError}
        />
        {isEmailErrMsgVisible && (
          <ContactUsPageFormLabel htmlFor="email">
            {email.length === 0
              ? 'no email, no message'
              : 'Please enter a valid email address.'}
          </ContactUsPageFormLabel>
        )}
      </ContactUsPageFormEmailContainer>
      <ContactUsPageFormSubjectContainer>
        <ContactUsPageFormSubjectInput
          type="text"
          placeholder="Enter Subject"
          id="subject"
          value={subject}
          onChange={addSubjectInput}
          onBlur={onBlurSubjectError}
        />
        {isSubjectErrMsgVisible && (
          <ContactUsPageFormLabel htmlFor="subject">
            {subject.length === 0
              ? "come on, you have a subject, don't you?"
              : 'your subject must consist of at least 4 characters'}
          </ContactUsPageFormLabel>
        )}
      </ContactUsPageFormSubjectContainer>
      <ContactUsPageFormSubmitBtn type="submit">
        SEND
      </ContactUsPageFormSubmitBtn>
    </ContactUsPageForm>
  )

  const renderContactOptionsContainer = () => (
    <ContactUsPageContactOptionsContainer>
      <ContactUsPageContactOptionsIconAndInfoContainer>
        <AiOutlineHome size={30} color="#ffffff" />
        <ContactUsPageContactOptionsInfoContainer>
          <ContactUsPageContactOptionsInfoHeading>
            Buttonwood, California.
          </ContactUsPageContactOptionsInfoHeading>
          <ContactUsPageContactOptionsInfoDescription>
            Rosemead, CA 91770
          </ContactUsPageContactOptionsInfoDescription>
        </ContactUsPageContactOptionsInfoContainer>
      </ContactUsPageContactOptionsIconAndInfoContainer>
      <ContactUsPageContactOptionsIconAndInfoContainer>
        <TiDeviceTablet size={30} color="#ffffff" />
        <ContactUsPageContactOptionsInfoContainer>
          <ContactUsPageContactOptionsInfoHeading>
            +1 253 565 2365
          </ContactUsPageContactOptionsInfoHeading>
          <ContactUsPageContactOptionsInfoDescription>
            Mon to Fri 9am to 6pm
          </ContactUsPageContactOptionsInfoDescription>
        </ContactUsPageContactOptionsInfoContainer>
      </ContactUsPageContactOptionsIconAndInfoContainer>
      <ContactUsPageContactOptionsIconAndInfoContainer>
        <BsEnvelope size={30} color="#ffffff" />
        <ContactUsPageContactOptionsInfoContainer>
          <ContactUsPageContactOptionsInfoHeading>
            support@colorlib.com
          </ContactUsPageContactOptionsInfoHeading>
          <ContactUsPageContactOptionsInfoDescription>
            Send us your query anytime!
          </ContactUsPageContactOptionsInfoDescription>
        </ContactUsPageContactOptionsInfoContainer>
      </ContactUsPageContactOptionsIconAndInfoContainer>
    </ContactUsPageContactOptionsContainer>
  )
  return (
    <ContactUsPageContainer>
      <Header />
      <ContactUsPageMainContainer>
        {renderCakePageBannerContainer()}
        <ContactUsPageResponsiveContainer>
          <ContactUsPageLocationImage
            src="https://streetsmn.s3.us-east-2.amazonaws.com/wp-content/uploads/2013/10/Screen-shot-2013-10-27-at-10.51.49-PM.png"
            alt="google-map-location-img"
          />
          <ContactUsPageFormHeading id="message">
            Get in Touch
          </ContactUsPageFormHeading>
          <ContactUsPageAddressAndForm>
            {renderFormContainer()}
            {renderContactOptionsContainer()}
          </ContactUsPageAddressAndForm>
          <Footer />
        </ContactUsPageResponsiveContainer>
      </ContactUsPageMainContainer>
    </ContactUsPageContainer>
  )
}

export default ContactUs
