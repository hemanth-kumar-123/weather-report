 async function weather(){
        cityname=document.getElementById("in").value;
            APIkey='5fc84481d6f2b6865126e89d7219c125';
            targeturl=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`;
            try{
                const response=await fetch(targeturl);
                const a=await response.json();
                function dis(){
                    document.getElementById('2').innerHTML=`Place :${a.name}`;
                    document.getElementById('3').innerHTML=`Sky : ${a.weather[0].main}`;
                    document.getElementById('4').innerHTML=`Temperature:${(a.main.temp-273.14).toFixed(2)}°C`;
                    document.getElementById('5').innerHTML=`Place : ${a.main.humidity}`;
                     b=a.weather[0].main
                    
                    switch(b){
                        case "Clouds":
                            document.body.style.backgroundImage="url('https://www.abc27.com/wp-content/uploads/sites/55/2022/10/GettyImages-1125295327.jpg?w=1920&h=1080&crop=1')";
                            break;
                            case "Clear":
                             document.body.style.backgroundImage="url('https://static.vecteezy.com/system/resources/previews/015/134/640/large_2x/a-view-of-the-sky-with-clear-weather-in-the-morning-the-lush-green-fields-are-outdoors-agricultural-landscape-background-design-template-for-book-cover-magazine-website-photo.jpg')";
                             break;
                             case "Rain":
                             document.body.style.backgroundImage="url('https://tse3.mm.bing.net/th/id/OIP.okCkPcvxa_tbInbVc7dBNwHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3')";
                                 break;

                    }
                }
                dis();
                console.log(a)
            }catch(error){
                console.error(error);
            }
            
            }
                
        document.getElementById("bu").addEventListener("click",function(){
            weather();
        });