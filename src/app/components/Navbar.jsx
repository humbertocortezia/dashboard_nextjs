export default function Navbar(){
  return (
    <>
    <div className="navbar bg-slate-950">
      <div className="flex-1">
        <a href="/" className="btn text-white text-3xl bg-slate-950 border-none">Finanças</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="text-white input input-bordered w-24 md:w-auto" />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="text text-white menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Perfil
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Configurações</a></li>
            <li><a>Sair</a></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}