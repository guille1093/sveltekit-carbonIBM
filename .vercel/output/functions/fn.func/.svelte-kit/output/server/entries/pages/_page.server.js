async function load({ locals }) {
  try {
    const getProjects = async () => {
      return structuredClone(
        await locals.pb.collection("projects").getFullList(5e3, { sort: "-created" })
      );
    };
    const [projects] = await Promise.all([getProjects()]);
    return {
      projects
    };
  } catch (err) {
    console.log("Error: ", err);
  }
}
export {
  load
};
