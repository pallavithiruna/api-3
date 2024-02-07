v=fetch("https://api.openbrewerydb.org/v1/breweries")
.then(
    res=>(res.json())
)
.then(
    data=>
    {
        console.log(data);
        console.log(data[0].country)
        console.log(data[0].website_url)

        document.getElementById("data0").innerHTML=data[0].country;
        document.getElementById("data01").innerHTML=data[0].state;
        document.getElementById("data02").innerHTML=data[0].website_url;

        document.getElementById("data1").innerHTML=data[1].country;
        document.getElementById("data11").innerHTML=data[1].state;
        document.getElementById("data12").innerHTML=data[1].website_url;

        document.getElementById("data2").innerHTML=data[2].country;
        document.getElementById("data21").innerHTML=data[2].state;
        document.getElementById("data22").innerHTML=data[2].website_url;

        document.getElementById("data3").innerHTML=data[3].country;
        document.getElementById("data31").innerHTML=data[3].state;
        document.getElementById("data32").innerHTML=data[3].website_url;

        document.getElementById("data4").innerHTML=data[4].country;
        document.getElementById("data41").innerHTML=data[4].state;
        document.getElementById("data42").innerHTML=data[4].website_url;

        document.getElementById("data5").innerHTML=data[5].country;
        document.getElementById("data51").innerHTML=data[5].state;
        document.getElementById("data52").innerHTML=data[5].website_url;
    }
)