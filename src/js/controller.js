const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

const mostrarReceta = async function () {

  try {

    const respuesta = await fetch('https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886');
    const datos = await respuesta.json();

    if(!respuesta.ok) throw new Error(`${datos.message} (${respuesta.status})`)

    console.log(respuesta, datos);

  } catch (err){
    alert(err)
  }
  
}

mostrarReceta();
