var currentDate = new Date(),
   		year = currentDate.getFullYear(),
        month = currentDate.getMonth() + 1,
        day = currentDate.getDay(),
        date = currentDate.getDate();
var currentDay = "日一二三四五六".charAt(day);
document.getElementById("topDate").innerText = year + '年' + month + '月' + date + '日';