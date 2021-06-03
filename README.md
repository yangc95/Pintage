<h1><img src="https://user-images.githubusercontent.com/72277593/118587838-41e76700-b76b-11eb-99b6-9ce158a77b67.png" width="25" height="25" cursor="unset" /> Pintage</h1>

![GitHub repo size](https://img.shields.io/github/repo-size/yangc95/Pintage?style=for-the-badge)
![GitHub Issues](https://img.shields.io/github/issues/yangc95/Pintage?style=for-the-badge)

[Pintage live link](https://pin-tage.herokuapp.com/#/)

## Architecture and Technology

Pintage is a Pinterest clone: Built with a custom Ruby on Rails backend API with a PostgreSQL database. AWS S3 PaaS integrates with the Rails backend allowing for cloud storage and retrieval of photos. UI is composed of React frontend components and Redux for state management.

<p align="center" >
  <img src="https://user-images.githubusercontent.com/72277593/120551637-409d7780-c3c4-11eb-91d6-171896f4b0ed.gif">
</p>

## Main features

Create pins that encapture images with a title and description. Pins can be added to user-created Boards through the Board name.
On the user's profile, boards display the number of pins per board and when the board was last updated. 

To create a timeAgoInWords function, the updated time is retrieved from the database and broken down into different time measurements relative to the current time. A variable holds JavaScript's built in Date class to retrieve the current time. Conditionals then break down the time difference into respective weeks, days, hours, minutes, or seconds.

```
timeAgo(time) {
    const currentTime = new Date();
    const prevTime = new Date(time);

    let seconds = Math.floor((currentTime - prevTime) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let weeks = Math.floor(days / 7);

    let timeAgoInWords;
    if (weeks >= 1) {
      timeAgoInWords = `${weeks}w`;
    } else if (days >= 1) {
      timeAgoInWords = `${days}d`;
    } else if (hours >= 1) {
      timeAgoInWords = `${hours}h`;
    } else if (minutes >= 1) {
      timeAgoInWords = `${minutes}m`;
    } else {
      timeAgoInWords = `${seconds}s`;
    }

    return timeAgoInWords;
}
```

* Add info about mosaic layout
