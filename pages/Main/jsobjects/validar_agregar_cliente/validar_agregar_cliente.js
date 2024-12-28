export default {
	ButtonSubmitClienteonClick() {
		if (InputNombre.text) {
			Insertar_Cliente.run(
				() => {
					showAlert("Cliente creado exitosamente", "success");
					closeModal(ModalAddClient.name);
					resetWidget("InputNombre");
					resetWidget("InputCorreo");
					resetWidget("InputTelefono");
					resetWidget("InputDireccion");
					resetWidget("InputIdentificador");
				},
				() => {
					showAlert("Error al crear el cliente. Inténtalo nuevamente.", "error");
				}
			);
		} else {
			showAlert("El campo nombre es obligatorio.", "error");
		}
	},
};
