export const fetchPins = () => (
    $.ajax({
        method: 'GET',
        url:'/api/pins'
    })
);

//  .then(pins => {
//         this.setState({pins})
//     });