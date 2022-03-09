function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }

  document.getElementById('button').addEventListener('click',
  function(){
    document.querySelector('.bg-modal').style.display='flex';
  }
  )

  document.querySelector('.close').addEventListener('click',
  function(){
    document.querySelector('.bg-modal').style.display='none';
  }
  )

  document.getElementById('butt').addEventListener('click',function(){
    document.querySelector('.myteam').style.display='flex';
  })