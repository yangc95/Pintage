export const fetchBoards = boardId => (
    $.ajax({
        method: 'GET',
        url:`/api/boards/${boardId}`
    })
);