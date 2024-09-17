<td>Autentica a los usuarios registrados para acceder a su cuenta.</td>
</tr>
<tr>
<td><strong>Actualización de perfil</strong></td>
<td>Permite que los usuarios actualicen su información personal.</td>
</tr>
<tr>
<td><strong>Recuperación de contraseña</strong></td>
<td>Envía un enlace para restablecer la contraseña en caso de olvido.</td>
</tr>
</tbody>
</table>
<h3 class="code-line" data-line-start=22 data-line-end=23 ><a id="Rutas_de_la_API_22"></a>Rutas de la API</h3>
<table class="table table-striped table-bordered">
<thead>
<tr>
<th>Método</th>
<th>Ruta</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>POST</code></td>
<td><code>/users/register</code></td>
<td>Registra un nuevo usuario.</td>
</tr>
<tr>
<td><code>POST</code></td>
<td><code>/users/login</code></td>
<td>Autentica a un usuario con credenciales válidas.</td>
</tr>
<tr>
<td><code>GET</code></td>
<td><code>/users/profile</code></td>
<td>Obtiene la información del perfil del usuario.</td>
</tr>
<tr>
<td><code>POST</code></td>
<td><code>/users/reset-password</code></td>
<td>Envía un enlace de recuperación de contraseña.</td>
</tr>
</tbody>
</table>
<h3 class="code-line" data-line-start=31 data-line-end=32 ><a id="Tecnologas_Utilizadas_31"></a>Tecnologías Utilizadas</h3>
<ul>
<li class="has-line-data" data-line-start="33" data-line-end="34"><strong>Express.js</strong> para el manejo de rutas y lógica de servidor.</li>
<li class="has-line-data" data-line-start="34" data-line-end="35"><strong>JWT (JSON Web Tokens)</strong> o <strong>Passport.js</strong> para la autenticación y autorización.</li>
<li class="has-line-data" data-line-start="35" data-line-end="37"><strong>bcrypt</strong> para la encriptación segura de contraseñas.</li>
</ul>
<h2 class="code-line" data-line-start=37 data-line-end=38 ><a id="Estructura_del_Proyecto_37"></a>Estructura del Proyecto</h2>
<pre><code class="has-line-data" data-line-start="40" data-line-end="47" class="language-bash">📁 user-management/
├── 📁 controllers/         <span class="hljs-comment"># Controladores de las rutas</span>
├── 📁 models/              <span class="hljs-comment"># Modelos de usuario y conexión a la base de datos</span>
├── 📁 routes/              <span class="hljs-comment"># Definición de las rutas de la API</span>
├── 📁 middleware/          <span class="hljs-comment"># Middlewares de autenticación</span>
├── 📁 config/              <span class="hljs-comment"># Configuraciones (ej. JWT, base de datos)</span>
└── server.js               <span class="hljs-comment"># Archivo principal de arranque del servidor</span>
</code></pre>