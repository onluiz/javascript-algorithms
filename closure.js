const result = (function () {
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

 return {
   sayTheMessage(message) {
     const result = prepareMessage(message)
     console.log('sayTheMessage', result)
   }
 }
})()

result.sayTheMessage()

