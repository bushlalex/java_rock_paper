





//ФУНКЦИЯ, КОТОРАЯ ГЕНЕРИРУЕТ ВЫБОР КОМПЬЮТЕРА//
    function viborkompa () {
    let x = Math.floor(Math.random(1)*100)
    if (x>0&&x<33) {
      return "Камень"
    }
    else if (x>33&&x<66) {
      return "Ножницы"
    }
    else return "Бумага"
  }
  
   //ФУНКЦИЯ КОТОРАЯ ПРИНИМАЕТ ВЫБОР ЧЕЛОВЕКА//
  function viborcheloveka () {
    let x = document.getElementById('opcii').value;
    return x;
  }
  

  
  //ФУНКЦИЯ КОТОРАЯ СРАВНИВАЕТ РЕЗУЛЬТАТ ЧЕЛОВЕКА И КОМПЬЮТЕРА//
  function igraodinround (chel, comp) {
    if ((comp=="Камень"&&chel=="Камень")||
        (comp=="Ножницы"&&chel=="Ножницы")||
        (comp=="Бумага"&&chel=="Бумага")) {
    let element = document.getElementById('rezultatraunda');
    element.innerHTML = "Ничья!"
    }
    else if ((comp=="Камень"&&chel=="Ножницы")||
            (comp=="Ножницы"&&chel=="Бумага")||
            (comp=="Бумага"&&chel=="Камень")) {
    let element = document.getElementById('rezultatraunda');
    element.innerHTML = "Вы проиграли раунд!"
    ++schetkomp;
    }
    else {
      let element = document.getElementById('rezultatraunda');
    element.innerHTML ="Вы выиграли раунд!"
    ++schetvi}
    let element1= document.getElementById('schetvi1')
    element1.innerHTML = schetvi;
    let element2= document.getElementById('schetcomp1')
    element2.innerHTML = schetkomp;    
  }
  
  //ФУНКЦИЯ, КОТОРАЯ ВЫЗЫВАЕТ РАУНД//
  function playround () {
    return igraodinround(viborcheloveka (), viborkompa ()) 
  }

  function playGame () {
    playround()
      
    if (schetvi<5&&schetkomp<5) {

      document.getElementById('itogigri').innerHTML = "Игра продолжается..."  }
    else if (schetvi==5) {
      document.getElementById('itogigri').innerHTML = "Вы выиграли игру! Поздравляем!"
      const button = document.getElementById("yButton");
      button.style.display = "none"; 
    }
    else if (schetkomp==5) {
      document.getElementById('itogigri').innerHTML = 'Вы проиграли('
      const button = document.getElementById("yButton");
      button.style.display = "none"; 
    }
    }  
  
  let schetkomp = 0;
  let schetvi = 0;
  
  
   
  


    
    
  







