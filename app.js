var names = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var sehriTime = ["0","4:51 AM","4:50 AM","4:49 AM","4:48 AM","4:47 AM","4:46 AM","4:45 AM","4:44 AM","4:43 AM","4:42 AM","4:41 AM","4:40 AM","4:39 AM","4:38 AM","4:37 AM","4:36 AM","4:35 AM","4:34 AM","4:33 AM","4:32 AM","4:31 AM","4:30 AM","4:29 AM","4:28 AM","4:27 AM","4:26 AM","4:25 AM","4:24 AM"];
var iftarTime=["0","6:55 PM","6:55 PM","6:56 PM","6:56 PM","6:57 PM","6:57 PM","6:58 PM","6:58 PM","6:59 PM","6:59 PM","7:00 PM","7:00 PM","7:01 PM","7:01 PM","7:02 PM","7:02 PM","7:03 PM","7:03 PM","7:04 PM","7:04 PM","7:05 PM","7:05 PM","7:06 PM","7:06 PM","7:07 PM","7:07 PM","7:08 PM","7:08 PM","7:09 PM"]
var user=+prompt("Enter Roza");

if(user>0 && user<=30){
    document.write("<div>",+ names[user] + " Roza"+"</div>" )
    document.write("<div>","Sehri Time is "+ sehriTime[user]+"</div>")
    document.write("<div>","Iftar Time is "+ iftarTime[user]+"</div>")
}