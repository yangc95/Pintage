export const fetchBoards = () => (
    $.ajax({
        method: 'GET',
        url:'/api/boards'
    })
);