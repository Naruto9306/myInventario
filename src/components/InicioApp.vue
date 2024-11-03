<template>
  <div class="container-fluid">

    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
      <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm"><i
          class="fas fa-download fa-sm text-white-50"></i> Generar Resumen</a>
    </div>

    <!-- Content Row -->
    <div class="row">

      <!-- Cantidad de Moneda nacional -->
      <div class="col-xl-1"></div>
      <div class="col-xl-2 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                  MN</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">0</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- USD -->
      <div class="col-xl-2 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                  USD</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">0</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- EUROS -->
      <div class="col-xl-2 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                  EURO</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">0</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TRANSFERENCIAS -->
      <div class="col-xl-2 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                  TRANSFERENCIAS</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">0</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- VUELTOS -->
      <div class="col-xl-2 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                  VUELTOS</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">0</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fila con PEDIDOS -->

    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-info">LISTADO DE PEDIDOS <img class="img-fluid" style="width:50px;"
            src="../assets/new/img/undraw_posting_photo.svg" alt="..."></h6>
        <!-- <div class="text-right">
                            <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width:5rem;" src="../assets/new/img/undraw_posting_photo.svg" alt="...">
                        </div> -->
      </div>
      <div class="card-body">
        <!-- <div class="text-left">
                            <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 10rem;" src="../assets/new/img/undraw_posting_photo.svg" alt="...">
                        </div> -->
        <!-- Tabla Pedidos -->
        <div class="table-responsive">
          <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th>PRODUCTO</th>
                <th>DIRECCIÓN DE ENTREGA</th>
                <th>MANAGER</th>
                <th>GESTOR</th>
                <th>MÉTODO DE PAGO</th>
                <th>ESTADO</th>
              </tr>
            </thead>
            <!-- <tfoot>
                                    <tr>
                                        <th>PRODUCTO</th>
                                        <th>DIRECCIÓN DE ENTREGA</th>
                                        <th>MANAGER</th>
                                        <th>GESTOR</th>
                                        <th>MÉTODO DE PAGO</th>
                                        <th>ESTADO</th>
                                    </tr>
                                </tfoot> -->
            <tbody>
              <tr>
                <th>Tablet</th>
                <th>La Habana Cuba</th>
                <th>Eugenio</th>
                <th>Pepe</th>
                <th>Pendiente</th>
                <th>Pendiente</th>
              </tr>
              <tr>
                <th>Tablet</th>
                <th>La Habana Cuba</th>
                <th>Eugenio</th>
                <th>Pepe</th>
                <th>Pendiente</th>
                <th>Pendiente</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Content Row -->

    <div class="row">

      <!-- Usuarios -->
      <div class="col-xl-4 col-lg-5">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-info">LISTADO DE TRABAJADORES</h6>
            <div class="dropdown no-arrow">
              <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                aria-labelledby="dropdownMenuLink">
                <div class="dropdown-header">Acciones:</div>
                <a class="dropdown-item" href="#"><span class="fa fa-phone"></span> Llamar</a>
                <a class="dropdown-item" href="#"><span class="fa fa-chat"></span> Enviar mensaje</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Otras</a>
              </div>
            </div>
          </div>
          <!-- Card Body -->
          <div class="card-body">

            <!-- Personas -->
            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>FOTO</th>
                    <th>NOMBRE</th>
                    <th>ROL</th>
                    <th>SALARIO</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th><img class="img-profile rounded-circle" src="../assets/new/img/undraw_profile_1.svg"> <i
                        class="fas fa-circle text-info"></i></th>
                    <th>Moraima</th>
                    <th>Manager</th>
                    <th>100</th>
                  </tr>
                  <tr>
                    <th><img class="img-profile rounded-circle" src="../assets/new/img/undraw_profile_2.svg"><i
                        class="fas fa-circle text-success"></i></th>
                    <th>Pepe</th>
                    <th>Gestora</th>
                    <th>59.10</th>
                  </tr>

                </tbody>
              </table>
            </div>

            <div class="mt-4 text-center small">
              <span class="mr-2">
                <i class="fas fa-circle text-primary"></i> Activo
              </span>
              <span class="mr-2">
                <i class="fas fa-circle text-success"></i> En espera
              </span>
              <span class="mr-2">
                <i class="fas fa-circle text-info"></i> Baja
              </span>
            </div>
          </div>
        </div>
      </div>

      <!--Listado de productos -->
      <div class="col-xl-8 col-lg-7">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-info">PRODUCTOS EN STOCK</h6>
            <div class="dropdown no-arrow">
              <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                aria-labelledby="dropdownMenuLink">
                <div class="dropdown-header">Acciones:</div>
                <a class="dropdown-item" href="#">Administrar</a>
                <a class="dropdown-item" href="#">Conformar pedidos</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Otros</a>
              </div>
            </div>
          </div>
          <!-- Card Body -->
          <div class="card-body">

            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>FOTO</th>
                    <th>CÓDIGO</th>
                    <th>DESCRIPCIÓN</th>
                    <th>PRECIO</th>
                    <th>DESCUENTO</th>
                    <th>ANTICIPO</th>
                    <th>ESTADO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <th><img class="img-profile rounded-circle" src="../assets/new/img/tablet.jpg"
                        style="width: 50px; height:50px"> </th>
                    <th>F0093</th>
                    <th>Tablet Samsung</th>
                    <th>100usd</th>
                    <th>5%</th>
                    <th>0</th>
                    <th>En Stock</th>
                  </tr>
                  <tr>
                    <th>2</th>
                    <th><img class="img-profile rounded-circle" src="../assets/new/img/mochila.jpg"
                        style="width: 50px; height:50px"></th>
                    <th>300562</th>
                    <th>Mochila</th>
                    <th>60usd</th>
                    <th>5%</th>
                    <th>0</th>
                    <th>Entregado al mensajero</th>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>


    </div>

  </div>
</template>

<script setup>

// import { onMounted } from 'vue';
// const bodyLogin = document.getElementById('page-top');

// onMounted(async () => {
  //if (route.path == '/inicio') {
    // bodyLogin.classList.remove('bg-gradient-primary');
    // bodyLogin.classList.remove('sidebar-toggled');
  // }
// })


</script>

<style lang="scss" scoped></style>
