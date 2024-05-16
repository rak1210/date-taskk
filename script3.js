var parent_div = document.createElement("div");
parent_div.className = "main"

var input_date = document.createElement("input");
input_date.setAttribute("type", "date");
input_date.setAttribute("id", "dob");

var button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("class", "btn btn-primary");
button.innerHTML = "click me";
button.addEventListener("click", display_date);
parent_div.append(input_date, button);
document.body.append(parent_div);



function display_date(foo) {
    var input = document.getElementById("dob").value;
    var inputdate = new Date(input);
    var currentdate = new Date();
    console.log(`Input date: ${inputdate}, Current date:${currentdate}`);
    var millsecdiff = parseInt(currentdate.getTime()) - parseInt(inputdate.getTime())
    console.log(millsecdiff);
    var secondsdiff = Math.floor(millsecdiff / 1000);
    console.log(secondsdiff);
    var mindiff = Math.floor(secondsdiff / 60);
    console.log(mindiff);
    var hoursdiff = Math.floor(mindiff / 60);
    console.log(hoursdiff);
    var daydiff = Math.floor(hoursdiff / 24);
    console.log(daydiff);
    var yeardiff = currentdate.getFullYear() - inputdate.getFullYear();
    console.log(yeardiff);
    var monthdiff = (yeardiff * 12) + (currentdate.getMonth() - inputdate.getMonth());
    console.log(monthdiff);

    let data = document.createElement("div");
    data.innerHTML = `${"Input date:"+ inputdate}`;
    document.body.append(data);

    let datecur = document.createElement("div");
    datecur.innerHTML = `${"Current date:"+ currentdate}`;
    document.body.append(datecur);

    let data7 = document.createElement("div");
    data7.innerHTML = `${"year:"+" " + yeardiff}`;
    document.body.append(data7);

    let data6 = document.createElement("div");
    data6.innerHTML = `${"month:"+" "+monthdiff}`;
    document.body.append(data6); 

    let data5 = document.createElement("div");
    data5.innerHTML = `${"day:"+" " + daydiff}`;
    document.body.append(data5);

    let data4 = document.createElement("div");
    data4.innerHTML = `${"hours:"+" " +hoursdiff}`;
    document.body.append(data4);

    let data3 = document.createElement("div");
    data3.innerHTML = `${"min:"+" " + mindiff}`;
    document.body.append(data3);

    let data2 = document.createElement("div");
    data2.innerHTML = `${"seconds:"+" " +secondsdiff}`;
    document.body.append(data2);


    let data1 = document.createElement("div");
    data1.innerHTML = `${"millsec:"+" " + millsecdiff}`;
    document.body.append(data1);

    

    

    

    

    


}

