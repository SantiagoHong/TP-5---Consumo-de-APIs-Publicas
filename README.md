AVISO: para esta pokedex la api acepta tanto el ID como el nombre del pokemon cuando busca la información del pokemon

utilizamos la endpoint: https://pokeapi.co/api/v2/pokemon/${ID.value}  (el ID.Value seria el parametro que recibieria o sea un nombre o ID)

Para el tema del Loading decidimos utilizar asyncs y awaits ya que mientras el fetch busque el div "Pokemon Info" pondra "cargando" mientras muestra un gif y cuando el fetch encuentre reemplazar "Pokemon Info" por los datos del pokemon. En caso de que no se encuentra el div te mostrará que no lo encontró.

ninguna dificultad durante el TP
