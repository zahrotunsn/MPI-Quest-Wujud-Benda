function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5wF4h2e1WDs":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="game.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

