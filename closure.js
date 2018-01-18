const prepareMessage = message => {

  const checkMessage = message => {
    const failMessage = 'I’m sorry, but your  message is not valid'
    const transformMessage = message => {
      return message.toUpperCase()
    }
    return transformMessage(message || failMessage)
  }

  return checkMessage(message)
}

const result = prepareMessage('Hi! Whatup?')
console.log(result)

