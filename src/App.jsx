import React from "react";

export default function App() {
  return (
    <div className="bg-gray-100 flex flex-col md:flex-row min-h-screen">
      {/* Mobile Menu Button */}
      <button id="mobile-menu-toggle" className="mobile-menu-button icon-button">
        <span className="material-icons">menu</span>
      </button>

      {/* Notification Icon */}
      <button id="notification-icon" className="notification-icon icon-button">
        <span className="material-icons">notifications</span>
        <span id="notification-count" className="notification-badge">0</span>
      </button>

      {/* LOGIN CONTAINER */}
      <div id="login-container" className="flex-1 flex items-center justify-center p-4">
        <div className="login-box">
          <img
            src="https://placehold.co/96x96/3498db/ffffff?text=DT"
            alt="DriveTrack Logo"
            className="login-logo"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Iniciar Sesión</h2>

          <div className="demo-creds">
            <p>
              <strong>Admin</strong> → user: <code>admin</code> · pass: <code>admin123</code>
            </p>
            <p>
              <strong>Conductor</strong> → user: <code>conductor1</code> · pass: <code>demo123</code>
            </p>
          </div>

          <form id="login-form">
            <input id="username" placeholder="Usuario" required />
            <input id="password" type="password" placeholder="Contraseña" required />
            <button type="submit">Entrar</button>
          </form>
          <p id="login-message" className="error-message"></p>
        </div>
      </div>

      {/* MAIN APP CONTAINER */}
      <div id="main-app-container" className="hidden flex-1 md:flex">
        <aside id="sidebar" className="sidebar md:w-64 flex-shrink-0 mobile-hidden">
          <div className="flex flex-col h-full">
            <div className="sidebar-header">
              <img
                src="https://placehold.co/40x40/3498db/ffffff?text=DT"
                className="app-logo"
                alt="App Logo"
              />
              <h3 className="text-xl font-semibold">DriveTrack</h3>
            </div>

            {/* ADMIN menu */}
            <nav id="admin-menu" className="nav-menu hidden flex-grow">
              <a data-section="dashboard">
                <span className="material-icons">dashboard</span>Dashboard
              </a>
              <a data-section="vehicles">
                <span className="material-icons">directions_car</span>Vehículos
              </a>
              <a data-section="drivers">
                <span className="material-icons">people</span>Conductores
              </a>
              <a data-section="accounts">
                <span className="material-icons">receipt_long</span>Cuentas
              </a>
              <a data-section="alerts">
                <span className="material-icons">notifications_active</span>Alertas
              </a>
              <a data-section="programmable-alerts">
                <span className="material-icons">schedule_send</span>Programar Alertas
              </a>
            </nav>

            {/* DRIVER menu */}
            <nav id="driver-menu" className="nav-menu hidden flex-grow">
              <a data-section="driver-home">
                <span className="material-icons">directions_car</span>Mi Auto
              </a>
              <a data-section="driver-account">
                <span className="material-icons">receipt_long</span>Mi Cuenta
              </a>
            </nav>

            <div className="dark-mode-toggle mt-4" id="dark-mode-toggle">
              <span className="material-icons">dark_mode</span>
            </div>

            <button id="logout-button" className="logout-button">
              Cerrar Sesión
            </button>
          </div>
        </aside>

        <main className="flex-1 p-4 md:p-8 overflow-y-auto pt-16 md:pt-8">
          {/* Aquí puedes pegar tus secciones como <section id="dashboard-section">...</section> */}
          <h1 className="text-2xl font-bold text-gray-800">¡Hola desde React!</h1>
          <p className="text-gray-600 mt-2">Tu interfaz ha sido migrada exitosamente.</p>
        </main>
      </div>
    </div>
  );
}
