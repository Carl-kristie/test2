function generateHeart() {
    const delay = 400;
    const heartElement = document.getElementById('heart');
    heartElement.innerHTML = ''; 
  
    const heartPattern = [
      "&nbsp;&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;&nbsp;<br>",
      "&nbsp;&nbsp;**********&nbsp;&nbsp;&nbsp;**********<br>",
      "&nbsp;***********************<br>",
      "&nbsp;***********************<br>",
      "&nbsp;&nbsp;*********************<br>",
      "&nbsp;&nbsp;&nbsp;&nbsp;*****************<br>",
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*************<br>",
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*********<br>",
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*****<br>",
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***<br>",
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*<br>"
    ];
  
    let currentDelay = 0;
    heartPattern.forEach((line) => {
      setTimeout(() => {
        heartElement.innerHTML += line;
      }, currentDelay);
      currentDelay += delay;
    });
  }
  
  function checkTasks() {
    const tasks = document.querySelectorAll("#tasks input");
    const allCompleted = Array.from(tasks).every((task) => task.checked);
  
    if (allCompleted) {
      document.getElementById("heart-section").style.display = "block";
      generateHeart();
      document.getElementById("hidden-message").style.display = "block";
    } else {
      document.getElementById("heart-section").style.display = "none";
      document.getElementById("hidden-message").style.display = "none";
    }
  }
  
  function showGallery(event) {
    const gallery = document.getElementById("photoGallery");
    Array.from(event.target.files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        gallery.appendChild(img);
      };
      reader.readAsDataURL(file);
    });
  }
  