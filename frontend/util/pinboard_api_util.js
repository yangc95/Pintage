export const createPinBoard = (pinboard) => (
    $.ajax({
        method: 'POST',
        url:`/api/pin_boards`,
        data: pinboard
    })
)