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
                            document.body.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjBIH-WzWyxXg1ezJOIruAn0WLY2Ga-soTPQ&s')";
                            break;
                            case "Clear":
                             document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1717446586299-41283dbe7e87?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xlYXIlMjB3ZWF0aGVyfGVufDB8fDB8fHww')";
                             break;
                             case "Rain":
                             document.body.style.backgroundImage="url('https://png.pngtree.com/thumb_back/fh260/background/20210903/pngtree-summer-beautiful-heavy-rain-raindrops-falling-into-the-water-splashing-water-image_800852.jpg')";
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