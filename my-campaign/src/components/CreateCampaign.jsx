function CreateCampaign() {
    return (
        <div>
            <h1>Datos de la campaña</h1>
            <hr></hr>
            <form>
                <input type="text" placeholder="Nombre del candidato"></input>
                <input type="text" placeholder="Slogan de la campaña"></input>
                <input type="text" placeholder="Dirección del comando"></input>
                <input type="text" placeholder="Teléfono del comando"></input>
                <label htmlFor="type">Tipo de campaña</label>
                <select name="type">
                    <option value="alcaldia">Alcaldía</option>
                    <option value="gobernacion">Gobernación</option>
                    <option value="camara">Cámara</option>
                    <option value="senado">Senado</option>
                </select>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default CreateCampaign;