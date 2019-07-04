<?php

// DATOS DE CONEXION A LA BASE DE DATOS
function conexion() {
  $conexion = mysqli_connect("localhost:3306", "labadclic_prueba", "Themeg@lodon54321", "labadclic_chatbot");
  
  return $conexion;
}

?>