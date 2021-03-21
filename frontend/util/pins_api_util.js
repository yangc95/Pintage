export const fetchPins = () => (
    $.ajax({
        method: 'GET',
        url:'/api/pins'
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