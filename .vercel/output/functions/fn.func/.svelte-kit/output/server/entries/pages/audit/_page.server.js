async function load({ locals }) {
  try {
    const getRegistrosAuditoria = async () => {
      return structuredClone(
        // @ts-ignore
        await locals.pb.collection("audit").getFullList(5e3, { expand: "user" })
      );
    };
    const registros = await getRegistrosAuditoria();
    return {
      registros
    };
  } catch (error) {
    console.log(error);
  }
}
export {
  load
};
