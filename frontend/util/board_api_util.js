export const fetchBoards = userId => (
    $.ajax({
        method: 'GET',
        url:`/api/boards/${userId}`
    })
);