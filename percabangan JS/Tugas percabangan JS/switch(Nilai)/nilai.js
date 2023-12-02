let nilai = parseInt(prompt("masukan nilai"));
switch (true){
   case (nilai >= 85 && nilai <= 100):
   document.write(`nilai anda ${nilai} nilai A `);
   break;
   
   case (nilai >= 70 && nilai < 85):
   document.write(`nilai anda ${nilai} nilai B `);
   break;
   
   case (nilai > 60 && nilai < 70):
   document.write(`nilai anda ${nilai} nilai C `);
                      
   default:
   document.write(`nilai anda ${nilai} jadi tidak lulus`);
   break;
}
   
   
