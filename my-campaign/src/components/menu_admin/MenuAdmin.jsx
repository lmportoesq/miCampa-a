import '../menu_admin/menu_admin.css';

function MenuAdmin() {
    function handleClick() {
        window.location.href = '/create-campaign';
    }
    function handleClickLeader() {
        window.location.href = 'create-user'
    }
    function handleClickListLeaders() {
        window.location.href = '/query-leader'
    }
    function handleClickListFollowers() {
        window.location.href = '/query-followers'
    }
    function handleClickLogout() {
        localStorage.removeItem('token');
        window.location.href = '/';
    }
    return (
        <div className="main-nav">
            <div className="main-nav__list">
                <button className="button-nav" type="submit" onClick={handleClick} >Datos de la campaña</button>
                <button className="button-nav" type="submit" onClick={handleClickLeader}>Ingresar líderes</button>
                <button className="button-nav" type="submit">Poblaciones</button>
                <button className="button-nav" type="submit" onClick={handleClickListLeaders}>Listar líderes</button>
                <button className="button-nav" type="submit" onClick={handleClickListFollowers}>Listar seguidores</button>
                <button className="button-nav" type="submit" onClick={handleClickLogout}>Salir</button>
            </div>
        </div>
    )
}
export default MenuAdmin;
