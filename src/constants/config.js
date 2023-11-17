//API_NOTIFICATION_MESSAGES
export const API_NOTIFICATION_MESSAGES ={
    loading: {
        title: 'Loading...',
        message: 'Data is being loaded, Please wait'
    },
    success: {
        title: 'sucess',
        message: 'Data succesfully loaded'
    },
    responseFailure: {
        title: 'Error',
        message: 'An error occurred while fetching response from the server, Please try again'
    },
    requestFailure:{
        title: 'Error',
        message: 'An error occured while parsing request data'
    }, 
    networkError:{
        title:'error',
        message: 'unable to connect with the server'
    }
}

//API SERVICE CALL
//SAMPLE SERVICE CALL: { url: '/', method: 'POST/GET/PUT/DELETE' params: true/false, query: true/false }
export const SERVICE_URLS = {
    userSignup: { url: '/signup', method: 'POST' }
}




