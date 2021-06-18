export const createPinBoard = (pinId, boardId) => (
    $.ajax({
        method: 'POST',
        url:`/api/pinboards`,
        data: board
    })
)