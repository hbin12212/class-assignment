const getTimeStamp = (birth) => {
    var date = birth;
    var year = "20" + date.slice(0, 2);
    var month = date.slice(2, 4);
    var day = date.slice(4, 6);
    var newDate = new Date(year + "-" + month + "-" + day);
    var timeStamp = newDate.getTime();
    return timeStamp / 1000;
};

export { getTimeStamp };
