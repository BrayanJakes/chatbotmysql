(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <chat-config [(theme)]=\"theme\"></chat-config> -->\n\n\n\n\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/chat-config/chat-config.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/chat-config/chat-config.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\" col-md-6 col-sm-3 \">\n        <div class=\"chat-config\">\n            {{text}}\n            <button *ngFor=\"let item of themes\" class=\"btn\" [class.btn-active]=\"item === theme\" (click)=\"setTheme(item)\">\n            {{item}}\n          </button>\n        </div>\n    </div>\n\n    <div class=\" col-md-6 col-sm-3 \">\n\n        <div class=\"chat-config\">\n\n            <button class=\"btn btn-info\" (click)=\"probarChat = true\"> Probar chat </button> &nbsp; &nbsp; &nbsp; &nbsp;\n\n            <button class=\"btn btn-info\" (click)=\"probarChat = false\"> Cerrar chat </button>\n\n\n        </div>\n\n    </div>\n</div>\n\n\n\n\n<div class=\"row\">\n    <div class=\" col-md-6 col-sm-3 \">\n\n        <div class=\"card mt-3\">\n            <div class=\"card-header\">\n                <h3>titulo</h3>\n            </div>\n\n            <div class=\"card-body\">\n\n                <p>Mensaje de bienvenida para el cliente</p>\n\n                <input type=\"text\" class=\"form-control\" name=\"mensajeInicial\" [(ngModel)]=\"chatbotMensajes.mensajeInicial\">\n\n                <div class=\"row\">\n                    <div class=\"col-md-12 mt-3\">\n                        <button class=\"btn btn-outline-info btn-block\"> Guardar </button>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n        <div class=\"card mt-3\">\n            <div class=\"card-header\">\n                <h3>Opciones Primarias</h3>\n            </div>\n\n            <div class=\"card-body\">\n\n                <p>Puedes colocar cualquier opcion principal que hara tu chatbot</p>\n\n                <form #form=\"ngForm\">\n\n                    <div *ngFor=\"let instruccion of chatbotConfig.instrucciones; let i = index\">\n\n                        <span class=\"badge badge-secondary\"> <span (click)=\"Eliminar(i)\" > X </span>{{instruccion.opcion}}</span>\n\n                    </div>\n\n                    <br>\n\n                    <div class=\"form-group \">\n                        <input type=\"text\" name=\"instrucciones\" [(ngModel)]=\"form.value.instrucciones\" class=\"form-control\"> <br>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n\n                            <button class=\"btn btn-outline-info btn-block\" (click)=\"agregarInstruccion(form)\">Agregar</button>\n                        </div>\n\n                        <div class=\"col-md-6\">\n                            <button class=\"btn btn-outline-info btn-block\"> Guardar </button>\n\n                        </div>\n                    </div>\n\n\n\n\n\n\n\n                </form>\n\n            </div>\n        </div>\n\n    </div>\n\n    <div class=\" col-md-6  col-sm-3 \">\n\n        <div class=\"card mt-3\">\n            <div class=\"card-header\">\n                <h3>Opciones Secundaria</h3>\n            </div>\n\n            <div class=\"card-body\">\n\n                <p>Aqui iran las instrucciones de cada opcion que coloques</p>\n\n                <form #form=\"ngForm\">\n\n                    <div *ngFor=\"let instruccion of chatbotConfig.instrucciones; let i = index\">\n\n                        <div class=\"text-center mt-3\">\n                            <span class=\"badge badge-secondary \"> <span (click)=\"Eliminar(i)\" > X </span>{{instruccion.opcion}}</span>\n\n                        </div>\n\n\n\n\n                        <br>\n\n                        <div class=\"form-group \">\n                            <input type=\"text\" [name]=\"opcioneSecundaria\" #opcioneSecundaria (keyup.enter)=\"opcion2(opcioneSecundaria.value, instruccion.opcion, i )\" class=\"form-control\"> <br>\n                        </div>\n\n\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n\n                                <button class=\"btn btn-outline-info btn-block\" (click)=\"opcion2(opcioneSecundaria.value, instruccion.opcion )\">Agregar</button>\n                            </div>\n\n                            <div class=\"col-md-6\">\n                                <button class=\"btn btn-outline-info btn-block\"> Guardar </button>\n\n                            </div>\n                        </div>\n\n                    </div>\n\n\n\n\n\n\n\n\n\n                </form>\n\n            </div>\n\n        </div>\n    </div>\n\n\n\n\n    <chat-widget [theme]=\"theme\" *ngIf=\"probarChat\"> </chat-widget>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/chat-widget/chat-widget.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/chat-widget/chat-widget.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper {{theme}}\">\n    <div class=\"chat-box\" *ngIf=\"visible\" [@fadeInOut]=\"visible\">\n        <div class=\"chat-box-header\">\n            <div class=\"\">\n                <div class=\"operator-status\">\n                    {{operator.status}}\n                    <span class=\"operator-status-online\">●</span>\n                    <button class=\"chat-button-header\" (click)=\"toggleChat()\">✕</button>\n                </div>\n                <chat-avatar [image]=\"operator.avatar\"></chat-avatar>\n                <h3 class=\"operator-name\">\n                    {{operator.name}}\n                </h3>\n            </div>\n        </div>\n        <div class=\"chat-box-main\">\n            <div class=\"chat-message-bottom\" #bottom></div>\n            <ng-container *ngFor=\"let message of messages\">\n                <div class=\"chat-message\" [class.chat-message-received]=\"message.type === 'received'\" [@fadeIn] [class.chat-message-sent]=\"message.type === 'sent'\">\n                    <div>\n                        <chat-avatar [image]=\"message.from.avatar\" class=\"chat-message-from-avatar\"></chat-avatar>\n                        <div class=\"chat-message-text\">\n\n\n\n                            {{message.text}}\n\n\n                        </div>\n\n                    </div>\n                    <div class=\"chat-message-date\">\n\n                        <div *ngIf=\"message.type === 'received' && !datosIngresadoCorrectos && message.text.charAt(0) === '!'\">\n\n\n                            <button class=\"btn btn-outline-info m-1\" (click)=\"preguntas('Si')\">Si</button>\n                            <button class=\"btn btn-outline-info m-1\" (click)=\"preguntas('No')\">No</button>\n\n                        </div>\n\n\n                        <div *ngIf=\"message.type === 'received' && datosIngresadoCorrectos && listaDeProductos && message.text.charAt(0) === '-'\">\n\n\n                                <button class=\"btn btn-outline-info m-1\" (click)=\"preguntas('compra de producto')\">Si quiero un produto</button>\n                                <button class=\"btn btn-outline-info m-1\" (click)=\"preguntas('esperar asesor de ventas')\">No, esperare a un asesor de venta</button>\n    \n                            </div>\n\n\n                            \n                        <div *ngIf=\"message.type === 'received' && datosIngresadoCorrectos && compraProducto && message.text === 'Acontinuacion aqui te damos varios productos que tenemos en venta'\">\n\n\n                                <button class=\"btn btn-outline-info m-1\" (click)=\"preguntas('compra de hosting')\">Compra hosting</button>\n                                <button class=\"btn btn-outline-info m-1\" (click)=\"preguntas('compra de reseller')\">Compra de Reseller hosting</button>\n    \n                            </div>\n\n\n                            <div *ngIf=\"message.type === 'received' && datosIngresadoCorrectos && compraDeHosting && message.text === 'Aqui tenemos el precio de nuestro hosting'\">\n\n\n                                    <button class=\"btn btn-outline-info m-1\" (click)=\"preguntas('6$ Trimestral')\">6$ Trimestral</button>\n                                    <button class=\"btn btn-outline-info m-1\" (click)=\"preguntas('8$ Semestral')\">8$ Semestral</button>\n                                    <button class=\"btn btn-outline-info m-1\" (click)=\"preguntas('10$ Anual')\">10$ Anual</button>\n        \n                                </div>\n\n\n                                <div *ngIf=\"message.type === 'received' && datosIngresadoCorrectos && compraDeResellerHosting && message.text === 'Aqui tenemos el precio de nuestro reseller hosting'\">\n\n\n                                        <button class=\"btn btn-outline-info m-1\" (click)=\"preguntas('10$ Trimestral')\">10$ Trimestral</button>\n                                        <button class=\"btn btn-outline-info m-1\" (click)=\"preguntas('13$ Semestral')\">13$ Semestral</button>\n                                        <button class=\"btn btn-outline-info m-1\" (click)=\"preguntas('20$ Anual')\">20$ Anual</button>\n            \n                                    </div>\n\n\n\n\n                                \n\n\n\n\n\n\n\n                        <p> {{message.date | date: 'short'}} </p>\n                    </div>\n                </div>\n            </ng-container>\n        </div>\n        <div class=\"chat-box-footer\">\n            <chat-input (send)=\"sendMessage($event)\" (dismiss)=\"toggleChat()\" *ngIf=\"datosIngresadoCorrectos\" [focus]=\"focus\"></chat-input>\n        </div>\n    </div>\n    <button class=\"chat-button\" (click)=\"toggleChat()\">\n     \n    <span [@fadeIn] *ngIf=\"visible\">✕</span>\n    <span [@fadeIn] *ngIf=\"!visible\">?</span>\n  </button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Heading -->\n<div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n    <h1 class=\"h3 mb-0 text-gray-800\">Dashboard</h1>\n    <a href=\"#\" class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm\"><i class=\"fas fa-download fa-sm text-white-50\"></i> Generate Report</a>\n</div>\n\n<!-- Content Row -->\n<div class=\"row\">\n\n    <!-- Earnings (Monthly) Card Example -->\n    <div class=\"col-xl-3 col-md-6 mb-4\">\n        <div class=\"card border-left-primary shadow h-100 py-2\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">CLIENTES</div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\"> {{ datosClientes.length }} </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Earnings (Monthly) Card Example -->\n    <div class=\"col-xl-3 col-md-6 mb-4\">\n        <div class=\"card border-left-success shadow h-100 py-2\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">CONTACTADOS</div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">0</div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <div class=\"h5 mb-0 mr-3 font-weight-bold text-gray-800\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Earnings (Monthly) Card Example -->\n    <div class=\"col-xl-3 col-md-6 mb-4\">\n        <div class=\"card border-left-info shadow h-100 py-2\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-info text-uppercase mb-1\">VENTAS PROCESADAS</div>\n                        <div class=\"row no-gutters align-items-center\">\n                            <div class=\"col-auto\">\n                                <i class=\"fas fa-dollar-sign fa-2x text-gray-300\"></i>\n                            </div>\n\n                            <div class=\"h5 mb-0 font-weight-bold text-gray-800\"> {{ datosProductos.length }} </div>\n\n                        </div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-clipboard-list fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Pending Requests Card Example -->\n    <div class=\"col-xl-3 col-md-6 mb-4\">\n        <div class=\"card border-left-warning shadow h-100 py-2\">\n            <div class=\"card-body\">\n                <div class=\"row no-gutters align-items-center\">\n                    <div class=\"col mr-2\">\n                        <div class=\"text-xs font-weight-bold text-warning text-uppercase mb-1\">CLIENTES PENDIENTE</div>\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{ datosClientes.length }}</div>\n                    </div>\n                    <div class=\"col-auto\">\n                        <i class=\"fas fa-comments fa-2x text-gray-300\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Content Row -->\n\n<div class=\"row\">\n\n    <!-- Area Chart -->\n    <div class=\"col-xl-7 col-lg-6\">\n        <div class=\"card shadow mb-4\">\n            <!-- Card Header - Dropdown -->\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                <h6 class=\"m-0 font-weight-bold text-primary\">Clientes Registrados</h6>\n\n            </div>\n            <!-- Card Body -->\n            <div class=\"card-body alto\">\n\n                <div class=\"scroll\">\n                        <table class=\"table table-light\" >\n\n                                <thead>\n                                    <tr>\n                                        <td>#</td>\n                                    \n                                        <td>Nombre</td>\n                                    \n                                        <td>Email</td>\n                                   \n                                        <td>Celular</td>\n                                    \n                                    </tr>\n                                </thead>\n            \n                                        <tbody >\n                                                <tr *ngFor=\"let cliente of datosClientes; let i = index\" >\n                    \n                                                        <td>{{i}}</td>\n                                                    \n                                                        <td> {{ cliente.nombre }} </td>\n                                                    \n                                                        <td> {{ cliente.email }} </td>\n                                                   \n                                                        <td> {{ cliente.telefono }} </td>\n                                                    \n                                                    </tr>\n                                        </tbody>\n            \n            \n                               \n            \n                            </table>\n\n                </div>\n                \n            \n\n            </div>\n        </div>\n    </div>\n\n    <!-- Pie Chart -->\n    <div class=\"col-xl-5 col-lg-6\">\n        <div class=\"card shadow mb-4\">\n            <!-- Card Header - Dropdown -->\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                <h6 class=\"m-0 font-weight-bold text-primary\">Ventas</h6>\n\n            </div>\n            <!-- Card Body -->\n            <div class=\"card-body alto\">\n\n                    <div class=\"scroll\">\n                            <table class=\"table table-light\" >\n    \n                                    <thead>\n                                        <tr>\n                                            \n                                        \n                                            <td>Venta</td>\n                                        \n                                            <td>Precio $</td>\n                                       \n                                            <td>Estatus</td>\n                                        \n                                        </tr>\n                                    </thead>\n                \n                                            <tbody >\n                                                    <tr *ngFor=\"let producto of datosProductos\" >\n                        \n                                                            <td>{{ producto.producto }}</td>\n                                                        \n                                                            <td>{{ producto.precio }}</td>\n                                                        \n                                                            <td>{{ producto.estatus }}</td>\n                                          \n                                                        </tr>\n                                            </tbody>\n                \n                \n                                   \n                \n                                </table>\n    \n                    </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Content Row -->\n\n\n\n\n<!-- Footer -->\n\n<!-- End of Footer -->\n\n\n\n<!-- Scroll to Top Button-->\n<a class=\"scroll-to-top rounded\" href=\"#page-top\">\n    <i class=\"fas fa-angle-up\"></i>\n</a>\n\n<!-- Logout Modal-->\n<div class=\"modal fade\" id=\"logoutModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Ready to Leave?</h5>\n                <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">×</span>\n          </button>\n            </div>\n            <div class=\"modal-body\">Select \"Logout\" below if you are ready to end your current session.</div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">Cancel</button>\n                <a class=\"btn btn-primary\" href=\"login.html\">Logout</a>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<chat-widget [theme]=\"theme\" > </chat-widget>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"sticky-footer bg-white\">\n    <div class=\"container my-auto\">\n        <div class=\"copyright text-center my-auto\">\n            <span>Copyright &copy; Your Website 2019</span>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/pages.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/pages.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n\n\n    <!-- Sidebar -->\n\n    <app-sidebar></app-sidebar>\n\n    <!-- End of Sidebar -->\n\n    <!-- Content Wrapper -->\n    <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n\n        <!-- Main Content -->\n        <div id=\"content\">\n\n            <!-- Topbar -->\n            <app-toolbar></app-toolbar>\n\n            <!-- End of Topbar -->\n\n            <!-- Begin Page Content -->\n            <div class=\"container-fluid\">\n\n\n                <router-outlet></router-outlet>\n\n\n\n\n            </div>\n\n\n\n        </div>\n        <!-- /.container-fluid -->\n\n    </div>\n    <!-- End of Main Content -->\n\n\n\n\n\n\n\n</div>\n<!-- End of Content Wrapper -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\n\n    <!-- Sidebar - Brand -->\n    <a class=\"sidebar-brand d-flex align-items-center justify-content-center\" href=\"index.html\">\n        <div class=\"sidebar-brand-icon rotate-n-15\">\n            <i class=\"fas fa-laugh-wink\"></i>\n        </div>\n        <div class=\"sidebar-brand-text mx-3\">SB Admin <sup>2</sup></div>\n    </a>\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider my-0\">\n\n    <!-- Nav Item - Dashboard -->\n    <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"index.html\">\n            <i class=\"fas fa-fw fa-tachometer-alt\"></i>\n            <span>Dashboard</span></a>\n    </li>\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider\">\n\n    <!-- Heading -->\n    <div class=\"sidebar-heading\">\n        Interface\n    </div>\n\n    <!-- Nav Item - Pages Collapse Menu -->\n    <li class=\"nav-item\">\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\n            <i class=\"fas fa-fw fa-cog\"></i>\n            <span>Chatbot</span>\n        </a>\n\n    </li>\n\n    <!-- Nav Item - Utilities Collapse Menu -->\n    <li class=\"nav-item\">\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseUtilities\" aria-expanded=\"true\" aria-controls=\"collapseUtilities\">\n            <i class=\"fas fa-fw fa-wrench\"></i>\n            <span>Conversaciones</span>\n        </a>\n\n    </li>\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider\">\n\n    <!-- Heading -->\n    <div class=\"sidebar-heading\">\n        Addons\n    </div>\n\n    <!-- Nav Item - Pages Collapse Menu -->\n    <li class=\"nav-item\">\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapsePages\" aria-expanded=\"true\" aria-controls=\"collapsePages\">\n            <i class=\"fas fa-fw fa-folder\"></i>\n            <span>Pages</span>\n        </a>\n\n    </li>\n\n    <!-- Nav Item - Charts -->\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"charts.html\">\n            <i class=\"fas fa-fw fa-chart-area\"></i>\n            <span>Charts</span></a>\n    </li>\n\n    <!-- Nav Item - Tables -->\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"tables.html\">\n            <i class=\"fas fa-fw fa-table\"></i>\n            <span>Tables</span></a>\n    </li>\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider d-none d-md-block\">\n\n    <!-- Sidebar Toggler (Sidebar) -->\n    <div class=\"text-center d-none d-md-inline\">\n        <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\n    </div>\n\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/toolbar/toolbar.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/toolbar/toolbar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\n\n    <!-- Sidebar Toggle (Topbar) -->\n    <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\n<i class=\"fa fa-bars\"></i>\n</button>\n\n    <!-- Topbar Search -->\n    <form class=\"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search\">\n        <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\n            <div class=\"input-group-append\">\n                <button class=\"btn btn-primary\" type=\"button\">\n      <i class=\"fas fa-search fa-sm\"></i>\n    </button>\n            </div>\n        </div>\n    </form>\n\n    <!-- Topbar Navbar -->\n    <ul class=\"navbar-nav ml-auto\">\n\n        <!-- Nav Item - Search Dropdown (Visible Only XS) -->\n        <li class=\"nav-item dropdown no-arrow d-sm-none\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"searchDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fas fa-search fa-fw\"></i>\n            </a>\n            <!-- Dropdown - Messages -->\n            <div class=\"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in\" aria-labelledby=\"searchDropdown\">\n                <form class=\"form-inline mr-auto w-100 navbar-search\">\n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-primary\" type=\"button\">\n            <i class=\"fas fa-search fa-sm\"></i>\n          </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </li>\n\n        <!-- Nav Item - Alerts -->\n        <li class=\"nav-item dropdown no-arrow mx-1\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"alertsDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fas fa-bell fa-fw\"></i>\n                <!-- Counter - Alerts -->\n                <span class=\"badge badge-danger badge-counter\">3+</span>\n            </a>\n            <!-- Dropdown - Alerts -->\n            <div class=\"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"alertsDropdown\">\n                <h6 class=\"dropdown-header\">\n                    Alerts Center\n                </h6>\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                    <div class=\"mr-3\">\n                        <div class=\"icon-circle bg-primary\">\n                            <i class=\"fas fa-file-alt text-white\"></i>\n                        </div>\n                    </div>\n                    <div>\n                        <div class=\"small text-gray-500\">December 12, 2019</div>\n                        <span class=\"font-weight-bold\">A new monthly report is ready to download!</span>\n                    </div>\n                </a>\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                    <div class=\"mr-3\">\n                        <div class=\"icon-circle bg-success\">\n                            <i class=\"fas fa-donate text-white\"></i>\n                        </div>\n                    </div>\n                    <div>\n                        <div class=\"small text-gray-500\">December 7, 2019</div>\n                        $290.29 has been deposited into your account!\n                    </div>\n                </a>\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                    <div class=\"mr-3\">\n                        <div class=\"icon-circle bg-warning\">\n                            <i class=\"fas fa-exclamation-triangle text-white\"></i>\n                        </div>\n                    </div>\n                    <div>\n                        <div class=\"small text-gray-500\">December 2, 2019</div>\n                        Spending Alert: We've noticed unusually high spending for your account.\n                    </div>\n                </a>\n                <a class=\"dropdown-item text-center small text-gray-500\" href=\"#\">Show All Alerts</a>\n            </div>\n        </li>\n\n        <!-- Nav Item - Messages -->\n        <li class=\"nav-item dropdown no-arrow mx-1\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"messagesDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fas fa-envelope fa-fw\"></i>\n                <!-- Counter - Messages -->\n                <span class=\"badge badge-danger badge-counter\">7</span>\n            </a>\n            <!-- Dropdown - Messages -->\n            <div class=\"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"messagesDropdown\">\n                <h6 class=\"dropdown-header\">\n                    Message Center\n                </h6>\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                    <div class=\"dropdown-list-image mr-3\">\n                        <img class=\"rounded-circle\" src=\"https://source.unsplash.com/fn_BT9fwg_E/60x60\" alt=\"\">\n                        <div class=\"status-indicator bg-success\"></div>\n                    </div>\n                    <div class=\"font-weight-bold\">\n                        <div class=\"text-truncate\">Hi there! I am wondering if you can help me with a problem I've been having.</div>\n                        <div class=\"small text-gray-500\">Emily Fowler · 58m</div>\n                    </div>\n                </a>\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                    <div class=\"dropdown-list-image mr-3\">\n                        <img class=\"rounded-circle\" src=\"https://source.unsplash.com/AU4VPcFN4LE/60x60\" alt=\"\">\n                        <div class=\"status-indicator\"></div>\n                    </div>\n                    <div>\n                        <div class=\"text-truncate\">I have the photos that you ordered last month, how would you like them sent to you?</div>\n                        <div class=\"small text-gray-500\">Jae Chun · 1d</div>\n                    </div>\n                </a>\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                    <div class=\"dropdown-list-image mr-3\">\n                        <img class=\"rounded-circle\" src=\"https://source.unsplash.com/CS2uCrpNzJY/60x60\" alt=\"\">\n                        <div class=\"status-indicator bg-warning\"></div>\n                    </div>\n                    <div>\n                        <div class=\"text-truncate\">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>\n                        <div class=\"small text-gray-500\">Morgan Alvarez · 2d</div>\n                    </div>\n                </a>\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                    <div class=\"dropdown-list-image mr-3\">\n                        <img class=\"rounded-circle\" src=\"https://source.unsplash.com/Mv9hjnEUHR4/60x60\" alt=\"\">\n                        <div class=\"status-indicator bg-success\"></div>\n                    </div>\n                    <div>\n                        <div class=\"text-truncate\">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>\n                        <div class=\"small text-gray-500\">Chicken the Dog · 2w</div>\n                    </div>\n                </a>\n                <a class=\"dropdown-item text-center small text-gray-500\" href=\"#\">Read More Messages</a>\n            </div>\n        </li>\n\n        <div class=\"topbar-divider d-none d-sm-block\"></div>\n\n        <!-- Nav Item - User Information -->\n        <li class=\"nav-item dropdown no-arrow\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">Valerie Luna</span>\n                <img class=\"img-profile rounded-circle\" src=\"https://source.unsplash.com/QAB-WJcbgJk/60x60\">\n            </a>\n            <!-- Dropdown - User Information -->\n            <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"userDropdown\">\n                <a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fas fa-user fa-sm fa-fw mr-2 text-gray-400\"></i> Profile\n                </a>\n                <a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400\"></i> Settings\n                </a>\n                <a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fas fa-list fa-sm fa-fw mr-2 text-gray-400\"></i> Activity Log\n                </a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#logoutModal\">\n                    <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i> Logout\n                </a>\n            </div>\n        </li>\n\n    </ul>\n\n</nav>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".posicion {\n    position: fixed;\n}\n\n.my-fixed-item {\n    position: fixed;\n    min-height: 120px;\n    width: 252px;\n    text-align: center;\n    word-wrap: break-word;\n    background-color: aquamarine;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3NpY2lvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4ubXktZml4ZWQtaXRlbSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICAgIHdpZHRoOiAyNTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.theme = 'blue';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _element_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./element.module */ "./src/app/element.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _element_module__WEBPACK_IMPORTED_MODULE_4__["ElementModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/chat/animations.ts":
/*!************************************!*\
  !*** ./src/app/chat/animations.ts ***!
  \************************************/
/*! exports provided: fadeInOut, fadeIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInOut", function() { return fadeInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

const fadeInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(250)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
        }))
    ])
]);
const fadeIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeIn', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1)
    ]),
]);


/***/ }),

/***/ "./src/app/chat/chat-avatar/chat-avatar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/chat/chat-avatar/chat-avatar.component.ts ***!
  \***********************************************************/
/*! exports provided: ChatAvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatAvatarComponent", function() { return ChatAvatarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatAvatarComponent = class ChatAvatarComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChatAvatarComponent.prototype, "image", void 0);
ChatAvatarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'chat-avatar',
        template: `
    <img [attr.src]="image" class="avatar" />
  `,
        styles: ["\n    .avatar {\n      height: 30px;\n      width: 30px;\n      border-radius: 50%;\n      float: left;\n      margin-right: 10px;\n    }\n  "]
    })
], ChatAvatarComponent);



/***/ }),

/***/ "./src/app/chat/chat-config/chat-config.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/chat/chat-config/chat-config.component.ts ***!
  \***********************************************************/
/*! exports provided: ChatConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatConfigComponent", function() { return ChatConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_chatbot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chatbot.service */ "./src/app/services/chatbot.service.ts");



let ChatConfigComponent = class ChatConfigComponent {
    constructor(chatbotService) {
        this.chatbotService = chatbotService;
        this.chatbotMensajes = {
            mensajeInicial: '',
            instrucciones1: [{}],
            instrucciones2: [{}]
        };
        this.chatbotConfig = {
            instrucciones: [],
            opcioneSecundaria: [{}]
        };
        this.probarChat = false;
        this.text = 'Selecciona un diseño';
        this.themeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.themes = ['blue', 'grey', 'red'];
    }
    setTheme(theme) {
        this.theme = theme;
        this.themeChange.emit(this.theme);
    }
    agregarInstruccion(form) {
        this.chatbotConfig.instrucciones.push({ opcion: form.value.instrucciones });
        form.value.instrucciones = '';
    }
    opcion2(opcionSecundaria, opcionPrimaria) {
        console.log(opcionSecundaria, opcionPrimaria);
    }
    Eliminar(i) {
        this.chatbotConfig.instrucciones.splice(i, 1);
    }
};
ChatConfigComponent.ctorParameters = () => [
    { type: _services_chatbot_service__WEBPACK_IMPORTED_MODULE_2__["ChatbotService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChatConfigComponent.prototype, "theme", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChatConfigComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ChatConfigComponent.prototype, "themeChange", void 0);
ChatConfigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'chat-config',
        template: __webpack_require__(/*! raw-loader!./chat-config.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/chat-config/chat-config.component.html"),
        styles: ["\n    .chat-config {\n      padding: 20px;\n    }\n    .btn {\n      padding: 5px;\n      margin: 0px 2px;\n      border: 1px solid #dedede;\n      outline: none;\n    }\n    .btn-active {\n      border: 1px solid #a0a0a0;\n    }\n    .btn:focus {\n      border: 1px solid #333;\n    }\n  "]
    })
], ChatConfigComponent);



/***/ }),

/***/ "./src/app/chat/chat-input/chat-input.component.css":
/*!**********************************************************!*\
  !*** ./src/app/chat/chat-input/chat-input.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-input-text {\n  margin: 14px 0 0 14px;\n  height: 25px;\n  width: 70%;\n  border: 0;\n  resize: none;\n  border: none;\n  overflow: auto;\n  outline: none;\n  box-shadow: none;\n  font-size: 14px;\n  background-color: inherit;\n  color: inherit;\n}\n\n.chat-input-text::-webkit-input-placeholder {\n  color: inherit;\n}\n\n.chat-input-text::-moz-placeholder {\n  color: inherit;\n}\n\n.chat-input-text::-ms-input-placeholder {\n  color: inherit;\n}\n\n.chat-input-submit {\n  margin: 14px 12px;\n  float: right;\n  background-color: inherit;\n  color: inherit;\n  font-size: 24px;\n  border: 0;\n  outline: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LWlucHV0L2NoYXQtaW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsU0FBUztFQUNULGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC1pbnB1dC9jaGF0LWlucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1pbnB1dC10ZXh0IHtcbiAgbWFyZ2luOiAxNHB4IDAgMCAxNHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiA3MCU7XG4gIGJvcmRlcjogMDtcbiAgcmVzaXplOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4uY2hhdC1pbnB1dC10ZXh0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4uY2hhdC1pbnB1dC10ZXh0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4uY2hhdC1pbnB1dC10ZXh0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLmNoYXQtaW5wdXQtc3VibWl0IHtcbiAgbWFyZ2luOiAxNHB4IDEycHg7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/chat/chat-input/chat-input.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/chat/chat-input/chat-input.component.ts ***!
  \*********************************************************/
/*! exports provided: ChatInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatInputComponent", function() { return ChatInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatInputComponent = class ChatInputComponent {
    constructor() {
        this.buttonText = '↩︎';
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.send = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.focus.subscribe(() => this.focusMessage());
    }
    focusMessage() {
        this.message.nativeElement.focus();
    }
    getMessage() {
        return this.message.nativeElement.value;
    }
    clearMessage() {
        this.message.nativeElement.value = '';
    }
    onSubmit() {
        const message = this.getMessage();
        if (message.trim() === '') {
            return;
        }
        this.send.emit({ message });
        this.clearMessage();
        this.focusMessage();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChatInputComponent.prototype, "buttonText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChatInputComponent.prototype, "focus", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ChatInputComponent.prototype, "send", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ChatInputComponent.prototype, "dismiss", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('message', { static: false })
], ChatInputComponent.prototype, "message", void 0);
ChatInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'chat-input',
        template: `
    <textarea type="text" class="chat-input-text" placeholder="Type message..."
              #message (keydown.enter)="onSubmit()" (keyup.enter)="message.value = ''" (keyup.escape)="dismiss.emit()"></textarea>
    <button type="submit" class="chat-input-submit" (click)="onSubmit()">
      {{buttonText}}
    </button>
  `,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./chat-input.component.css */ "./src/app/chat/chat-input/chat-input.component.css")]
    })
], ChatInputComponent);



/***/ }),

/***/ "./src/app/chat/chat-widget/chat-widget.component.css":
/*!************************************************************!*\
  !*** ./src/app/chat/chat-widget/chat-widget.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    box-sizing: border-box;\n    position: relative;\n    font-family: \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.wrapper {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\n.chat-button {\n    z-index: 1;\n    width: 60px;\n    height: 60px;\n    position: fixed;\n    bottom: 20px;\n    right: 40px;\n    box-shadow: 0 5px 40px rgba(0, 0, 0, 0.16);\n    background: #1976d2;\n    border-radius: 50%;\n    border: none;\n    outline: none;\n    color: #fff;\n    font-size: 32px;\n}\n\n.chat-button-header {\n    z-index: 1;\n    font-weight: bold;\n    color: #fff;\n    border: 1px solid #fff;\n    background-color: inherit;\n    padding: 5px 9px;\n    margin-left: 5px;\n}\n\n.chat-button:focus {\n    border: 2px solid white;\n}\n\n.chat-box {\n    z-index: 2;\n    position: fixed;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    box-shadow: 0 5px 40px rgba(0, 0, 0, 0.16);\n    background: #1976d2;\n}\n\n.chat-box-hidden {\n    display: none;\n}\n\n.chat-box-header {\n    padding: 10px;\n    color: #fff;\n}\n\n.chat-box-main {\n    flex: 1;\n    width: 100%;\n    background: #f5f5f5;\n    display: flex;\n    flex-direction: column-reverse;\n    overflow: auto;\n}\n\n.chat-box-footer {\n    color: #fff;\n    height: 50px;\n}\n\n.operator-name {\n    margin: 0;\n    padding: 1px;\n}\n\n.operator-status {\n    float: right;\n    padding: 4px;\n}\n\n.operator-status span {\n    margin-left: 4px;\n}\n\n.operator-status-online {\n    color: lawngreen;\n}\n\n.operator-status-offline {\n    color: red;\n}\n\n.operator-avatar {\n    height: 30px;\n    width: 30px;\n    border-radius: 50%;\n    float: left;\n    margin-right: 10px;\n}\n\n.chat-message {\n    display: block;\n    width: auto;\n    margin: 5px;\n    align-self: flex-start;\n    flex-direction: row;\n    max-width: 80%;\n    word-wrap: break-word;\n}\n\n.chat-message-date {\n    font-size: 11px;\n    color: #8D898D;\n    padding: 5px;\n}\n\n.chat-message-from-avatar {\n    height: 35px;\n    width: 35px;\n    border-radius: 50%;\n}\n\n.chat-message-text {\n    margin-left: 10px;\n    padding: 10px;\n    border-radius: 3px;\n}\n\n/**\nReceived message style\n */\n\n.chat-message-received {\n    margin-right: 50px;\n}\n\n.chat-message-received .chat-message-text {\n    background: #B9D6F2;\n    margin-left: 50px;\n    border-bottom-left-radius: 0;\n}\n\n.chat-message-received .chat-message-text:before {\n    position: absolute;\n    content: \" \";\n    left: -10px;\n    bottom: 0;\n    border-right: solid 10px #B9D6F2;\n    border-top: solid 10px transparent;\n    z-index: 0;\n}\n\n.chat-message-received .chat-message-date {\n    margin-left: 50px;\n}\n\n.chat-message-received .chat-message-from-avatar {\n    position: absolute;\n    left: 0;\n    bottom: -15px;\n}\n\n/**\nSent message style\n */\n\n.chat-message-sent {\n    align-self: flex-end;\n}\n\n.chat-message-sent .chat-message-from {\n    float: right;\n}\n\n.chat-message-sent .chat-message-text {\n    background: #84DCCF;\n    margin-right: 50px;\n    border-bottom-right-radius: 0;\n}\n\n.chat-message-sent .chat-message-text:after {\n    position: fixed;\n    content: \" \";\n    right: -10px;\n    bottom: 0;\n    border-left: solid 10px #84DCCF;\n    border-top: solid 10px transparent;\n    z-index: 0;\n}\n\n.chat-message-sent .chat-message-date {\n    text-align: right;\n    padding-right: 50px;\n}\n\n.chat-message-sent .chat-message-from-avatar {\n    position: absolute;\n    right: 0;\n    bottom: -15px;\n}\n\n.blue .chat-button {\n    background: #1976d2;\n}\n\n.blue .chat-box {\n    background: #1976d2;\n}\n\n.grey .chat-button {\n    background: #454549;\n}\n\n.grey .chat-box {\n    background: #454549;\n}\n\n.red .chat-button {\n    background: #DD0031;\n}\n\n.red .chat-box {\n    background: #DD0031;\n}\n\n/* Small devices (landscape phones, 576px and up)*/\n\n@media (min-width: 576px) {\n    .wrapper {\n        top: auto;\n        right: 0;\n        width: 300px;\n    }\n    .chat-button {\n        display: block;\n    }\n    .chat-button-header {\n        display: none;\n    }\n    .chat-box {\n        top: auto;\n        left: auto;\n        bottom: 100px;\n        right: 40px;\n        height: 60vh;\n        width: 400px;\n        border-radius: 10px;\n    }\n}\n\n/* Medium devices (tablets, 768px and up)*/\n\n@media (min-width: 768px) {\n    .chat-box {\n        height: 70vh;\n    }\n}\n\n/* Large devices (desktops, 992px and up)*/\n\n@media (min-width: 992px) {\n    .chat-box {\n        height: 80vh;\n    }\n}\n\n/* Extra large devices (large desktops, 1200px and up)*/\n\n@media (min-width: 1200px) {\n    .chat-box {\n        /*height: 80vh;*/\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LXdpZGdldC9jaGF0LXdpZGdldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFNBQVM7SUFDVCxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLE9BQU87SUFDUCxhQUFhO0lBQ2IsWUFBWTtJQUNaLFNBQVM7SUFDVCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDBDQUEwQztJQUMxQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLE9BQU87SUFDUCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUdBOztFQUVFOztBQUVGO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLGtDQUFrQztJQUNsQyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLGFBQWE7QUFDakI7O0FBR0E7O0VBRUU7O0FBRUY7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLGtDQUFrQztJQUNsQyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUdBLGtEQUFrRDs7QUFFbEQ7SUFDSTtRQUNJLFNBQVM7UUFDVCxRQUFRO1FBQ1IsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksU0FBUztRQUNULFVBQVU7UUFDVixhQUFhO1FBQ2IsV0FBVztRQUNYLFlBQVk7UUFDWixZQUFZO1FBQ1osbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBR0EsMENBQTBDOztBQUUxQztJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUdBLDBDQUEwQzs7QUFFMUM7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFHQSx1REFBdUQ7O0FBRXZEO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC13aWRnZXQvY2hhdC13aWRnZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi53cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbn1cblxuLmNoYXQtYnV0dG9uIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHJpZ2h0OiA0MHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICBiYWNrZ3JvdW5kOiAjMTk3NmQyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDMycHg7XG59XG5cbi5jaGF0LWJ1dHRvbi1oZWFkZXIge1xuICAgIHotaW5kZXg6IDE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIHBhZGRpbmc6IDVweCA5cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmNoYXQtYnV0dG9uOmZvY3VzIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmNoYXQtYm94IHtcbiAgICB6LWluZGV4OiAyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm94LXNoYWRvdzogMCA1cHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIGJhY2tncm91bmQ6ICMxOTc2ZDI7XG59XG5cbi5jaGF0LWJveC1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jaGF0LWJveC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5jaGF0LWJveC1tYWluIHtcbiAgICBmbGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5jaGF0LWJveC1mb290ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLm9wZXJhdG9yLW5hbWUge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxcHg7XG59XG5cbi5vcGVyYXRvci1zdGF0dXMge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nOiA0cHg7XG59XG5cbi5vcGVyYXRvci1zdGF0dXMgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLm9wZXJhdG9yLXN0YXR1cy1vbmxpbmUge1xuICAgIGNvbG9yOiBsYXduZ3JlZW47XG59XG5cbi5vcGVyYXRvci1zdGF0dXMtb2ZmbGluZSB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLm9wZXJhdG9yLWF2YXRhciB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jaGF0LW1lc3NhZ2Uge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5jaGF0LW1lc3NhZ2UtZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjOEQ4OThEO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmNoYXQtbWVzc2FnZS1mcm9tLWF2YXRhciB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNoYXQtbWVzc2FnZS10ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuXG4vKipcblJlY2VpdmVkIG1lc3NhZ2Ugc3R5bGVcbiAqL1xuXG4uY2hhdC1tZXNzYWdlLXJlY2VpdmVkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5cbi5jaGF0LW1lc3NhZ2UtcmVjZWl2ZWQgLmNoYXQtbWVzc2FnZS10ZXh0IHtcbiAgICBiYWNrZ3JvdW5kOiAjQjlENkYyO1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG5cbi5jaGF0LW1lc3NhZ2UtcmVjZWl2ZWQgLmNoYXQtbWVzc2FnZS10ZXh0OmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGxlZnQ6IC0xMHB4O1xuICAgIGJvdHRvbTogMDtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDEwcHggI0I5RDZGMjtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxMHB4IHRyYW5zcGFyZW50O1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi5jaGF0LW1lc3NhZ2UtcmVjZWl2ZWQgLmNoYXQtbWVzc2FnZS1kYXRlIHtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLmNoYXQtbWVzc2FnZS1yZWNlaXZlZCAuY2hhdC1tZXNzYWdlLWZyb20tYXZhdGFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IC0xNXB4O1xufVxuXG5cbi8qKlxuU2VudCBtZXNzYWdlIHN0eWxlXG4gKi9cblxuLmNoYXQtbWVzc2FnZS1zZW50IHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLmNoYXQtbWVzc2FnZS1zZW50IC5jaGF0LW1lc3NhZ2UtZnJvbSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uY2hhdC1tZXNzYWdlLXNlbnQgLmNoYXQtbWVzc2FnZS10ZXh0IHtcbiAgICBiYWNrZ3JvdW5kOiAjODREQ0NGO1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuLmNoYXQtbWVzc2FnZS1zZW50IC5jaGF0LW1lc3NhZ2UtdGV4dDphZnRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIHJpZ2h0OiAtMTBweDtcbiAgICBib3R0b206IDA7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDEwcHggIzg0RENDRjtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxMHB4IHRyYW5zcGFyZW50O1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi5jaGF0LW1lc3NhZ2Utc2VudCAuY2hhdC1tZXNzYWdlLWRhdGUge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG5cbi5jaGF0LW1lc3NhZ2Utc2VudCAuY2hhdC1tZXNzYWdlLWZyb20tYXZhdGFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAtMTVweDtcbn1cblxuLmJsdWUgLmNoYXQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTk3NmQyO1xufVxuXG4uYmx1ZSAuY2hhdC1ib3gge1xuICAgIGJhY2tncm91bmQ6ICMxOTc2ZDI7XG59XG5cbi5ncmV5IC5jaGF0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogIzQ1NDU0OTtcbn1cblxuLmdyZXkgLmNoYXQtYm94IHtcbiAgICBiYWNrZ3JvdW5kOiAjNDU0NTQ5O1xufVxuXG4ucmVkIC5jaGF0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogI0REMDAzMTtcbn1cblxuLnJlZCAuY2hhdC1ib3gge1xuICAgIGJhY2tncm91bmQ6ICNERDAwMzE7XG59XG5cblxuLyogU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKSovXG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAgIC53cmFwcGVyIHtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cbiAgICAuY2hhdC1idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmNoYXQtYnV0dG9uLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5jaGF0LWJveCB7XG4gICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgYm90dG9tOiAxMDBweDtcbiAgICAgICAgcmlnaHQ6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNjB2aDtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbn1cblxuXG4vKiBNZWRpdW0gZGV2aWNlcyAodGFibGV0cywgNzY4cHggYW5kIHVwKSovXG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5jaGF0LWJveCB7XG4gICAgICAgIGhlaWdodDogNzB2aDtcbiAgICB9XG59XG5cblxuLyogTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkqL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuY2hhdC1ib3gge1xuICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgfVxufVxuXG5cbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSovXG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuY2hhdC1ib3gge1xuICAgICAgICAvKmhlaWdodDogODB2aDsqL1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/chat/chat-widget/chat-widget.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/chat/chat-widget/chat-widget.component.ts ***!
  \***********************************************************/
/*! exports provided: ChatWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWidgetComponent", function() { return ChatWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations */ "./src/app/chat/animations.ts");
/* harmony import */ var _services_chatbot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/chatbot.service */ "./src/app/services/chatbot.service.ts");





const randomMessages = [];
const rand = max => Math.floor(Math.random() * max);
const getRandomMessage = () => randomMessages[rand(randomMessages.length)];
let ChatWidgetComponent = class ChatWidgetComponent {
    constructor(chatbotService) {
        this.chatbotService = chatbotService;
        this.theme = 'blue';
        this.chatbotMensajes = {};
        this.formularioBot = {
            nombre: '',
            email: '',
            telefono: ''
        };
        this.datosIngresadoCorrectos = true;
        this.compraDeHosting = true;
        this.compraDeResellerHosting = true;
        this.listaDeProductos = false;
        this.compraProducto = true;
        this._visible = false;
        this.focus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.operator = {
            name: 'Operador',
            status: 'online',
            avatar: `https://randomuser.me/api/portraits/women/${rand(100)}.jpg`,
        };
        this.client = {
            name: 'Guest User',
            status: 'online',
            avatar: `https://randomuser.me/api/portraits/men/${rand(100)}.jpg`,
        };
        this.messages = [];
        this.chatbotMensajes = chatbotService.chatbotMensajes;
    }
    get visible() {
        return this._visible;
    }
    set visible(visible) {
        this._visible = visible;
        if (this._visible) {
            setTimeout(() => {
                this.scrollToBottom();
                this.focusMessage();
            }, 0);
        }
    }
    addMessage(from, text, type) {
        this.messages.unshift({
            from,
            text,
            type,
            date: new Date().getTime(),
        });
        this.scrollToBottom();
    }
    scrollToBottom() {
        if (this.bottom !== undefined) {
            return this.bottom.nativeElement.scrollIntoView();
        }
    }
    focusMessage() {
        this.focus.next(true);
    }
    randomMessage() {
        this.addMessage(this.operator, getRandomMessage(), 'received');
    }
    ngOnInit() {
        setTimeout(() => this.visible = true, 1000);
        setTimeout(() => {
            this.addMessage(this.operator, this.chatbotService.chatbotMensajes.mensajeInicial, 'received');
        }, 1500);
        setTimeout(() => {
            this.addMessage(this.operator, `para empezar dinos como te llamas?`, 'received');
        }, 3000);
    }
    toggleChat() {
        this.visible = !this.visible;
    }
    sendMessage({ message }) {
        if (message.trim() === '') {
            return;
        }
        this.addMessage(this.client, message, 'sent');
        if (this.formularioBot.nombre === '') {
            this.formularioBot.nombre = message;
            return setTimeout(() => { this.addMessage(this.operator, `Ahora ingresa tu email`, 'received'); }, 1500);
        }
        ;
        if (this.formularioBot.email === '') {
            this.formularioBot.email = message;
            return setTimeout(() => { this.addMessage(this.operator, `Ahora ingresa tu telefono`, 'received'); }, 1500);
        }
        if (this.formularioBot.telefono === '') {
            this.formularioBot.telefono = message;
            return setTimeout(() => {
                this.datosIngresadoCorrectos = false;
                this.addMessage(this.operator, `!Estos son tus datos que ingresastes: 

      nombre: ${this.formularioBot.nombre},
      email: ${this.formularioBot.email},
      telefono: ${this.formularioBot.telefono}.

      Son tus datos correctos?
      `, 'received');
            }, 1500);
        }
        setTimeout(() => {
            this.addMessage(this.operator, `No nos hemos olvidado de usted ${this.formularioBot.nombre}, les notificaremos a travez de su correo o celular sobre nuestro servicio `, 'received');
        }, 1500);
    }
    handleKeyboardEvent(event) {
        if (event.key === '/') {
            this.focusMessage();
        }
        if (event.key === '?' && !this._visible) {
            this.toggleChat();
        }
    }
    preguntas(instruccion) {
        this.addMessage(this.client, instruccion, 'sent');
        if (instruccion === 'Si') {
            return setTimeout(() => {
                this.chatbotService.enviarDatosCliente(this.formularioBot).subscribe((resp) => {
                    console.log(resp);
                });
                this.listaDeProductos = true;
                this.datosIngresadoCorrectos = true;
                this.addMessage(this.operator, `- Bienvenido ${this.formularioBot.nombre}, Te gustaria comprar uno de nuestros productos o gustas de esperar a que te atienda uno de nuestros asesores de ventas `, 'received');
            }, 1500);
        }
        if (instruccion === 'No') {
            this.datosIngresadoCorrectos = true;
            this.formularioBot.nombre = '';
            this.formularioBot.email = '';
            this.formularioBot.telefono = '';
            return setTimeout(() => {
                this.addMessage(this.operator, `para empezar dinos como te llamas?`, 'received');
            }, 2000);
        }
        if (instruccion === 'compra de producto') {
            return setTimeout(() => {
                this.listaDeProductos = false;
                this.addMessage(this.operator, `Acontinuacion aqui te damos varios productos que tenemos en venta`, 'received');
            }, 2000);
        }
        if (instruccion === 'esperar asesor de ventas') {
            return setTimeout(() => {
                this.listaDeProductos = false;
                this.addMessage(this.operator, `Muy bien, en breve uno de nuestro asesores de venta lo estara llamando atravez de su celular o por su email, este pendiente porfavor. Muchas gracias`, 'received');
            }, 2000);
        }
        if (instruccion === 'compra de hosting') {
            return setTimeout(() => {
                this.compraProducto = false;
                this.addMessage(this.operator, `Aqui tenemos el precio de nuestro hosting`, 'received');
            }, 2000);
        }
        if (instruccion === 'compra de reseller') {
            return setTimeout(() => {
                this.compraProducto = false;
                this.addMessage(this.operator, `Aqui tenemos el precio de nuestro reseller hosting`, 'received');
            }, 2000);
        }
        if (instruccion === '6$ Trimestral') {
            return setTimeout(() => {
                this.compraDeHosting = false;
                const compra = { producto: 'Hosting', precio: instruccion, estatus: 'Pendiente' };
                this.chatbotService.enviarProductos(compra).subscribe((resp) => {
                    console.log(resp);
                });
                this.addMessage(this.operator, `Acaba de comprar nuestro producto de hosting por ${instruccion}, en breve uno de nuestro asesore se pondra en contacto contigo atravez de tu celular o email, este atento porfavor, Muchas gracias`, 'received');
            }, 2000);
        }
        if (instruccion === '8$ Semestral') {
            return setTimeout(() => {
                this.compraDeHosting = false;
                this.chatbotService.enviarProductos({ producto: 'Hosting', precio: instruccion, estatus: 'Pendiente' }).subscribe((resp) => {
                    console.log(resp);
                });
                this.addMessage(this.operator, `Acaba de comprar nuestro producto de hosting por ${instruccion}, en breve uno de nuestro asesore se pondra en contacto contigo atravez de tu celular o email, este atento porfavor, Muchas gracias`, 'received');
            }, 2000);
        }
        if (instruccion === '10$ Anual') {
            return setTimeout(() => {
                this.compraDeHosting = false;
                this.chatbotService.enviarProductos({ producto: 'Hosting', precio: instruccion, estatus: 'Pendiente' }).subscribe((resp) => {
                    console.log(resp);
                });
                this.addMessage(this.operator, `Acaba de comprar nuestro producto de hosting por ${instruccion}, en breve uno de nuestro asesore se pondra en contacto contigo atravez de tu celular o email, este atento porfavor, Muchas gracias`, 'received');
            }, 2000);
        }
        if (instruccion === '10$ Trimestral') {
            return setTimeout(() => {
                this.chatbotService.enviarProductos({ producto: 'Reseller Hosting', precio: instruccion, estatus: 'Pendiente' }).subscribe((resp) => {
                    console.log(resp);
                });
                this.compraDeResellerHosting = false;
                this.addMessage(this.operator, `Acaba de comprar nuestro producto de reseller hosting por ${instruccion}, en breve uno de nuestro asesore se pondra en contacto contigo atravez de tu celular o email, este atento porfavor, Muchas gracias`, 'received');
            }, 2000);
        }
        if (instruccion === '13$ Semestral') {
            return setTimeout(() => {
                this.compraDeResellerHosting = false;
                this.chatbotService.enviarProductos({ producto: 'Reseller Hosting', precio: instruccion, estatus: 'Pendiente' }).subscribe((resp) => {
                    console.log(resp);
                });
                this.addMessage(this.operator, `Acaba de comprar nuestro producto de hosting por ${instruccion}, en breve uno de nuestro asesore se pondra en contacto contigo atravez de tu celular o email, este atento porfavor, Muchas gracias`, 'received');
            }, 2000);
        }
        if (instruccion === '20$ Anual') {
            return setTimeout(() => {
                this.compraDeResellerHosting = false;
                this.chatbotService.enviarProductos({ producto: 'Reseller Hosting', precio: instruccion, estatus: 'Pendiente' }).subscribe((resp) => {
                    console.log(resp);
                });
                this.addMessage(this.operator, `Acaba de comprar nuestro producto de hosting por ${instruccion}, en breve uno de nuestro asesore se pondra en contacto contigo atravez de tu celular o email, este atento porfavor, Muchas gracias`, 'received');
            }, 2000);
        }
    }
    preguntas2(opcion, tarea) {
        console.log(tarea);
        this.addMessage(this.client, opcion, 'sent');
        setTimeout(() => {
            this.addMessage(this.operator, tarea, 'received');
        }, 1500);
    }
};
ChatWidgetComponent.ctorParameters = () => [
    { type: _services_chatbot_service__WEBPACK_IMPORTED_MODULE_4__["ChatbotService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bottom', { static: true })
], ChatWidgetComponent.prototype, "bottom", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChatWidgetComponent.prototype, "theme", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChatWidgetComponent.prototype, "visible", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keypress', ['$event'])
], ChatWidgetComponent.prototype, "handleKeyboardEvent", null);
ChatWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'chat-widget',
        template: __webpack_require__(/*! raw-loader!./chat-widget.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/chat-widget/chat-widget.component.html"),
        animations: [_animations__WEBPACK_IMPORTED_MODULE_3__["fadeInOut"], _animations__WEBPACK_IMPORTED_MODULE_3__["fadeIn"]],
        styles: [__webpack_require__(/*! ./chat-widget.component.css */ "./src/app/chat/chat-widget/chat-widget.component.css")]
    })
], ChatWidgetComponent);



/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _chat_avatar_chat_avatar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-avatar/chat-avatar.component */ "./src/app/chat/chat-avatar/chat-avatar.component.ts");
/* harmony import */ var _chat_widget_chat_widget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-widget/chat-widget.component */ "./src/app/chat/chat-widget/chat-widget.component.ts");
/* harmony import */ var _chat_input_chat_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-input/chat-input.component */ "./src/app/chat/chat-input/chat-input.component.ts");
/* harmony import */ var _chat_config_chat_config_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-config/chat-config.component */ "./src/app/chat/chat-config/chat-config.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");









let ChatModule = class ChatModule {
};
ChatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
        declarations: [_chat_avatar_chat_avatar_component__WEBPACK_IMPORTED_MODULE_3__["ChatAvatarComponent"], _chat_widget_chat_widget_component__WEBPACK_IMPORTED_MODULE_4__["ChatWidgetComponent"], _chat_input_chat_input_component__WEBPACK_IMPORTED_MODULE_5__["ChatInputComponent"], _chat_config_chat_config_component__WEBPACK_IMPORTED_MODULE_6__["ChatConfigComponent"]],
        exports: [_chat_widget_chat_widget_component__WEBPACK_IMPORTED_MODULE_4__["ChatWidgetComponent"], _chat_config_chat_config_component__WEBPACK_IMPORTED_MODULE_6__["ChatConfigComponent"]],
        entryComponents: [_chat_widget_chat_widget_component__WEBPACK_IMPORTED_MODULE_4__["ChatWidgetComponent"], _chat_config_chat_config_component__WEBPACK_IMPORTED_MODULE_6__["ChatConfigComponent"]],
    })
], ChatModule);



/***/ }),

/***/ "./src/app/chat/index.ts":
/*!*******************************!*\
  !*** ./src/app/chat/index.ts ***!
  \*******************************/
/*! exports provided: ChatConfigComponent, ChatWidgetComponent, ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_config_chat_config_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-config/chat-config.component */ "./src/app/chat/chat-config/chat-config.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChatConfigComponent", function() { return _chat_config_chat_config_component__WEBPACK_IMPORTED_MODULE_0__["ChatConfigComponent"]; });

/* harmony import */ var _chat_widget_chat_widget_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-widget/chat-widget.component */ "./src/app/chat/chat-widget/chat-widget.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChatWidgetComponent", function() { return _chat_widget_chat_widget_component__WEBPACK_IMPORTED_MODULE_1__["ChatWidgetComponent"]; });

/* harmony import */ var _chat_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.module */ "./src/app/chat/chat.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return _chat_module__WEBPACK_IMPORTED_MODULE_2__["ChatModule"]; });






/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/components/pages/pages.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components.routing */ "./src/app/components/components.routing.ts");
/* harmony import */ var _element_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../element.module */ "./src/app/element.module.ts");










let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _components_routing__WEBPACK_IMPORTED_MODULE_8__["ComponentsRoutingModule"],
            _element_module__WEBPACK_IMPORTED_MODULE_9__["ElementModule"]
        ],
        declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _pages_pages_component__WEBPACK_IMPORTED_MODULE_4__["PagesComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
        exports: [
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _components_routing__WEBPACK_IMPORTED_MODULE_8__["ComponentsRoutingModule"], _pages_pages_component__WEBPACK_IMPORTED_MODULE_4__["PagesComponent"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/components.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/components/components.routing.ts ***!
  \**************************************************/
/*! exports provided: ComponentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsRoutingModule", function() { return ComponentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/components/pages/pages.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _chat_chat_config_chat_config_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chat/chat-config/chat-config.component */ "./src/app/chat/chat-config/chat-config.component.ts");



// components



const routesPage = [
    { path: '', component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"], children: [
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
            { path: 'chatConfig', component: _chat_chat_config_chat_config_component__WEBPACK_IMPORTED_MODULE_5__["ChatConfigComponent"] },
            { path: '**', redirectTo: 'dashboard' }
        ] }
];
let ComponentsRoutingModule = class ComponentsRoutingModule {
};
ComponentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routesPage)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ComponentsRoutingModule);



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alto {\r\n    height: 300px;\r\n    overflow: hidden;\r\n}\r\n\r\n.scroll {\r\n    overflow-y: scroll;\r\n    height: 250px;\r\n    /*background:gray;*/\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsdG8ge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zY3JvbGwge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIC8qYmFja2dyb3VuZDpncmF5OyovXHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_chatbot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/chatbot.service */ "./src/app/services/chatbot.service.ts");



let DashboardComponent = class DashboardComponent {
    constructor(chatbotService) {
        this.chatbotService = chatbotService;
        this.datosClientes = [];
        this.datosProductos = [];
    }
    ngOnInit() {
        this.listarProductos();
        this.listarClientes();
        setInterval(() => {
            this.listarClientes();
            this.listarProductos();
        }, 1000);
    }
    listarClientes() {
        this.chatbotService.listarDatosCliente().subscribe((resp) => {
            // console.log(resp)
            this.datosClientes = resp;
        });
    }
    listarProductos() {
        this.chatbotService.listarProductos().subscribe((resp) => {
            this.datosProductos = resp;
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: src_app_services_chatbot_service__WEBPACK_IMPORTED_MODULE_2__["ChatbotService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/pages/pages.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/pages/pages.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcGFnZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/pages/pages.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/pages/pages.component.ts ***!
  \*****************************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagesComponent = class PagesComponent {
    constructor() { }
    ngOnInit() {
    }
};
PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pages',
        template: __webpack_require__(/*! raw-loader!./pages.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/pages.component.html"),
        styles: [__webpack_require__(/*! ./pages.component.css */ "./src/app/components/pages/pages.component.css")]
    })
], PagesComponent);



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ToolbarComponent = class ToolbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toolbar',
        template: __webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/toolbar/toolbar.component.html"),
        styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/components/toolbar/toolbar.component.css")]
    })
], ToolbarComponent);



/***/ }),

/***/ "./src/app/element.module.ts":
/*!***********************************!*\
  !*** ./src/app/element.module.ts ***!
  \***********************************/
/*! exports provided: ElementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementModule", function() { return ElementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/elements */ "./node_modules/@angular/elements/fesm2015/elements.js");
/* harmony import */ var _chat___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat/ */ "./src/app/chat/index.ts");






let ElementModule = class ElementModule {
    constructor(injector) {
        this.injector = injector;
    }
    ngDoBootstrap() {
        const chatConfig = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_4__["createCustomElement"])(_chat___WEBPACK_IMPORTED_MODULE_5__["ChatConfigComponent"], {
            injector: this.injector,
        });
        const chatWidget = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_4__["createCustomElement"])(_chat___WEBPACK_IMPORTED_MODULE_5__["ChatWidgetComponent"], {
            injector: this.injector,
        });
        customElements.define('chat-config', chatConfig);
        customElements.define('chat-widget', chatWidget);
    }
};
ElementModule.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"] }
];
ElementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _chat___WEBPACK_IMPORTED_MODULE_5__["ChatModule"]],
        exports: [_chat___WEBPACK_IMPORTED_MODULE_5__["ChatModule"]]
    })
], ElementModule);



/***/ }),

/***/ "./src/app/services/chatbot.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/chatbot.service.ts ***!
  \*********************************************/
/*! exports provided: ChatbotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotService", function() { return ChatbotService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ChatbotService = class ChatbotService {
    constructor(http) {
        this.http = http;
        this.URI = '';
        // http://localhost:80/chatbot/
        this.chatbotMensajes = {
            mensajeInicial: 'Hola, me llamo botMega y sere tu asistente virtual',
        };
    }
    enviarDatosCliente(body) {
        return this.http.post(`${this.URI}agregarCliente.php`, JSON.stringify(body));
    }
    enviarProductos(body) {
        return this.http.post(`${this.URI}agregarProducto.php`, JSON.stringify(body));
    }
    listarDatosCliente() {
        return this.http.get(`${this.URI}listarClientes.php`);
    }
    listarProductos() {
        return this.http.get(`${this.URI}listarProductos.php`);
    }
};
ChatbotService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ChatbotService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ChatbotService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Adclic 3\Desktop\chatbot\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map