// Mouse blur
const blob = document.getElementById("blob");

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    {
      duration: 2000,
      fill: "forwards",
    }
  );

  setTimeout(function(){
    blob.animate(
		{
		  opacity: 0,
		  opacity: 1,
		},
		{
		  duration: 2000,
		  fill: "forwards",
		},);
}, 1000);
};