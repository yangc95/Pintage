export const fetchPins = () => (
    $.ajax({
        method: 'GET',
        url:'/api/pins'
    })
);

export const fetchPin = (pinId) => (
    $.ajax({
        method: 'GET',
        url:`/api/pins/${pin.id}`
    })
);

export const createPin = (pin) => (
    $.ajax({
        method: 'POST',
        url:'/api/pins',
        data: pin,
        contentType: false,
        processData: false
    })
);
// export const fetchUserPins = userId => (
//     $.ajax({
//         method: 'GET',
//         url:'/api/pins'
//     })
// );
//  .then(pins => {
//         this.setState({pins})
//     });