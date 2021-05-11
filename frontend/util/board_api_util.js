export const fetchBoards = userId => (
    $.ajax({
        method: 'GET',
        url:`/api/boards`,
        data: { user_id: userId }
    })
);

export const fetchBoard = boardId => (
    $.ajax({
        method: 'GET',
        url:`/api/boards/${boardId}`
    })
);

export const createBoard = board => (
    $.ajax({
        method: 'POST',
        url:`/api/boards`,
        data: board
    })
);

export const destroyBoard = board => (
    $.ajax({
        method: 'DELETE',
        url:`/api/boards/${board.id}`
    })
)