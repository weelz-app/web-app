export const getMonthName = num => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[num];
}

export const getUserAuthToken = () => {
    let token = window.sessionStorage.getItem('token')
    if (!token) token = localStorage.getItem('token')
    if (token) window.sessionStorage.setItem('token', token)
    return token ? token : ''
}

export const setUserAuthToken = token => {
    window.sessionStorage.setItem('token', token)
    localStorage.setItem('token', token)
}

export const formatDate = (date) => {
    var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString("hi-IN", options)
}

export const formatTime = (date) => {
    var options = { hour: '2-digit', minute: '2-digit' };
    return date.toLocaleTimeString('en-GB', options)
}
