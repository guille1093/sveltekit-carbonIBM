async function load({ locals }) {
  try {
    const getVentas = async () => {
      return structuredClone(
        await locals.pb.collection("ventas").getFullList(void 0, { expand: "cliente, pasajeros, pagos, paquete" })
      );
    };
    return {
      ventas: await getVentas()
    };
  } catch (err) {
    console.log("Error: ", err);
  }
}
export {
  load
};
